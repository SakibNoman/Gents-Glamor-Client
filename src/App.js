import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import Error from "./Components/Error/Error";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";

export const UserContext = createContext()

function App() {

  const [userInfo, setUserInfo] = useState({
    isSignedIn: false,
    email: '',
    image: '',
    name: ''
  })

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]} >
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
          <Route path="/login" >
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path="/orders" >
            <Header></Header>
            <Orders></Orders>
          </Route>
          <Route path="/checkout/:productId" >
            <Header></Header>
            <Checkout></Checkout>
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
    </UserContext.Provider>
  );
}

export default App;
