import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route} from 'react-router-dom';
import Register from './register.js';
import Start from './start.js';
import About from './about.js';
// import Comment from './comment.js';
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
import SentenceList from './SentenceList.js';
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
// import HomeF from './homeF.js';
// import SentenceList from './SentenceList';
import Follow from './Follow';
import Anonymous from './Anonymous'
import Open from './Open';
import DetailsF from './detailsF.js';
// import CommentF from './commentF.js';
import DetailsM from './detailsM.js';
import SentenceM from './sentenceM.js';
import Talk from './Talk.js';
import EditW from './EditW';
import CommentsW from './CommentsW';
import Guide from './guide'
export default class App extends Component {
  render() {
      return (
        <Router>
            <div>
                <div>
                <Route exact path='/' component={Guide} />
                <Route exact path='/start' component={Start} />
                        <Route exact path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                        {/* <Route path='/petal' component={Petal} /> */}
                        <Route exact path='/details' component={Details} />
                        <Route path='/set' component={Set} />
                        {/* <Route path='/collect' component={Collect} /> */}
                        {/* <Route exact path='/comment' component={Comment} /> */}
                        <Route path='/diary' component={Diary} />
                        <Route exact path='/edit' component={Edit} />
                        <Route exact path='/edit1' component={Edit1} />
                        <Route exact path='/editM' component={EditM} />
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
                        {/* <Route path='/home' component={Home} /> */}
                        <Route exact path='/detailsYou' component={DetailsYou} />
                        <Route exact path='/detailsSimi' component={DetailsSimi} />
                        <Route exact path='/exdiary' component={Exdiary} />
                        <Route exact path='/excomment' component={Excomment} />
                        <Route exact path='/select' component={Select} />
                        <Route exact path='/person' component={Person} />
                        <Route exact path='/friend' component={Friend} />
                        <Route exact path='/miss' component={Miss} />
                        <Route exact path='/select1' component={Select1} />
                        <Route exact path='/select2' component={Select2} />
                        <Route exact path='/mailbox' component={Mailbox}/>
                        {/* <Route path='/sentenceList' component={SentenceList}/> */}
                        <Route exact path='/anonymous' component={Anonymous}/>
                        <Route exact path='/open' component={Open}/>
                        <Route exact path='/square/new' component={New}/>
                        <Route exact path='/square/follow' component={Follow}/>
                        <Route exact path='/square/hot' component={Hot}/>
                        {/* <Route path='/homeF' component={HomeF} /> */}
                        <Route exact path='/detailsF' component={DetailsF} />
                        {/* <Route exact path='/commentF' component={CommentF} /> */}
                        <Route exact path='/detailsM' component={DetailsM} />
                        <Route exact path='/sentenceM' component={SentenceM} />
                        <Route exact path='/talk' component={Talk} />
                        <Route exact path='/open/home/:uid' component={Home} />

                        <Route exact path='/open/home/details/:did' component={DetailsYou} />

                        <Route exact path='/open/home/details/:did/comments' component={CommentsW} />
                        
                        <Route exact path='/square/new/home/:uid' component={Home} />
                        <Route exact path='/square/hot/home/:uid' component={Home} />
                        <Route exact path='/square/follow/home/:uid' component={Home} />

                        <Route exact path='/square/new/details/:did' component={DetailsYou} />
                        <Route exact path='/square/hot/details/:did' component={DetailsYou} />
                        <Route exact path='/square/follow/details/:did' component={DetailsYou} />

                        <Route exact path='/square/new/details/:did/edit' component={EditW} />
                        <Route exact path='/square/hot/details/:did/edit' component={EditW} />
                        <Route exact path='/square/follow/details/:did/edit' component={EditW} />

                        <Route exact path='/square/new/details/:did/comments' component={CommentsW} />
                        <Route exact path='/square/hot/details/:did/comments' component={CommentsW} />
                        <Route exact path='/square/follow/details/:did/comments' component={CommentsW} />

                        <Route exact path='/square/new/home/details/:didss' component={DetailsYou} />
                        <Route exact path='/square/hot/home/details/:didss' component={DetailsYou} />
                        <Route exact path='/square/follow/home/details/:didss' component={DetailsYou} />

                        <Route exact path='/square/new/home/details/:did/edit' component={EditW} />
                        <Route exact path='/square/hot/home/details/:did/edit' component={EditW} />
                        <Route exact path='/square/follow/home/details/:did/edit' component={EditW} />

                        <Route exact path='/square/new/home/details/:did/comments' component={CommentsW} />
                        <Route exact path='/square/hot/home/details/:did/comments' component={CommentsW} />
                        <Route exact path='/square/follow/home/details/:did/comments' component={CommentsW} />
                        {/* <Route exact path='/guide' component={Guide}/> */}
                    </div>
            </div>
            
        </Router> 
      )
  }
}
