const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const cors = require("cors");
const BlogModel = require("./models");

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

    const blog = BlogModel.getBlog();
    
    /*blog.then(async function(result){
        const person = BlogModel.savePerson("hamza","filali",null,"hamza@gmail.com","azert");
        const ticket = BlogModel.saveTicket(Date.now(),22,"paris","bruxelle", result[0]._id,(await person)._id);
        ticket.then(function(){
            response.send("inseted")
        })
    }) */

    blog.then(async function(result){
        console.log(result)
        const c = BlogModel.countTicketsofBlog(result[0]._id);
        c.then(function(count){
            response.send(count.toString());
        })
    })
});

//Get users
app.get("/getusers",async(request,response)=>{
    const users = BlogModel.getUsers();
    users.then(function(user){
        response.send(user);
    })
})

//Delete user
app.delete("/deleteuser/:id",async(request,response)=>{
    const id = request.params.id;
    BlogModel.deleteUser(id);
    response.send("deleted");
})

//Get Blogs
app.get("/getblogs",async(request,response)=>{
    const blogs = BlogModel.getBlogs();
    blogs.then(function(blog){
        response.send(blog);
    })
})

app.get("/countticketofblog/:id",async(request,response)=>{
    const c = BlogModel.countTicketsofBlog(request.params.id);
    c.then(function(count){
        response.send(count.toString());
    }) 
})

//Count total number of documents in Blog collection
app.get("/countblog",async(request,response)=>{
    const c = BlogModel.countBlogs();
    c.then(function(count){
        response.send(count.toString());
    })
})

//Count total number of documents in User collection
app.get("/countuser",async(request,response)=>{
    const c = BlogModel.countUsers();
    c.then(function(count){
        response.send(count.toString());
    })
})

//Count total number of documents in Ticket collection
app.get("/countticket",async(request,response)=>{
    const c = BlogModel.countTickets();
    c.then(function(count){
        response.send(count.toString());
    })
})

//Saving user
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
                BlogModel.savePerson(request.body.firstname,request.body.lastname,null,request.body.mail,request.body.password);
                response.send({inserted:"GOOD"})
            }
        })
    }
})

//Login
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