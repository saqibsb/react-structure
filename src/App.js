import "./App.css";
import BreedList from "./components/BreedList";
import { BrowserRouter, Switch } from "react-router-dom";
import SelectedBreed from "./components/SelectedBreed";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <BreedList exact path="/" />
          <SelectedBreed exact path="/showDogImage/:name" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
