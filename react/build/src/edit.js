import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{},
            dtitle:'',
            dcontent:''
        }
      }
    componentDidMount(){
        console.log(this.props.location.state.shortdes_id);
        console.log(this.props.location.state.did);
        fetch('http://116.62.14.0:8666/diary/detail/'+this.props.location.state.did+'/1')
        .then(res =>{ return res.json() })
        .then(res=>{ 
            console.log(res);
            this.setState({
                data:res.data,
                dtitle:res.data.dtitle,
                dcontent:res.data.dcontent
            })

         });
     
    
      }
    
    etitle=(e)=>{
        this.setState({
            dtitle:e.target.value
        })
    }
   content=(e)=>{
       this.setState({
           dcontent:e.target.value
       })
   }
   toedit=()=>{
    fetch('http://116.62.14.0:8666/diary/update', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ diaryid:`${this.props.location.state.did}`,title:`${this.state.dtitle}`, content:`${this.state.dcontent}`})})
        .then(res =>{ return res.json() })
        .then(res=>{ 
            console.log(res); 
            if(res.status===0){
                Toast.success('编辑成功！',1)
                setTimeout(()=>{
                    this.props.history.push({pathname:'/details',state:{
                        did:this.props.location.state.did
                    }})
                },1000)
            }
        });
      
   }
    render() {
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'100px',position:'fixed',zIndex:'1000',color:'#fff'}}>
                        <div style={{width:'100%',height:'50px',backgroundImage:' linear-gradient(to right, #8bcca1 , #57a099)'}}>
                        <Link to={{
                        pathname:'/details',
                        state:{
                            did:this.props.location.state.did
                        }
                    }}>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link></div>
                        <div className='edit-imgdiv' style={{}}>
                        <img src='http://116.62.14.0:8666/api/image/2' className='edit-imgl'/>
                        <img src='http://116.62.14.0:8666/api/image/18' className='edit-imgl' style={{left:'15%'}}/>
                        <img src='http://116.62.14.0:8666/api/image/9' className='edit-imgl' style={{left:'25%'}}/>
                        <img src='http://116.62.14.0:8666/api/image/22' className='edit-imgl' style={{left:'35%',width:'24px'}}/>
                        <img src='http://116.62.14.0:8666/api/image/48' className='edit-imgl' style={{left:'45%',width:'24px'}}/>
                        {/* <Link to={{
                        pathname:'/details',
                        state:{
                            did:this.props.location.state.did
                        }
                    }}> */}
                        <img src='http://116.62.14.0:8666/api/image/7' className='edit-img' onClick={this.toedit}/>
                        {/* </Link> */}
                    </div>
                    </div>
                    
                    <input type='text' placeholder='写个标题吧~' className='edit-input' style={{position:'relative',marginTop:100}} value={this.state.dtitle} onChange={this.etitle} ></input>
                <textarea rows="13" cols="30" className='edit-area' value={this.state.dcontent} onChange={this.content} ></textarea>
                   
                </div>
           
        )
    }
}
