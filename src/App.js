import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import QA from "./components/QA";
import Todo from "./components/Todo";
import Wait from "./components/Wait";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    // </div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/qa" exact>
          <QA />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/wait">
          <Wait />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
