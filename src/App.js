import Login from "./components/Login/Login"
import Register from "./components/Registration/Register"
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
