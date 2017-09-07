import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Login from '../public/src/loginPage'
import Home from '../public/src/home'
import NotFound from '../public/src/notFound'


class App extends Component {
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Home} />
          <Route path='/login' component={Login} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Nav = () => (
  <div>
    <Link to='/'>Home </Link>&nbsp;
    <Link to='/login'>Login </Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>



export default App;