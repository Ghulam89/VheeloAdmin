
import Chatmenu from '../chatmenu/Chatmenu'
import Message from '../message/Message'
import Messagebox from '../messagebox/Messagebox'
import {withRouter} from "react-router-dom";
import './chatapp.css'
  import React, { Component } from 'react'
  
   class Chatapp extends Component {
    render() {
      return (
        <div className='chatapp'>
        <div className="container-fluid">
          <div className="row">
             <div className="col-md-5 ">
            
             <div className="chatMenu">
             <h3>Chats</h3>
                <Chatmenu/>
              </div>
             </div>
             <div className="col-md-7">
              <div className="chatBox">
                {/* <Messagebox/> */}
                <Message   />
                
              </div>
             </div>
          </div>
        </div>
       
       
       
      </div>
      )
    }
  }
  

export default withRouter(Chatapp);