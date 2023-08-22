import React from "react";
import { withRouter } from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import "../../../css/main.6120d571.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import { ACTIVITY_TAG } from "../../../utils/Constants";
import Chatapp from "../../../components/chatapp/Chatapp";
import axios from "axios";
import io from "socket.io-client";
import "./notifications.css";
import BASE_URL from "../../../BASE_URL";
class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      title: "",
      message: "",
    };
  }

  socket = io.connect(`${BASE_URL}admin`);




  sendDataToRegisterApi = () => {

    if (this.state.type === "rider") {

      this.socket.emit("send_rider", {
        text: this.state.title,
        sender: this.state.message,
      });

    } else if (this.state.type === "user") {
      this.socket.emit("send_user", {
        text: this.state.title,
        sender: this.state.message,
      });
    } else if (this.state.type === "both") {
      this.socket.emit("send_both", {
        text: this.state.title,
        sender: this.state.message,
      });
    }

    this.socket.on("connect", (data) => { });


  };

  render() {

    return (
      <div className={"login-activity"}>




        <div className="container-fluid p-5">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/react/demo/table-bootstrap-basic">Vheelo</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="/react/demo/table-bootstrap-basic">
                  Notifications
                </a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12 all_col">
              <div className="card pb-4">
                <div className="card-header">
                  <div className="card-title h5">Notifications</div>
                </div>
                <div className="notifications p-4">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.setState({
                          ...this.state,
                          title: e.target.value,
                        });
                      }}
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Message
                    </label>

                    <div class="form-floating">
                      <textarea
                        onChange={(e) => {
                          this.setState({
                            ...this.state,
                            message: e.target.value,
                          });
                        }}
                        class="form-control"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    onClick={this.sendDataToRegisterApi}
                    class="btn px-5 mt-3"
                    style={{ backgroundColor: "#00B106", color: "#fff" }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="copyright">
            <p>
              Copyright © Designed &amp; Developed by{" "}
              <a href="http://dexignlab.com/" target="_blank">
                WOlf Tech Solutions PVT LTD
              </a>{" "}
              2022
            </p>
          </div>
        </div>


      </div>
    );
  }
}

export default Notifications;
