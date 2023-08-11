import React, { Component } from 'react'
import person from '../../images/male-02.jpg'
import { withRouter } from "react-router-dom";
import UrlArgsBundle from "../../core/url_args_bundle";
import {ACTIVITY_TAG} from "../../utils/Constants";
import axios from 'axios';
import './chatmenu.css';
import BASE_URL from '../../BASE_URL';
   class Chatmenu extends Component {


    constructor(props){
        super(props)
        this.state= {
            users: []
        }
    }


componentDidMount = () => {

    //    axios.post(`${BASE_URL}rider/rider/getAll`)
       
        //    .then(res => {
        //      console.log(res.data.data.users);
        //      this.setState({...this.state,users: res.data.data.users}) 
        //      console.log(this.state.users)

             
        //     })


        
    const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}rider/rider/getAll`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        this.setState({ ...this.state, users: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  

   }







    render() {

        
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return (
            
            <div className='chat_menu'>
          
            <div className='Chats_body pt-4'> 
           
              <div className='chats_person'>
                 <ul className='p-0'>
                     
                   {this.state.users.map((user)=>
                   
                   <li>
                   <a href='#'
                   
                   onClick={()=>{

                    localStorage.setItem('users_uid',user.id); 
                       urlArgsBundle.setActivityTag(ACTIVITY_TAG.MESSAGE_USER)
                       this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                   }}
                   >
                       <div className='chats-box d-flex justify-content-between align-items-center mx-3'>
                           <div className='d-flex'>
                               <div className='person_image'>
                                   <img src={user?.image} width='45px' height='45px' alt='' />
                               </div>
                               <div className='pl-3'>
                                   <h6 className='m-0'>{user.firstName+ " " + user.lastName}</h6>
                                   <p>See you tomorrow!</p>
                               </div>
                           </div>
                           <div>
                               <p>{user.create_at}</p>
                               {/* <span className='bg-black badge'> 2</span> */}
                           </div>
                       </div>
                   </a>
               </li>
                   
                   )}

                  
                    <hr className='m-0' />
                    
                   
    
                 </ul>
              </div>
            
            </div>
        </div>
          )
   }
}

export default withRouter(Chatmenu);







