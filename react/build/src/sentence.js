import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Sentence extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            dtitle:'',
            dcontent:''
        }
      }
    // componentDidMount(){
    //     // console.log(this.props.location.state.shortdes_id);
        
    //     fetch('http://116.62.14.0:8710/diary/detail/'+this.props.location.state.did+'/1')
    //     .then(res =>{ return res.json() })
    //     .then(res=>{ 
    //         console.log(res);
    //         this.setState({
    //             data:res.data,
    //             dtitle:res.data.dtitle,
    //             dcontent:res.data.dcontent
    //         })

    //      });
     
    
    //   }
    
    title=(e)=>{
        
        this.setState({
            dtitle:e.target.value
        })
        console.log(this.state.dtitle)
    }
   content=(e)=>{
       this.setState({
           dcontent:e.target.value
       })
       console.log(this.state.dcontent);
   }
   fun=()=>{
    console.log(this.props.location.state.did);
    console.log(this.state.dcontent);
    console.log(this.state.dtitle);
    console.log(this.props.location.state.ok)
    if(this.props.location.state.ok==1){
    if(typeof(this.props.location.state.did)=='number'){
    fetch('http://116.62.14.0:8666/change/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify({token:'1',title:`${this.state.dtitle}`, content:`${this.state.dcontent}`,diaryid:`${this.props.location.state.did}`,})})
        .then(res =>{ return res.json() })
        .then(res=>{ 
            console.log(res); 
            if(res.status===0){
                Toast.success('发布成功!',1)
                setTimeout(()=>{
                    this.props.history.push('/exchange')
                },1000)
            }
        });}else{
            Toast.fail('请选择日记！',1)
        }
    }else{
        Toast.fail('请选择日记！',1)
    }
      
   }
    render() {
        
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                        <Link to='/exchange'>
                            <span style={{lineHeight:'45px',marginLeft:10,textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                    </div>
                    <input type='text' className='comment-name' placeholder='一句话介绍~' style={{marginTop:60}} value={this.state.dtitle} onChange={this.title}></input>
                    <textarea rows="13" cols="30" className='comment-area' style={{marginTop:10}} value={this.state.dcontent} onChange={this.content}>补充一下~</textarea>
                    <div style={{width:'100%',height:40}}>
                    <Link to='/select2'><button style={{marginTop:10,marginBottom:0,width:'100%',height:40,backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}}>选择日记</button></Link>
                    {/* <Link to='/exchange'> */}
                        <input type='submit' value='确定' className='comment-but' onClick={this.fun}/>
                    {/* </Link> */}
                    </div>
                </div>
           
        )
    }
}
