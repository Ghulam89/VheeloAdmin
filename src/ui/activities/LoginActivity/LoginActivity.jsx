import React, { useState } from "react";
import { useNavigate, withRouter } from "react-router-dom";
import "./LoginActivity.css";
import "../../../css/main.6120d571.css";
import { toast } from "react-toastify";
const LoginActivity =  () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailPopUp, setShowEmailPopup] = useState(false);
  const [showPasswordPopUp, setShowPasswordPopUp] = useState(false);
  const [showInvalidLogin, setShowInvalidLogin] = useState(false);

  const navigate= useNavigate()

  const sendDataToRegisterApi = (e) => {


    e.preventDefault();


    if (email === "") {
        toast.error('plea enter your username!')
    } else if (password === "") {
      toast.error('plea enter your password!')
    } 
      if (email === "admin" && password === "admin") {
    
          navigate('/home')
          toast.error('Welcome to vheelo admin panel!')
      
      } else {
        toast.error('invalid   username or password!')
       
      }
    }
  return (
    <div className={"login-activity pt-4"}>
      <div className={`pop-up ${showEmailPopUp ? "show-pop-up " : ""}`}>
        <span className={"warning-p"}>Please enter the Username</span>
      </div>

      <div className={`pop-up ${showPasswordPopUp ? "show-pop-up" : ""}`}>
        <span className={"warning-p"}>Please enter the Password</span>
      </div>

      <div className={`pop-up ${showInvalidLogin ? "show-pop-up" : ""}`}>
        <span className={"warning-p"}>No user found </span>
      </div>
      <div className="">
        <div className="row justify-content-center mx-4 h-100 align-items-center h-80">
          <div className="col-lg-5 col-md-9 col-sm-12">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <a href="">
                        <img
                          src={require("../../../images/main_logo.png")}
                          width="200px"
                          alt=""
                        />
                      </a>
                    </div>
                    <h4 className="text-center mb-4 text-white">
                      {" "}
                      Sign in your account{" "}
                    </h4>
                    <form action="">
                      <div className="form-group">
                        <label className="mb-1 text-white">
                          <strong>Username</strong>{" "}
                        </label>
                        <input
                          type="text"
                          name={"email"}
                       
                          placeholder={"Enter Username"}
                          className="form-control"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 text-white ">
                          <strong>Password</strong>{" "}
                        </label>
                        <input
                          type="password"
                          className="form-control"
                         
                          name={"password"}
                          placeholder={"Enter Password"}
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                      </div>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox ml-1 ">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="basic_checkbox_1"
                            />
                            <label
                              className="custom-control-label text-white"
                              htmlFor="basic_checkbox_1"
                            >
                              {" "}
                              Remember my preference{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn bg-white text-primary btn-block"
                          onClick={sendDataToRegisterApi}
                        >
                          {" "}
                          Sign Me In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginActivity;
