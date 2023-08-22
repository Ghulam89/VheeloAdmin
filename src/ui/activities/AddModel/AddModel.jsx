import React, { useState, useEffect } from 'react';
import { useNavigate, withRouter } from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import '../../../css/main.6120d571.css';
import axios from "axios";
import { ACTIVITY_TAG } from "../../../utils/Constants";
import qs from "qs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../../../BASE_URL';

const AddModel = (props) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate =useNavigate();
    const [vehicleBrands, setVehicleBrands] = useState([]);
    const [vehicleBrandUid, setVehicleBrandUid] = useState('');
    const [vehicleModelName, setVehicleModelName] = useState('');

    const sendDataToRegisterApi = () => {
        if (vehicleBrandUid && vehicleModelName) {
            let data = qs.stringify({
                'brand': vehicleBrandUid,
                'model': vehicleModelName
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${BASE_URL}admin/vehicleModel/add`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    toast.success("Vehicle Model Added Successfully")


                    if(response.data.status==='success'){

                        toast.success("Vehicle Model Added Successfully");
                
                        navigate('/vehicleModel')
                
                       }
                       
                    
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            toast.error("Please fill all the fields")
        }
    }

    useEffect(() => {
        let data = qs.stringify({});

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${BASE_URL}admin/vehicleBrand/getAll`,
            headers: {},
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setVehicleBrands(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className={"login-activity"}>
            <div className="">
                <ToastContainer theme='dark' />
                <div id="main-wrapper" className="show">
                    <div className="container-fluid p-5">
                        <div className="page-titles"></div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Add Model</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="basic-form">
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Model Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Name ..."
                                                        onChange={e => setVehicleModelName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label>Model Brand</label>
                                                    <select id="inputState" className="form-control"
                                                        onChange={e => setVehicleBrandUid(e.target.value)}
                                                    >
                                                        <option>Choose...</option>
                                                        {vehicleBrands.map(show => (
                                                            <option key={show['brand']} value={show['brand']}>{show['brand']}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row"></div>
                                            <div className="form-group"></div>
                                            <button type="submit" className="btn btn-add"
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
}

export default  AddModel;