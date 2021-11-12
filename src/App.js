import "./App.css";
import Routing from "./components/Routing";
import ReadyPage from "./components/ReadyPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ready" exact>
          <ReadyPage />
        </Route>
        <Route path="/">
          <Routing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
