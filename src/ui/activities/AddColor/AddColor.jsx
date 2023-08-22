import React, { useState, useEffect } from "react";
import { useNavigate, withRouter } from "react-router-dom";
import "../../../css/main.6120d571.css";
import axios from "axios";
import qs from "qs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../BASE_URL";

const AddColor = (props) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [vehicleBrands, setVehicleBrands] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [vehicleBrandUid, setVehicleBrandUid] = useState("");
  const [vehicleModelUid, setVehicleModelUid] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();
  const getBrand = () => {
  
    let data = qs.stringify({});

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}admin/vehicleBrand/getAll`,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setVehicleBrands(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getModel = () => {
    let data = qs.stringify({});

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}admin/vehicleModel/getAll`,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setVehicleModels(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBrand();
    getModel();
  }, []);

  const sendDataToRegisterApi = () => {
    console.log(vehicleBrandUid, vehicleModelUid, color);

    if (vehicleBrandUid && vehicleModelUid && color) {
      let data = qs.stringify({
        brand: vehicleBrandUid,
        model: vehicleModelUid,
        color: color,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}admin/vehicleColor/add`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          if(response.data.status==='success'){

            toast.success("Faq Added Successfully");
    
            navigate('/vehicleColor')
    
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
        <div id="main-wrapper" className="show">
          <div className="container-fluid p-5">
            <div className="page-titles"></div>
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Add Color</h4>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>Vehicle Brand</label>
                          <select
                            id="inputState"
                            className="form-control"
                            onChange={(e) => setVehicleBrandUid(e.target.value)}
                          >
                            <option>Choose...</option>
                            {vehicleBrands.map((show) => (
                              <option key={show["brand"]} value={show["brand"]}>
                                {show["brand"]}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group col-md-4">
                          <label>Vehicle Model</label>
                          <select
                            id="inputState"
                            className="form-control"
                            onChange={(e) => setVehicleModelUid(e.target.value)}
                          >
                            <option>Choose...</option>
                            {vehicleModels.map((show) => (
                              <option key={show["model"]} value={show["model"]}>
                                {show["model"]}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Vehicle Color</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="vehicle color"
                            onChange={(e) => setColor(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-row"></div>
                      <div className="form-group"></div>
                      <button
                        type="submit"
                        className="btn btn-add"
                        onClick={sendDataToRegisterApi}
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
      </div>
    </div>
  );
};

export default  AddColor;
