import Login from "./components/Login/Login"
import Register from "./components/Registration/Register"
import Dashboard from "./components/Admin/Dashboard";
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/" component={Dashboard}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
