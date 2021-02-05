import "./App.css";
import Home from "./components/landing/Home";
import { BrowserRouter, Switch } from "react-router-dom";
import Registration from "./components/auth/registration";
import LoginForm from "./components/auth/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {<Registration exact path="/register" />}
          {<LoginForm exact path="/login" />}
          <Home exact path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
