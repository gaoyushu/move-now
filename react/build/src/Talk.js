import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index1.css';
//import WebSocket from 'react-websocket';


var ws = new WebSocket("ws://116.62.14.0:8080/");
export default class Talk extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            me: [],
            you:[]
        }
    }
    componentDidMount() {
        console.log('http://116.62.14.0:8080/talk/' + this.props.location.state.token + '/' + this.props.location.state.ruid)
        fetch('http://116.62.14.0:8080/talk/' + this.props.location.state.token + '/' + this.props.location.state.ruid)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res)
                this.setState({
                    me: res.retme ,
                    you:res.retyou      //data里拿出自己的usename(用户名)
                })
                
            })
        this.WebSocketTest();
    }
    WebSocketTest = () => {              //建立连接
        //if ('WebSocket' in window) {
        console.log("您的浏览器支持 WebSocket!");
        ws.onopen = () => {
            ws.send("{name:" + this.state.me.uname + ",sendNuber:'已经建立连接'}");
            console.log("数据发送中...");
        };
        ws.onmessage = (evt) => {
            var receive = evt.data;
            console.log(evt);
            this.setState({
                list: [...this.state.list, receive]
            })
            // console.log(this.state.list);
        }
    }
    send = (e) => {
        const inpVal = this.input.value;
        if (inpVal !== '') {
            ws.send("{name:" + this.state.me.uname + ",sendNuber:'" + inpVal + "'}");
            fetch('http://116.62.14.0:8080/message/' + this.state.me.uid + '/' + this.props.location.state.ruid, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rcontent: inpVal
                })
            })
            this.input.value = '';
        }
    }
    componentWillUnmount() {
        ws.onclose = function () {
            // 关闭 websocket
            alert("连接已关闭...");
        };
    }
    render() {
        console.log('a');
        return (
            <div className='all'>
                <ul id='a'>{
                    this.state.list.map((item, idx) => <li key={idx} id='c'><div id='b'>{item}</div></li>)
                }
                </ul>
                <form>
                    <input type='text' id='bottom' ref={input => this.input = input} />
                    <button type="button" id="Bridge">建立连接</button>
                    <button type='button' id='submit' onClick={this.send.bind(this)}>发送</button>
                </form> 

            </div>
        )
    }
}
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// //import WebSocket from 'react-websocket';


// var ws = new WebSocket("ws://116.62.14.0:8080/");
// export default class Talk extends Component {
//     constructor() {
//         super();
//         this.state = {
//             list: [],
//             me: []
//         }
//     }
//     // componentDidMount() {
//     //     fetch('http://116.62.14.0:8080/talk/' + token + '/' + ruid)
//     //         .then((res) => {
//     //             return res.json();
//     //         })
//     //         .then((res) => {
//     //             this.setState({
//     //                 me: res.data          //data里拿出自己的usename(用户名)
//     //             })
//     //         })
//     //     this.WebSocketTest();
//     // }

//     componentDidMount() {
//         this.WebSocketTest();
//     }


//     WebSocketTest = () => {              //建立连接
//         //console.log(this.state.list);
//         //if ('WebSocket' in window) {
//         console.log("您的浏览器支持 WebSocket!");
//         ws.onopen = (evt) => {
//             ws.send("{name:'userName1',sendNuber:'已经建立连接'}");
//             console.log("数据发送中...");
//         };

//         ws.onmessage = (evt) => {
//             var receive = evt.data;
//             console.log(evt);
//             this.setState({
//                 list: [...this.state.list, receive]
//             })
//             // console.log(this.state.list);
//         }
//     }
//     send = () => {
//         const inpVal = this.input.value;
//         if (inpVal !== '') {
//             console.log('a');
//             ws.send("{name:'userName1',sendNuber:'" + inpVal + "'}");
//             // fetch('http://116.62.14.0:8080/message/' + uid + '/' + ruid, {
//             //     method: 'POST',
//             //     headers: {
//             //         'Accept': 'application/json',
//             //         'Content-Type': 'application/json'
//             //     },
//             //     body: JSON.stringify({
//             //         rcontent: inpVal
//             //     })
//             // })
//             this.input.value = '';
//         }
//     }
//     componentWillUnmount() {
//         ws.onclose = function () {
//             // 关闭 websocket
//             alert("连接已关闭...");
//         };
//     }
//     render() {
//         return (
//             <div className='all'>
//                 <ul id='a'>{
//                     this.state.list.map((item, idx) => <li key={idx} id='c'><div id='b'>{item}</div></li>)
//                 }
//                 </ul>
//                 <form>
//                     <input type='text' id='bottom' ref={input => this.input = input} />
//                     <button type="button" id="Bridge">建立连接</button>
//                     <button type='button' id='submit' onClick={this.send.bind(this)}>发送</button>
//                 </form>

//             </div>
//         )
//     }
// }