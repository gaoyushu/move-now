import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Toast} from 'antd-mobile';
export default class EditW extends Component {
   constructor(){
       super();
       this.state={
            path:'',
            data:{},
            vt:'',
            vc:'',
            imgid:-1
       }
   }
   componentDidMount(){
       var arr=this.props.location.pathname.split('/');
       if(this.props.location.pathname.indexOf('home')===-1){
            let did=this.props.match.params.did;
            fetch('http://116.62.14.0:8666/diary/detail/'+arr[4]+'/'+localStorage.getItem('token'))
            .then(res =>{ return res.json() })
            .then(res =>{
                console.log(res); 

                this.setState({
                    data:res.data,
                    path:'/'+arr[1]+'/'+arr[2]+'/'+arr[3]+'/'+arr[4],
                    vt:res.data.dtitle,
                    vc:res.data.dcontent,
                    imgid:res.data.dimage
                })
                
            });
        }else{
            let did=this.props.match.params.didss;
            fetch('http://116.62.14.0:8666/diary/detail/'+arr[5]+'/'+localStorage.getItem('token'))
            .then(res =>{ return res.json() })
            .then(res =>{
                console.log(res); 

                this.setState({
                    data:res.data,
                    path:'/'+arr[1]+'/'+arr[2]+'/'+arr[3]+'/'+arr[4]+'/'+arr[5],
                    vt:res.data.dtitle,
                    vc:res.data.dcontent,
                    imgid:res.data.dimage
                })
                
            });
        }
   }
   ct=(e)=>{
       this.setState({
           vt:e.target.value
       })
   }
   cc=(e)=>{
       this.setState({
           vc:e.target.value
       })
   }
   pv=()=>{
    fetch('http://116.62.14.0:8666/diary/edit', {
        method: 'PUT',
        headers: {
         'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ diaryid:`${this.state.data.did}`,title:`${this.state.vt}`, content:`${this.state.vc}`,imgid:`${this.state.imgid||''}`})})
        .then(res =>{ return res.json() })
        .then(res =>{ 
            console.log(res); 
            if(res.status===0){
                Toast.success(res.data,1);
                setTimeout(() => {
                    this.props.history.push(`${this.state.path}`);
                }, 1000);
            }
        });
      
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
                        <Link to={this.state.path}>
                            <span style={{marginLeft:10,lineHeight:'45px',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link></div>
                        <div className='edit-imgdiv' style={{}}>
                        <img src='http://116.62.14.0:8666/api/image/2' className='edit-imgl'/>
                        <img src='http://116.62.14.0:8666/api/image/18' className='edit-imgl' style={{left:'15%'}}/>
                        <img src='http://116.62.14.0:8666/api/image/9' className='edit-imgl' style={{left:'25%'}}/>
                        <img src='http://116.62.14.0:8666/api/image/22' className='edit-imgl' style={{left:'35%',width:'24px'}}/>
                        <img src='http://116.62.14.0:8666/api/image/48' className='edit-imgl' style={{left:'45%',width:'24px'}}/>
                        <img src='http://116.62.14.0:8666/api/image/7' className='edit-img' onClick={this.pv}/>
                    </div>
                    </div>
                    
                    <input type='text' placeholder='写个标题吧~' className='edit-input' style={{position:'relative',marginTop:100,paddingLeft:'5%',paddingRight:'5%'}} value={this.state.vt} onChange={this.ct}></input>
                    <div className='edit-z'>
                        <textarea rows="13" cols="30" className='edit-area' placeholder='多行输入' value={this.state.vc} onChange={this.cc} ></textarea>
                        <div className='edit-image'>
                        {this.state.imgid!==-1?
                                <div className="upimage">
                                        <p style={{color:'gray'}}>点击图片更改</p>
                                        <input type="file" name="image" className='upload-input' onChange={(e)=>this.onChange(e)} />
                                        <img src={'http://116.62.14.0:8666/api/image/'+this.state.imgid} />
                                </div>
                                : 
                                    <div className="upimage">
                                        <input type="file" name="image" className='upload-input' onChange={(e)=>this.onChange(e)} />
                                        <img src={this.state.imgid===-1?'http://116.62.14.0:8666/api/image/62':'http://116.62.14.0:8666/api/image/'+this.state.imgid} />
                                    </div>
                                }
                            
                            
                        </div>
                    </div>
                </div>
           
        )
    }
}
