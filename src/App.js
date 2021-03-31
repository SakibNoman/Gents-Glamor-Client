import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Admin from "./Components/Admin/Admin";
import Error from "./Components/Error/Error";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router >
      <Switch>

        <Route path="/admin/:category" >
          <Admin></Admin>
        </Route>
        <Route path="/admin" >
          <Admin></Admin>
        </Route>
        <Route path="/home" >
          <Header></Header>
          <Home></Home>
        </Route>
        <Route exact path="/" >
          <Header></Header>
          <Home></Home>
        </Route>
        <Route path="*" >
          <Error></Error>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
