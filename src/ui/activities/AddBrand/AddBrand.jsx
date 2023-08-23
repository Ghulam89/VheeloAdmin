import React, { useState } from "react";
import "../../../css/main.6120d571.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import qs from "qs";

import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../BASE_URL";
import { useNavigate } from "react-router-dom";

const AddBrand = () => {

  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_API_URL;

  const [loading,setLoading] = useState(false)

  const [vehicleBrandName, setVehicleBrandName] = useState("");
  const [type, setType] = useState("");

  const sendDataToRegisterApi = () => {
    if (vehicleBrandName && type) {
      const data = qs.stringify({
        brand: vehicleBrandName,
        type: type,
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}admin/vehicleBrand/add`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          toast.success("Vehicle Brand Added Successfully");

          if(response.data.status==='success'){

            
    
            navigate('/vehicleBrand')
    
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
      <div className="">
        <ToastContainer theme="dark" />
        <div className="container-fluid p-5">
          <div className="page-titles"></div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add Brand</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Brand Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name ..."
                          value={vehicleBrandName}
                          onChange={(e) => setVehicleBrandName(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Brand Type</label>
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
                    </div>
                    <div className="form-row"></div>
                    <div className="form-group"></div>
                    {loading === true ? (                                  <button class="btn btn-add" type="button" disabled>
  <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
   Loading...
</button>) : (  <button type="submit" className="btn btn-add"
                                                onClick={sendDataToRegisterApi}
                                            >
                                                Add
                                            </button>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrand;