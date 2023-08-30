


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
// import {AiOutlineSend} from 'react-icons/ai'
import '../../css/main.6120d571.css';
import '../chatapp/chatapp.css';
import '../usermessage/usermessge.css';
import '../message/message.css';
import '../messagebox/messagebox.css'
import BASE_URL from '../../BASE_URL';
import { ToastContainer, toast } from 'react-toastify';

function Messagebox() {
  const [socket, setSocket] = useState(null);
  const [update, setUpdate] = useState(0);
  const [chat, setChat] = useState([]);
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);


  const [text, setText] = useState('');
  const [message, setMessage] = useState([]);
  const [riderMessage, setRiderMessage] = useState([]);

  console.log(riderMessage, 'rider message');
  const [getSupport, setGetSupport] = useState({});
  const [getSingleRider, setGetSingleRider] = useState('');
  const [riderData, setRiderData] = useState({});

  console.log(getSingleRider,riderData, '===????????');

  useEffect(() => {

    const newSocket = io(`${BASE_URL}message`);
    setSocket(newSocket);

    // newSocket.on('connect', () => {
    //   console.log('Connected to user chat ');
    // });

    // newSocket.on('disconnect', () => {
    //   console.log('Disconnected from the server.');
    // });
    
  //   return () => {
  //     if (newSocket) {
  //       newSocket.disconnect();
  //     }
  //   };
  }, []);

  useEffect(() => {

    axios.get(`${BASE_URL}rider/rider/getAll`)
      .then(response => {
        console.log(response.data, 'sdfkl;aksd');
        setUsers(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);




  const handleChange = event => {
    setText(event.target.value);
  };








  useEffect(() => {



    axios.get(`${BASE_URL}admin/support/getAll`)

      .then((response) => {
        console.log(response.data, 'rider message');
        setRiderMessage(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []

  );
  
  const filterChat = (val) => {
    setRiderData(val);
    localStorage.setItem('riderID', val?.id)
    
    console.log(val,'val===>>>');
    console.log('all messages data =====>>>', riderMessage);
    const arr = riderMessage.filter(item => {
      return Number(item.senderId) === Number(val.id);
    });
    console.log('response after filtering ======', arr);
    setMessage(arr);
  }
  const handleSubmit = event => {
    console.log('pressing======= ');
    event.preventDefault();
    if (socket) {
      const newMessage = {
        text: text,
        sender: 'admin',
        senderId: riderData?.id,
        sendTo: 'rider',
        rider: 'rider',
        user: ''
      };
      socket.emit('send', newMessage);
     
      setText('');

    }




  };
  
  useEffect(() => {

    const newSocket = io(`${BASE_URL}message`);
    if (newSocket) {

      
      newSocket.on('sendMessage', data => {
        console.log('message one by one ====>>', data.data, "active rider ===", riderData);
        const riderId = localStorage.getItem("riderID")
        if (Number(riderId) === (data.data.senderId)) {
          //  toast.success('you have received a new message')
          setRiderMessage(prev => [...prev, data.data]);
          setMessage(prev => [...prev, data.data]);

        }


      });
    }
  }, []);



  const el = document.querySelector('.msg_card_body');
  // id of the chat container ---------- ^^^
  if (el) {
    el.scrollTop = el.scrollHeight;
  }

  return (<div className={"bg-white p-3 rounded-5"}>


{/* <ToastContainer/> */}
    <div className="row justify-content-center h-100">
      <div className="col-md-4 col-xl-4 chat">
        <div className="card mb-sm-3 mb-md-0 contacts_card">

          <div className="card-body contacts_body">
            <h2>Chats</h2>
            <ui className="contacts">

              {  users.map((item, index) => {
                return (
                  <>

                    <li className="active" onClick={() => filterChat(item)}  >
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src={item?.image}
                            className="rounded-circle user_img"
                          />
                          <span className="online_icon" />
                        </div>
                        <div className="user_info">
                          <span>{item?.firstName + item?.lastName}</span>
                          <p>{riderData?.text}</p>
                        </div>
                      </div>
                    </li>
                  </>
                )
              })}


            </ui>
          </div>
          <div className="card-footer" />
        </div>
      </div>
      <div className="col-md-8 col-xl-8 chat">
        {riderData.id!==undefined?(<div className="card">
          <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
              <div className="img_cont">
                <img
                  src={riderData?.image}
                  className="rounded-circle user_img"
                />
                <span className="online_icon" />
              </div>
              <div className="user_info">
                <span>{riderData?.firstName + riderData?.lastName}</span>
                <p>{riderData?.text}</p>
              </div>
              <div className="video_cam">
                <span>
                  <i className="fas fa-video" />
                </span>
                <span>
                  <i className="fas fa-phone" />
                </span>
              </div>
            </div>

          </div>
          {message ? <div className="card-body pb-5 msg_card_body">

            {message?.map((item, index) => {
              if (item?.sender === 'rider') {
                return (
                  <>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                          className="rounded-circle user_img_msg"
                        />
                      </div>
                      <div className="msg_cotainer">
                        {item?.text}
                        {/* <span className="msg_time">8:40 AM, Today</span> */}
                      </div>
                    </div>
                  </>
                )
              }
              else if (item?.sender === 'admin') {

                return (
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      {item?.text}
                      {/* <span className="msg_time_send">9:10 AM, Today</span> */}
                    </div>

                  </div>
                )

              }

            })}


          </div> : null}
          <div className="card-footer">
            <form>
            <div className="input-group">
              <div className="input-group-append">
                <span className="input-group-text attach_btn">
                  <i className="fas fa-paperclip" />
                </span>
              </div>
              <input
                value={text}
                onChange={handleChange}
                name="text"
                className="form-control type_msg"
                placeholder="Type your message..."

              />
              <div className="input-group-append" style={{cursor:'pointer'}}>
                <button type='submit' className="input-group-text send_btn" onClick={handleSubmit}>
                  <i className="fas fa-location-arrow" />
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>) : (<div className='d-flex justify-content-center align-items-center pt-5'>

          <div className=' text-center pt-4'>
            <img src={require('../../images/nomessage.png')} width="300px" alt='' />
            <h3 className='m-0'>no message conversation</h3>
          </div>
        </div>)}

      </div>
    </div>





  </div>
  );
}

export default Messagebox;

















