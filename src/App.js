import logo from "./logo.svg";
import "./App.css";
import Login from "./Component/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./Component/SignUp";
import Welcome from "./Component/Welcome";
import { useMemo, useEffect } from "react";
import cookies from "js-cookie";
import { useHistory } from "react-router";

function App() {
  // const history = useHistory();
  // useEffect(()=>{
  //   if(cookies.get('token')){
  //     history.push({
  //       pathname: '/listform'
  //     })
  //   }else{
  //     history.push({
  //       pathname : '/login'
  //     })
  //   }
  // },[])

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Login></Login>
              </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/welcome">
              <Welcome></Welcome>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
