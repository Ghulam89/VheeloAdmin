import React, { useState } from "react";
import "../../../css/main.6120d571.css";
import { ACTIVITY_TAG } from "../../../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import BASE_URL from "../../../BASE_URL";
import { useNavigate } from "react-router-dom";
const AddFaq = (props) => {

  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_API_URL;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const sendDataToRegisterApi = () => {
    if (answer && question) {
      const axios = require("axios");
      const qs = require("qs");
      let data = qs.stringify({
        question: question,
        answer: answer,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}admin/faq/add`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {

          console.log(response,'====');
      //     console.log(JSON.parse(response));
      //  const res =  JSON.stringify(response);


       if(response.data.status==='success'){

        toast.success("Faq Added Successfully");

        navigate('/faq')

       }
       

          
          
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className={"login-activity"}>
      <ToastContainer theme="dark" />

      <div className="container-fluid p-5">
        <div className="page-titles"></div>
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Faq</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label> Question</label>
                      <input
                        name="question"
                        type="text"
                        className="form-control"
                        placeholder="Enter question ..."
                        onChange={(e) => setQuestion(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label>Answer</label>
                      <textarea
                        rows={5}
                        type="text"
                        className="form-control"
                        placeholder="Enter answer ..."
                        onChange={(e) => setAnswer(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group"></div>
                  <button
                    onClick={sendDataToRegisterApi}
                    className="btn btn-add"
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
};

export default AddFaq;
