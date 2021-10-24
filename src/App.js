import Login from "./components/Login/Login"
import Register from "./components/Registration/Register"
import Dashboard from "./components/Admin/Dashboard";
import User from "./components/Admin/User";
import Blog from "./components/Admin/Blogs";
import Ticket from "./components/Admin/Tickets";
import Home from "./components/Landing Page/Home";
import Profil from "./components/Admin/Profil";
import UserHome from "./components/Users/Home";
import AddTicket from "./components/Users/AddTicket"
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ListTickets from "./components/Users/ListTickets";

function App() {
  return (
    <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/admin/dashboard" component={Dashboard}/>
          <Route exact path="/admin/users" component={User}/>
          <Route exact path="/admin/blogs" component={Blog}/>
          <Route exact path="/admin/tickets" component={Ticket}/>
          <Route exact path="/admin/profile" component={Profil}/>
          <Route exact path="/user/home" component={UserHome}/>
          <Route exact path="/user/newticket" component={AddTicket}/>
          <Route exact path="/user/listticket" component={ListTickets}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
