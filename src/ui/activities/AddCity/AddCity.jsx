import React from "react";
import { withRouter } from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import "../../../css/main.6120d571.css";
import axios from "axios";
import qs from "qs";
import { ACTIVITY_TAG } from "../../../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../BASE_URL";

class AddCity extends React.Component {
  apiUrl = process.env.REACT_APP_API_URL;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      enabled: "",
    };
  }

  sendDataToRegisterApi = () => {
    const params = new FormData();

    if (this.state.name && this.state.enabled) {
      let data = qs.stringify({
        name: this.state.name,
        status: this.state.enabled,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}admin/city/add`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          toast.success("City Add Successfully");
          setTimeout(() => {
            const urlArgsBundle = new UrlArgsBundle().prepareFrom(
              this.props.location.search
            );
            urlArgsBundle.setActivityTag(ACTIVITY_TAG.CITIES);
            this.props.history.push(urlArgsBundle.getArgsAsUrlParams());
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Please fill all the fields");
    }
  };
  render() {
    const urlArgsBundle = new UrlArgsBundle().prepareFrom(
      this.props.location.search
    );

    return (
      <div className={"login-activity"}>
        <ToastContainer theme="dark" />

        <div className="container-fluid p-5">
          <div className="page-titles"></div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add City</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label> Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name ..."
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              name: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Enabled</label>
                        <select
                          id="inputState"
                          className="form-control"
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              enabled: e.target.value,
                            });
                          }}
                        >
                          <option>Choose...</option>
                          <option value={"Y"}>Enabled</option>
                          <option value={"N"}>Disabled</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row"></div>
                    <div className="form-group"></div>
                    <button
                      type="submit"
                      className="btn btn-add"
                      onClick={this.sendDataToRegisterApi}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddCity);
