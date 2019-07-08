import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainPage from './layouts/MainPage';
import SignIn from './layouts/SignIn';
import SignUp from './layouts/SignUp';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route  path="/signin/" component={SignIn} />
      <Route  path="/signup/" component={SignUp} />
    </Switch>
  );
}

export default App;
