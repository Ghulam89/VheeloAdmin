import React, { useState } from "react";
import { useNavigate, withRouter } from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import "../../../css/main.6120d571.css";
import { ACTIVITY_TAG } from "../../../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import BASE_URL from "../../../BASE_URL";

const AddRideCategory = (props) => {

    const  navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  const [enabled, setEnabled] = useState("");
  const [type, setType] = useState("");
  const [perKmPrice, setPerKmPrice] = useState("");
  const [getFile, setGetFile] = useState("");
  const [perMinutePrice, setPerMinutePrice] = useState("");
    

  const onImageChange = (e) => {
    let selectedFiles = e.target.files;
    setFiles(selectedFiles[0]);
    console.log(selectedFiles[0]);
    console.log(files);
  };

  const sendDataToRegisterApi = async () => {
    if (name && perKmPrice && enabled) {
      console.log(name, perKmPrice, enabled, perMinutePrice, type);

      var formdata = new FormData();
      formdata.append("file", files, "/path/to/file");

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://157.245.101.0:3005/rider/auth/upload",
          requestOptions
        );
        const result = await response.text();
        console.log(result);

        setGetFile(JSON.parse(result));

        console.log(getFile);

        const axios = require("axios");
        const qs = require("qs");
        let data = qs.stringify({
          name: name,
          logo: getFile.data,
          priceKm: perKmPrice,
          priceMinute: perMinutePrice,
          type: type,
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `${BASE_URL}admin/rideCatQuick/add`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: data,
        };

        axios.request(config)

        .then((response) => {
            toast.success("Ride Category Add Successfully")


        
            if(response.data.status==='success'){

                toast.success("Ride Category Add Successfully");
        
                navigate('/vehicleModel')
        
               }
               
            
        })
     

    


      
      } catch (error) {
        console.log(error);
      }
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
                <h4 className="card-title">Add Ride Category</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Name ..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>Enabled</label>
                      <select
                        id="inputState"
                        className="form-control"
                        value={enabled}
                        onChange={(e) => setEnabled(e.target.value)}
                      >
                        <option>Choose...</option>
                        <option value="Y">Enabled</option>
                        <option value="N">Disabled</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Type</label>
                      <select
                        id="inputState"
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option>Choose...</option>
                        <option value={"CAR"}>Car</option>
                        <option value={"BIKE"}>Bike</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label>Image</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Sargodha ..."
                        onChange={onImageChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Price Km</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sargodha ..."
                        onChange={(e) => setPerKmPrice(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Price Minute</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sargodha ..."
                        onChange={(e) => setPerMinutePrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group"></div>
                  <button onClick={sendDataToRegisterApi} className="btn btn-add">
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

export default AddRideCategory;
