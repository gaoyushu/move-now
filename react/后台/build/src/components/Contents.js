import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './content/Home';
import System from './content/System';
import User from './content/User';
import Diary from './content/Diary';
import Comments from './content/Comments';
import Picture from './content/Picture';
export default class Contents extends Component {
    render() {
        return (
            <div>
                <Route exact path='/home' component={Home}/>
                <Route path='/system' component={System}/>
                <Route path='/user' component={User}/>
                <Route path='/diary' component={Diary}/>
                <Route path='/comments' component={Comments}/>
                <Route path='/picture' component={Picture}/>
            </div>
        )
    }
}
