import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route} from 'react-router-dom';
import Register from './register.js';
import Start from './start.js';
import About from './about.js';
import Comment from './comment.js';
import Edit from './edit.js';
import Edit1 from './edit1.js';
import EditM from './editM.js';
// import Collect from './collect.js';
// import Message from './message.js';
import Diary from './diary.js';
// import Tab from './Tab.js';
// import Tab1 from './Tab1.js';
import Login from './Login.js';
// import Flower from './Flower.js';
// import Petal from './Petal';
import Set from './Set.js';
import Details from './Details.js';
// import Square from './Square.js';
import Exchange from './Exchange.js';
import My from './My.js';
import Sentence from './sentence.js';
import SentenceMy from './sentenceMy.js';
import SentenceYou from './sentenceYou.js';
import SentenceList from './sentenceList.js';
import Apply from './apply.js';
// import ApplyMy from './applyMy.js';
import Home from './home.js';
import DetailsYou from './detailsYou.js';
import DetailsSimi from './detailsSimi.js';
import Exdiary from './exdiary.js';
import Excomment from './excomment.js';
import Select from './select.js';
import Person from './person.js';
import Friend from './friend.js';
import Miss from './miss.js';
import Select1 from './select1.js';
import Select2 from './select2.js';
import Mailbox from './Mailbox'
import Hot from './Hot';
import New from './New';
import HomeF from './homeF.js';
// import SentenceList from './SentenceList';
import Follow from './Follow';
import Anonymous from './Anonymous'
import Open from './Open';
import DetailsF from './detailsF.js';
import CommentF from './commentF.js';
import DetailsM from './detailsM.js';
import SentenceM from './sentenceM.js';
export default class App extends Component {
  render() {
      return (
        <Router>
            <div>
                <div>
                <Route exact path='/' component={Start} />
                        <Route exact path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                        {/* <Route path='/petal' component={Petal} /> */}
                        <Route path='/details' component={Details} />
                        <Route path='/set' component={Set} />
                        {/* <Route path='/collect' component={Collect} /> */}
                        <Route path='/comment' component={Comment} />
                        <Route path='/diary' component={Diary} />
                        <Route path='/edit' component={Edit} />
                        <Route path='/edit1' component={Edit1} />
                        <Route path='/editM' component={EditM} />
                        {/* <Route path='/message' component={Message} /> */}
                        <Route path='/about' component={About} />
                        <Route path='/exchange' component={Exchange} />
                        <Route path='/my' component={My} />
                        <Route path='/sentence' component={Sentence} />
                        <Route path='/sentenceMy' component={SentenceMy} />
                        <Route path='/sentenceList' component={SentenceList} />
                        <Route path='/sentenceYou' component={SentenceYou} />
                        <Route path='/apply' component={Apply} />
                        {/* <Route path='/applyMy' component={ApplyMy} /> */}
                        <Route path='/home' component={Home} />
                        <Route path='/detailsYou' component={DetailsYou} />
                        <Route path='/detailsSimi' component={DetailsSimi} />
                        <Route path='/exdiary' component={Exdiary} />
                        <Route path='/excomment' component={Excomment} />
                        <Route path='/select' component={Select} />
                        <Route path='/person' component={Person} />
                        <Route path='/friend' component={Friend} />
                        <Route path='/miss' component={Miss} />
                        <Route path='/select1' component={Select1} />
                        <Route path='/select2' component={Select2} />
                        <Route path='/mailbox' component={Mailbox}/>
                        {/* <Route path='/sentenceList' component={SentenceList}/> */}
                        <Route path='/anonymous' component={Anonymous}/>
                        <Route path='/open' component={Open}/>
                        <Route path='/square/new' component={New}/>
                        <Route path='/square/follow' component={Follow}/>
                        <Route path='/square/hot' component={Hot}/>
                        <Route path='/homeF' component={HomeF} />
                        <Route path='/detailsF' component={DetailsF} />
                        <Route path='/commentF' component={CommentF} />
                        <Route path='/detailsM' component={DetailsM} />
                        <Route path='/sentenceM' component={SentenceM} />
                    </div>
            </div>
            
        </Router> 
      )
  }
}
