import "./App.css";
import Home from "./components/landing/Home";
import About from "./components/landing/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./components/auth/registration";
import LoginForm from "./components/auth/login";
import Logout from "./components/auth/logout";
import ProtectedRoute from "./components/common/protectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {<Registration exact path="/register" />}
          {<LoginForm exact path="/login" />}
          <Route path="/logout" component={Logout} />
          {/* <ProtectedRoute path="/movies/:id" component={MovieForm} /> */}
          <ProtectedRoute path="/about" component={About} />
          <Home exact path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
