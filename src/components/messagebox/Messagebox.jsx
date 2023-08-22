
import React from 'react';
import '../../css/main.6120d571.css';
import '../chatapp/chatapp.css';
import '../usermessage/usermessge.css';
import '../message/message.css';
import '../messagebox/messagebox.css'
import axios from 'axios';

import { io } from 'socket.io-client';
import BASE_URL from '../../BASE_URL';

class Messagebox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      update: 0,
      chat: [],
      name: '',
      users: [],
      text: '',
      message: [],
      riderMessage: [],
      getSupport: {},
      getSingleRider: ''



    }



  }


  componentDidMount = () => {

    const socket = io(`${BASE_URL}message`);

    socket.on('connect', () => {
      console.log('Connected to the server.');
      this.setState({ socket: socket });
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the server.');
      this.setState({ socket: null });
    });




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



      


    let config3 = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}rider/rider/getById/${this.state.getSingleRider.id}`,
      headers: {},
    };


    console.log(this.state.getSupport,'asadsadsadsadas')


    axios
      .request(config3)
      .then((response) => {
        console.log(response.data.data.riderData, 'rider message');
        this.setState({ ...this.state, getSingleRider: response.data.data.riderData });
      })
      .catch((error) => {
        console.log(error);
      });





    socket.on('sendMessage', (data) => {

      console.log(data.data);

      this.setState({ ...this.state, message: data.data });

      let config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${BASE_URL}rider/support/getByRider/${this.state.getSingleRider.id}`,
        headers: {},
      };


      axios
        .request(config2)
        .then((response) => {
          console.log(response.data, 'rider message');
          this.setState({ ...this.state, riderMessage: response.data.data });
        })
        .catch((error) => {
          console.log(error);
        });
    })

  }




  componentWillUnmount() {
    const { socket } = this.state;
    if (socket) {
      socket.disconnect(); // Clean up the socket when the component unmounts
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { socket, text } = this.state;
    if (socket) {

      const message = {
        'text': text,
        'sender': localStorage.getItem('rider_support'),
        'sendTo': 'rider',
        'type': 'admin',
      }
      // Emit the message to the server
      socket.emit('send', message);


    }
  };




  render() {

    const { text } = this.state;
    console.log(this.state.getSingleRider?.id,'hello');
    console.log(this.state.riderMessage, 'admin message');

    return <div className={"bg-white p-3 rounded-5"}>



      <div className="row justify-content-center h-100">
        <div className="col-md-4 col-xl-4 chat">
          <div className="card mb-sm-3 mb-md-0 contacts_card">

            <div className="card-body contacts_body">
              <h2>Chats</h2>
              <ui className="contacts">

                {this.state.users.map((item, index) => {
                  return (
                    <>

                      <li className="active" onClick={() => {
                        localStorage.setItem('rider_support', item?.id)
                        this.setState({ getSupport: item });

                        this.setState({ ...this.state,getSingleRider:item });

                        console.log(item,'check item')




                        let config2 = {
                          method: "get",
                          maxBodyLength: Infinity,
                          url: `${BASE_URL}rider/support/getByRider/${item.id}`,
                          headers: {},
                        };
                        
                        axios
                          .request(config2)
                          .then((response) => {
                            console.log(response.data, 'rider message');
                            this.setState({ ...this.state, riderMessage: response.data.data });
                          })
                          .catch((error) => {
                            console.log(error);
                          });



                      }}  >
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
                            <p>Kalid is online</p>
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
          {this.state.getSingleRider?.firstName ? (<div className="card">
            <div className="card-header msg_head">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img
                    src={this.state.getSingleRider?.image}
                    className="rounded-circle user_img"
                  />
                  <span className="online_icon" />
                </div>
                <div className="user_info">
                  <span>{this.state.getSingleRider?.firstName + this.state.getSingleRider?.lastName}</span>
                  <p>1767 Messages</p>
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
              <span id="action_menu_btn">
                <i className="fas fa-ellipsis-v" />
              </span>
              <div className="action_menu">
                <ul>
                  <li>
                    <i className="fas fa-user-circle" /> View profile
                  </li>
                  <li>
                    <i className="fas fa-users" /> Add to close friends
                  </li>
                  <li>
                    <i className="fas fa-plus" /> Add to group
                  </li>
                  <li>
                    <i className="fas fa-ban" /> Block
                  </li>
                </ul>
              </div>
            </div>
            {this.state.riderMessage ? <div className="card-body msg_card_body">

              {this.state.riderMessage?.map((item, index) => {
                if (item?.type === 'rider') {
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
                          <span className="msg_time">8:40 AM, Today</span>
                        </div>
                      </div>
                    </>
                  )
                }
                else if (item?.type === 'admin') {

                  return (
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        {item?.text}
                        <span className="msg_time_send">9:10 AM, Today</span>
                      </div>

                    </div>
                  )

                }

              })}


            </div> : null}
            <div className="card-footer">
              <div className="input-group">
                <div className="input-group-append">
                  <span className="input-group-text attach_btn">
                    <i className="fas fa-paperclip" />
                  </span>
                </div>
                <input
                  value={text}
                  onChange={this.handleChange}
                  name="text"
                  className="form-control type_msg"
                  placeholder="Type your message..."

                />
                <div className="input-group-append">
                  <span className="input-group-text send_btn" onClick={this.handleSubmit}>
                    <i className="fas fa-location-arrow" />
                  </span>
                </div>
              </div>
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
  }
}

export default  Messagebox;
