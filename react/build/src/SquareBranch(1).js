import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class SquareBranch extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: "/square",
            likeImg:'http://116.62.14.0:8699/zhaohuaxishi/image/2',
            likeImg1:'http://116.62.14.0:8699/zhaohuaxishi/image/3',
            likeC:0,
            data:[],
        }
      }
      componentDidMount(){
        console.log(this.props.location.pathname);
        let arr=this.props.location.pathname.split('/');
        // var datas=arr.length===2?'follow':arr[2];
        var datas=arr[2];
        console.log(datas);
            fetch('http://116.62.14.0:8083/zhaohuaxishi/square/'+datas+'/'+localStorage.getItem('token')).then(res =>res.json())
                .then(res =>{
             console.log(res); 
             this.setState({
                 data:res.data

             })
            },[]);

      }
      setLike=(idx)=>{
          console.log(this.state.data[idx].did)
            fetch('http://116.62.14.0:8083/zhaohuaxishi/square/praise/'+localStorage.getItem('token')+'/'+`${this.state.data[idx].did}`,{
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }, 
            }).then(res =>{ return res.json() }).then(d =>{ console.log(d); }
              ,[]);
        if(this.state.data[idx].pstatus==='true'){
            let arrs=this.state.data;
            arrs[idx].pstatus='false'
            arrs[idx].dpraise=arrs[idx].dpraise-1;
            this.setState({
                data:arrs
            })
        }
        else{
            let arrs=this.state.data;
            arrs[idx].pstatus='true';
            arrs[idx].dpraise=arrs[idx].dpraise+1;
            this.setState({
                data:arrs
            })
        }
      }
    render() {
        let arr=this.props.location.pathname.split('/');
        var data=arr[2];
        console.log(data)
        return (
            <div>
                {this.state.data?
                    this.state.data.map((item,idx)=>(
                        <div className='s-c' key={idx} >
                    <div className='s-top' >
                        <Link to={'/square/'+data+'/home/'+item.uid}>
                            <div className='s-top-h'>
                                <img src="src/images/logo.png" />
                            </div>
                        </Link>       
                        <div className='s-top-t'>
                            {item.uname}
                        </div>
                        <div className='s-top-time'>
                        {item.dtime}
                        </div>
                    </div>
                    <Link to={'/square/'+data+'/details/'+item.did}>
                        <div className='s-center'>
                            <p style={{wordWrap:'break-word'}}>{item.dtitle}</p>
                        </div>
                    </Link>
                    <div className='s-bottom'>
                        <div className='s-comment'>
                            <img src='src/images/评论.png'/>
                            {item.comments}
                        </div>
                        <div className='s-like' key={idx} >
                            <img src={item.pstatus==='false'?this.state.likeImg:this.state.likeImg1} onClick={()=>this.setLike(idx)} />
                            {item.dpraise}
                        </div>
                    </div>
                    
                </div>
                    )):<div className='s-c'>
                        <div className='s-top'>
                            您还没有关注用户哦
                        </div>
                        </div>
                }
                <div style={{width:'100%',height:'45px',float:'left'}} >
                </div>
            </div>
        )
    }
}
