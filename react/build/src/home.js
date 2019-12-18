import React, { Component } from 'react'
import {TabBar} from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            like:'http://116.62.14.0:8666/api/image/28',
            unlike:'http://116.62.14.0:8666/api/image/29',
            follow:'http://116.62.14.0:8666/api/image/19',
            unfollow:'http://116.62.14.0:8666/api/image/20',
            data:{},
            diary:[],
            path:'',
            path1:''
        }
    }
    componentDidMount(){
        if(this.props.location.pathname.indexOf('open')!==-1){
            let crr=this.props.location.pathname.split('/');
            this.setState({
                path:'/open',
                path1:'/open/home/details/'
            })
        }else{
            console.log(this.props.location.pathname);
            let arr=this.props.location.pathname.split('/');
            var path='/'+arr[1]+'/'+arr[2];
            var path1='/'+arr[1]+'/'+arr[2]+'/home/details/'
            this.setState({
                path:path,
                path1:path1
            })
        }

        let uid=this.props.match.params.uid;
        fetch('http://116.62.14.0:8666/square/userhome/1'+'/'+uid)
        .then(res =>{ return res.json() })
        .then(res =>{
            console.log(res); 
            var datas=res.data;
                if(datas.diary!=='当前用户没有日记！'){
                    for(var i=0;i<datas.diary.length;i++){
                        var times=datas.diary[i].dtime;
                        var times1=times.split(' ')[0];
                        var times2=times1.split('/');
                        var month=times2[0];
                        var day=times2[1];
                        var year=times2[2];
                        datas.diary[i].month=month;
                        datas.diary[i].day=day;
                        datas.diary[i].year=year;
                    }
                    this.setState({
                        data:datas,
                        diary:datas.diary
                    })

            }else{
                this.setState({
                    data:datas,
                    diary:null
                })
            }
        });
   }
   setFollow=()=>{
       console.log(this.state.data.uid)
        fetch('http://116.62.14.0:8666/square/concerns/1', {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },body: JSON.stringify({cuid:`${this.state.data.uid}`})
        }).then(res =>{ return res.json() }).then(d =>{ console.log(d); })
       if(this.state.data.isFollow==='true'){
           var dds=this.state.data;
           dds.isFollow='false';
           dds.ufans=dds.ufans-1;
           this.setState({
               data:dds
           })
       }
       else{
            var dds=this.state.data;
            dds.isFollow='true';
            dds.ufans=dds.ufans+1;
            this.setState({
                data:dds
            })
       }
   }
   setLike=(idx)=>{
        console.log(this.state.data.diary[idx].did)
        fetch('http://116.62.14.0:8666/square/praise/1/'+`${this.state.data.diary[idx].did}`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        }).then(res =>{ return res.json() }).then(d =>{ console.log(d); }
        ,[]);
        if(this.state.data.diary[idx].pstatus==='true'){
            let arrs=this.state.data;
            arrs.diary[idx].pstatus='false'
            arrs.diary[idx].dpraise=arrs.diary[idx].dpraise-1;
            this.setState({
                data:arrs
            })
        }
        else{
            let arrs=this.state.data;
            arrs.diary[idx].pstatus='true';
            arrs.diary[idx].dpraise=arrs.diary[idx].dpraise+1;
            this.setState({
                data:arrs
            })
        }
   }
    render() {
        console.log(this.props.location.pathname);
        let arr=this.props.location.pathname.split('/');
        // var path='/'+arr[1]+'/'+arr[2];
        // var path1='/'+arr[1]+'/'+arr[2]+'/home/details/'
        return (
            <div>
                <div className='home-head'>
                    <Link to={this.state.path}>
                        <span style={{marginLeft:10,textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                    </Link>
                    {this.state.data.isFollow!=='myself'? 
                        <img src={this.state.data.isFollow==='true'?this.state.follow:this.state.unfollow} style={{width:30,height:30,float:'right',marginTop:10,marginRight:5}} onClick={this.setFollow}/>
                        :<div style={{width:30,height:30,float:'right',marginTop:10,marginRight:5}}></div>
                    }    
                    <div className='home-headt'>
                        <div className='home-img'>
                            <img src='http://116.62.14.0:8666/api/image/5'/>
                        </div>
                        <div className='home-name'> 
                            <p>{this.state.data.uname}</p>
                        </div>
                    </div>
                    <div className='home-headb'>                     
                        <div className='home-two1'>
                            <p className='home-p1'>关注 {this.state.data.ufriend}</p>
                            {/* <p className='home-p2'>10</p> */}
                        </div>
                        <div className='home-two2'>
                            <p className='home-p1'>粉丝 {this.state.data.ufans}</p>
                            {/* <p className='home-p2'>10</p> */}
                        </div>
                    </div>
                    <div className='home-sign'>
                        <p>{this.state.data.uintroduce}</p>
                    </div>
                </div>
                {this.state.diary===null?<div>此用户未发表日记</div>:
                    this.state.diary.map((item,idx)=>(
                        <div key={idx} className='home-div' style={{backgroundColor:'#fff',width:'100%',marginLeft:0,marginTop:'1px'}}>
                            <div className='home-diary' style={{marginTop:5}}>
                                <div className='home-diaryl'>
                                    <p style={{fontSize:'19px',textAlign:'center',paddingTop:'5px'}}>{item.day}</p>
                                    <p style={{fontSize:'10px',color:'#8bcca1',textAlign:'center'}}>{item.year}/{item.month}</p>
                                </div>
                                <div className='home-diaryr'>
                                <Link to={this.state.path1+item.did}><div className='home-diaryrt'>
                                        <p>{item.dtitle}</p>
                                    </div></Link>
                                    <div className='home-diaryrb'>
                                        <p>{item.dpraise}</p>
                                        <img src={item.pstatus==='true'?this.state.like:this.state.unlike} onClick={()=>this.setLike(idx)}/>
                                        <p>{item.comments}</p>
                                        <Link to='/detailsYou'><img src='http://116.62.14.0:8666/api/image/46'/></Link>
                                    </div>  
                                    
                                </div>
                            </div>
                        </div>
                    ))                      
                    }
                        <div style={{paddingTop:40,paddingBottom:20,position:'relative',width:'100%'}}>
                        <p style={{color:'#8bcca1',fontSize:'12px',textAlign:'center'}}>已经到底啦</p>
                    </div>            
      </div>
        )
    }
}
