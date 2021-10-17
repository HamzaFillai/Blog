const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonScema = new mongoose.Schema({
    first_name : {type : String},
    last_name : {type : String},
    role : {type : String},
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
    async savePerson(ferstname,lastname,role,email,password)
    {
        const persone = new Person({first_name:ferstname,last_name:lastname,role : role,email:email,password:password});
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
    },

    async countBlogs()
    {
        const c = await Blog.countDocuments({});
        return c;
    },

    async countUsers()
    {
        const c = await Person.countDocuments({});
        return c;
    },

    async countTickets()
    {
        const c = await Ticket.countDocuments({});
        return c;
    },

    async countTicketsofBlog(id)
    {
        const c = await Ticket.countDocuments({idBlog : id});
        return c;
    },

    async getUsers()
    {
        const getu = await Person.find({role : null});
        return getu;
    },

    async getUser(id)
    {
        const getu = await Person.findById(id);
        return getu;
    },

    async getAdmin()
    {
        const getu = await Person.find({role : "admin"});
        return getu;
    },

    async getUserByEmail(email)
    {
        const getu = await Person.find({email : email});
        return getu;
    },

    async UpdatePassword(password)
    {
        const newpass = await Person.findOne({role : "admin"},(err,update)=>{
            update.password = password,
            update.save();
        });
        return newpass;
    },

    async deleteUser(id)
    {
        const deleteu = await Person.findByIdAndRemove(id).exec();
        return deleteu;
    },

    async getBlogs()
    {
        const getb = await Blog.find();
        return getb;
    },

    async getBlog(id)
    {
        const getb = await Blog.findById(id);
        return getb;
    },

    async deleteBlog(id)
    {
        const deleteu = await Blog.findByIdAndRemove(id).exec();
        return deleteu;
    },

    async getTickets()
    {
        const ticket = await Ticket.find();
        return ticket;
    },

    async deleteTickets(id)
    {
        const deleteu = await Ticket.deleteMany({idBlog : id});
        return deleteu;
    },

    async deleteTicket(id)
    {
        const deletet = await Ticket.findByIdAndRemove(id).exec();
        return deletet;
    }
}