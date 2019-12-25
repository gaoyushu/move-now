import './App.css';
import React, { Component } from 'react'
import Login from './Login';
import Enter from './components/Enter';
import { HashRouter as Router,Route,Link} from 'react-router-dom';

export default class App extends Component {


  render() {
    return (
      <Router>
        <Link to='/'/>
        <div>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/enter' component={Enter}/>
        </div>
      </Router>  
    )
  }
}

