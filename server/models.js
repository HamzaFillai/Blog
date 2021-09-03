const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonScema = new mongoose.Schema({
    first_name : {type : String},
    last_name : {type : String},
    email : {type : String},
    password : {type : String},
})

const BlogSchema = new mongoose.Schema({
    name : {type : String}
})

const TicketSchema = new mongoose.Schema({
    date : {type : Date},
    num : {type : Number},
    title : {type : String},
    contained : {type : String},
    idBlog : [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
    idPerson : [{ type: Schema.Types.ObjectId, ref: 'Person' }],
})

const Person = mongoose.model("Person",PersonScema);
const Blog = mongoose.model("Blog",BlogSchema);
const Ticket = mongoose.model("Ticket",TicketSchema);

module.exports = {
    async savePerson(ferstname,lastname,email,password)
    {
        const persone = new Person({first_name:ferstname,last_name:lastname,email:email,password:password});
        return await persone.save();
    },

    async saveBlog(name)
    {
        const blog = new Blog({name : name});
        return await blog.save();
    },

    async saveTicket(date,num,title,contained,idBlog,idPerson)
    {
        const ticket = new Ticket({date : date,num : num,title : title,contained : contained,idBlog : idBlog,idPerson : idPerson});
        return await ticket.save();
    },

    async existingEmail(email)
    {
        const c =  await Person.countDocuments({email:email});  
        return c;
    },

    async existingUser(email,password)
    {
        const c =  await Person.countDocuments({email:email,password:password});  
        return c;
    }
}