
import "./App.css";
import Routing from "./components/Routing";
import QuizRouting from "./components/Quiz/QuizRouting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ready" exact>
          <QuizRouting />
        </Route>
        {/* <ProtectedRoutes path="/ready" exact component={QuizRouting} isLogin={true} /> */}
          
        <Route path="/">
          <Routing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
