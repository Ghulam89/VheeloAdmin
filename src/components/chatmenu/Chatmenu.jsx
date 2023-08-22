import React, { Component } from "react";
import axios from "axios";
import "./chatmenu.css";
import BASE_URL from "../../BASE_URL";
class Chatmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount = () => {
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
  };

  render() {
    return (
      <div className="chat_menu">
        <div className="Chats_body pt-4">
          <div className="chats_person">
            <ul className="p-0">
              {this.state.users.map((user) => (
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      localStorage.setItem("users_uid", user.id);
                    }}
                  >
                    <div className="chats-box d-flex justify-content-between align-items-center mx-3">
                      <div className="d-flex">
                        <div className="person_image">
                          <img
                            src={user?.image}
                            width="45px"
                            height="45px"
                            alt=""
                          />
                        </div>
                        <div className="pl-3">
                          <h6 className="m-0">
                            {user.firstName + " " + user.lastName}
                          </h6>
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
              ))}

              <hr className="m-0" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatmenu;
