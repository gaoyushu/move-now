import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';
import { nonsense } from 'antd-mobile/lib/picker';
import { TabBar } from 'antd-mobile'

export default class Select extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 2,
            display: 'none',
            data: [],
            selectedTab: "/diary",
            // checkValue:'false',
            checked: [],
            id: -1
            // zIndex:1000
        }
    }
    componentDidMount() {
        fetch('http://116.62.14.0:8666/changed/choose/'+localStorage.getItem('token'))
            .then(res => { return res.json() })
            .then(res => {
                console.log(res.data);
                console.log(this.props.location.state.shortdes_id);
                if (res.data !== '您没有可选日记') {
                    var ss = res.data;
                    for (var i = 0; i < ss.length; i++) {
                        var time = ss[i].dtime;
                        var time1 = time.split(' ')[0];
                        var time2 = time1.split('/');
                        var year = time2[2];
                        var month = time2[0];
                        var day = time2[1];
                        ss[i].year = year;
                        ss[i].month = month;
                        ss[i].day = day;
                    }
                    var carr = [];
                    for (var i = 0; i < res.data.length; i++) {
                        carr[i] = false;
                        this.setState({
                            checked: carr
                        })
                    }
                    this.setState({
                        data: ss
                    })
                } else {
                    Toast.fail(res.data, 1)
                }
            });

    }
    check = (idx) => {
        var carr = this.state.checked;
        for (var i = 0; i < this.state.checked.length; i++) {

            carr[i] = false;
            this.setState({
                checked: carr
            })
            if (i == idx) {
                carr[i] = true;
                this.setState({
                    checked: carr
                })
            }
        }
    }
    fun = () => {

        this.state.checked.map((item, idx) => {
            console.log(this.state.data[idx].did)
            if (item === true) {
                this.setState({
                    id: this.state.data[idx].did
                }, () => {
                    console.log(this.state.id);
                    fetch('http://116.62.14.0:8666/changed/choose', {
                        method: 'POST',
                        mode:'cors',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ token:localStorage.getItem('token'), oneid: `${this.props.location.state.shortdes_id}`, diaryid: `${this.state.id}` })
                    })
                        .then(res => { return res.json() })
                        .then(res => {

                            console.log(res);
                            if (res.status === 0) {
                                Toast.success(res.data, 1)
                                setTimeout(() => {
                                    this.props.history.push({
                                        pathname: '/exdiary', state: {
                                            shortdes_id: this.props.location.state.shortdes_id
                                        }
                                    })
                                }, 1000)
                            }
                        });

                })

            }
        })
        // console.log(this.state.id);

    }
    render() {
        return (
            <div className='comment'>
                <div style={{ width: '100%', height: '50px', position: 'fixed', zIndex: '1000', backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)', color: '#fff' }}>
                    <Link to={{
                        pathname: '/exdiary',
                        state: {
                            shortdes_id: this.props.location.state.shortdes_id
                        }
                    }}><div style={{ width: '10%', lineHeight: '45px', float: 'left' }}>
                            <span style={{ float: 'right', textDecoration: 'none', color: '#fff', fontWeight: 'bold', fontSize: '30px' }}>{`<`}</span>
                        </div> </Link>
                    <p style={{ width: '80%', float: 'left', paddingRight: '10%', textAlign: 'center', fontSize: '17px', lineHeight: '50px' }}>选择日记</p>

                </div>
                {
                    this.state.data.map((item, idx) => (
                        idx == 0
                            ? <div className='message-div' style={{ width: '100%', height: '70px', marginLeft: 0, marginTop: '55px' }}>
                                <div className='select-check'>
                                    <input type="checkbox" checked={this.state.checked[idx]} onChange={() => this.check(idx)} />
                                </div>

                                <div className='message-diary' style={{ height: 70, width: '92%', marginTop: 5, float: 'left' }}>
                                    <div className='message-diaryl' style={{ height: 50, width: '18%' }}>
                                        <p style={{ fontSize: '19px', textAlign: 'center', paddingTop: '5px' }}>{item.day}</p>
                                        <p style={{ fontSize: '10px', color: '#8bcca1', textAlign: 'center' }}>{item.year}/{item.month}</p>
                                    </div>
                                    <div className='message-diaryr' style={{ width: '75%' }}>
                                        <p>{item.dtitle}</p>
                                    </div>

                                </div>
                            </div>
                            : <div className='message-div' style={{ width: '100%', height: '70px', marginLeft: 0, marginTop: 10 }}>
                                <div className='select-check'>
                                    <input type="checkbox" checked={this.state.checked[idx]} onChange={() => this.check(idx)} />
                                </div>
                                <div className='message-diary' style={{ height: 70, width: '92%', marginTop: 5, float: 'left' }}>
                                    <div className='message-diaryl' style={{ height: 50, width: '18%' }}>
                                        <p style={{ fontSize: '19px', textAlign: 'center', paddingTop: '5px' }}>{item.day}</p>
                                        <p style={{ fontSize: '10px', color: '#8bcca1', textAlign: 'center' }}>{item.year}/{item.month}</p>
                                    </div>
                                    <div className='message-diaryr' style={{ width: '75%' }}>
                                        <p>{item.dtitle}</p>
                                    </div>
                                </div>
                            </div>
                    ))
                }


                {/* <Link to='/exdiary'> */}
                <button className='comment-but' style={{ marginTop: 10 }} onClick={this.fun}>确定</button>
                {/* </Link> */}
            </div>
        )
    }
}
