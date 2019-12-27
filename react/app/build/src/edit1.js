import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class Edit1 extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{},
            dtitle:'',
            dcontent:'',
            imgid:-1
        }
      }
    toedit=()=>{
        fetch('http://116.62.14.0:8666/diary/edit',  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token:localStorage.getItem('token'),title:`${this.state.dtitle}`, content:`${this.state.dcontent}`,imgid:`${this.state.imgid}`})})
            .then(res =>{ return res.json() })
            .then(res=>{ 
                console.log(res); 
                if(res.status===0){
                    Toast.success('编辑成功！',1)
                    setTimeout(()=>{
                        this.props.history.push({pathname:'/details',state:{
                            did:res.data
                        }})
                    },1000)
                }
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
   onChange = (e) => {
    const file = e.target.files[0];
    var formData = new FormData();
    formData.append('image', file);
    fetch('http://116.62.14.0:8666/api/image', {
        method: 'POST',
        mode:"cors",          
        body: formData,
    }).then(res=>res.json())
    .then(res=>{
        console.log(res.data)
        if(res.imageid){
            this.setState({
                imgid:res.imageid
            })
            // fetch('http://116.62.14.0:8666/', {
            //     method: 'POST',
            //     mode:"cors",          
            //     body: JSON.stringify({token:localStorage.getItem('token'),imgid:res.imageid})
            // }).then(res=>res.json()).then(res=>{
            //     if(res.status===0){
            //         console.log(res.imgid);
            //         Toast.success(res.data,1);
            //         this.setState({
            //             uimage:res.imgid
            //         })
            //     }
            //     else{
            //         Toast.fail(res.data,1);
            //     }
            // }
            // )
        }else{
            Toast.fail(res.data,1);
        }
    }
    )
    };
    render() {
        return (
            
                <div className='comment'>
                    <div style={{width:'100%',height:'100px',position:'fixed',zIndex:'1000',color:'#fff'}}>
                        <div style={{width:'100%',height:'50px',backgroundImage:' linear-gradient(to right, #8bcca1 , #57a099)'}}>
                        <Link to='/diary'>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link></div>
                        <div className='edit-imgdiv' style={{}}>
                        <img src='http://116.62.14.0:8666/api/image/2' className='edit-imgl'/>
                        <img src='http://116.62.14.0:8666/api/image/18' className='edit-imgl' style={{left:'15%'}}/>
                        <img src='http://116.62.14.0:8666/api/image/9' className='edit-imgl' style={{left:'25%'}}/>
                        <img src='http://116.62.14.0:8666/api/image/22' className='edit-imgl' style={{left:'35%',width:'24px'}}/>
                        <img src='http://116.62.14.0:8666/api/image/48' className='edit-imgl' style={{left:'45%',width:'24px'}}/>
                        <img src='http://116.62.14.0:8666/api/image/7' className='edit-img' onClick={this.toedit}/>
                        
                    </div>
                    </div>
                    
                    <input type='text' placeholder='写个标题吧~' className='edit-input' style={{position:'relative',marginTop:100,paddingLeft:'5%',paddingRight:'5%'}}  value={this.state.dtitle} onChange={this.etitle} ></input>
                    <div className='edit-z'>
                        <textarea rows="13" cols="30" className='edit-area' placeholder='多行输入' value={this.state.dcontent} onChange={this.content} ></textarea>
                        <div className='edit-image'>
                            <div className="upimage">
                                <input type="file" name="image" className='upload-input' onChange={(e)=>this.onChange(e)} />
                                <img src={this.state.imgid===-1?'http://116.62.14.0:8666/api/image/62':'http://116.62.14.0:8666/api/image/'+this.state.imgid} />
                            </div>
                            
                            
                        </div>
                    </div>
                   
                </div>
           
        )
    }
}
