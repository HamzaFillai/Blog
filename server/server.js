const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const cors = require("cors");
const BlogModel = require("./models");
const { response } = require("express");

let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:blog@cluster0.8ve4s.mongodb.net/blogdata?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((res)=>{console.log(res)});

app.get("/",async(request,response)=>{

    /*const person = BlogModel.savePerson("hamza","filali","hamza@gmail.com","azert");
    const blog = BlogModel.saveBlog("Second");
    const ticket = BlogModel.saveTicket(Date.now(),22,"ok","nklnq",(await person)._id,(await blog)._id);
   
    ticket.then(function(result){
        response.send("inserted");
    })*/
    response.send("OK")
})

app.post("/savingusers",async (request,response)=>{
    if(re.test(request.body.mail)==false)
    {
        response.send({error : "It's not the correct from for the email address !"})
    }
    else
    {
        const c = BlogModel.existingEmail(request.body.mail);
        c.then(function(count){
            if(count==1)
            {
                response.send({error:"This email address is already exist"})
            }
            else
            {
                BlogModel.savePerson(request.body.firstname,request.body.lastname,request.body.mail,request.body.password);
                response.send({inserted:"GOOD"})
            }
        })
    }
})

app.post("/login",async(request,response)=>
{
    if(re.test(request.body.mail)==false)
    {
        response.send({error : "It's not the correct from for the email address !"})
    }
    else
    {
        const c = BlogModel.existingUser(request.body.mail,request.body.password);
        c.then(function(count){
            if(count==1)
            {
                response.send({success:"Successfully"})            
            }
            else
            {
                response.send({error:"*Incorrect email address or password"})
            }
        })
    }
})

app.listen(8080, () => {
    console.log("Yes, your server is running on port 8080");
});