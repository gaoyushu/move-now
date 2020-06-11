import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './content/Home';
import System from './content/System';
import User from './content/User';
import Diary from './content/Diary';
import Comments from './content/Comments';
import PictureExamine from './content/Pictureexamine';
import Picture from './content/Picture';
import DiaryExamine from './content/Diaryexamine';
import CommentExamine from './content/Commentexamine';
export default class Contents extends Component {
    render() {
        return (
            <div>
                <Route exact path='/home' component={Home}/>
                <Route path='/system' component={System}/>
                <Route path='/user' component={User}/>
                <Route path='/diary' component={Diary}/>
                <Route path='/comments' component={Comments}/>
                <Route path='/pictureexamine' component={PictureExamine}/>
                <Route path='/diaryexamine/:id' component={DiaryExamine}/>
                <Route path='/commentexamine/:id' component={CommentExamine}/>
                <Route path={`/picture`} component={Picture}/>
            </div>
        )
    }
}
