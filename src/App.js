import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import MainPage from './layouts/MainPage';
// import SignIn from './layouts/SignIn';
// import SignUp from './layouts/SignUp';
import Loader from './components/Loader';
import Loadable from 'react-loadable';

const SignIn = Loadable({
  loader: () => import('./layouts/SignIn'),
  loading: Loader
});

const SignUp = Loadable({
  loader: () => import('./layouts/SignUp'),
  loading: Loader
})

export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
         loading : true
      }
    }

  componentWillMount () {
    setTimeout(() => {
        this.setState({loading: false})
    }, 1000)
  }

  render() {
    const {loading} = this.state;
    return (
        <React.Fragment>
          {loading ? <Loader loading={loading}/> :
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route  path="/signin/" component={SignIn} />
            <Route  path="/signup/" component={SignUp} />
          </Switch>}
        </React.Fragment>
    )
  }
}


