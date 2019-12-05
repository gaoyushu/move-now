import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Register from './register.js';
import Start from './start.js';
import About from './about.js';
import Comment from './comment.js';
import Edit from './edit.js';
import Collect from './collect.js';
import Message from './message.js';
import Diary from './diary.js';
import Tab from './Tab.js';
import Tab1 from './Tab1.js';
import Login from './Login.js';
import Flower from './Flower.js';
import Petal from './Petal';
import Set from './Set.js';
import Details from './Details.js';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  render() {
      return (
        <Router>
            <div>
                {/* <Register/> */}
                {/* <Start/> */}
                {/* <About/> */}
                {/* <Comment/> */}
                {/* <Edit/> */}
                {/* <Message/> */}
                {/* <Collect/> */}
                {/* <Diary/> */}
                {/* <AppTab/> */}
                <div>
                <Route exact path='/' component={Start} />
                        <Route exact path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                        <Route path='/flower' component={Tab} />
                        <Route path='/diarytab' component={Tab1} />
                        <Route path='/petal' component={Petal} />
                        <Route path='/details' component={Details} />
                        <Route path='/set' component={Set} />
                        <Route path='/collect' component={Collect} />
                        <Route path='/comment' component={Comment} />
                        <Route path='/diary' component={Diary} />
                        <Route path='/edit' component={Edit} />
                        <Route path='/message' component={Message} />
                        <Route path='/about' component={About} />
                    </div>
            </div>
            
        </Router> 
      )
  }
}
