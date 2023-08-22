import React, { useState, useEffect } from "react";
import "../../../css/main.6120d571.css";
import { ToastContainer, toast } from "react-toastify";
import Tabs from "../../../components/Tabs/Tabs";
import axios from "axios";
import BASE_URL from "../../../BASE_URL";
import { useParams } from "react-router-dom";

function CaptainProfile() {
  const {id} = useParams();
  const [update, setUpdate] = useState(0);
  const [captain, setCaptain] = useState("");
  const [document, setDocument] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [category, setCategory] = useState("");
  const [wallet, setWallet] = useState("");
  const [getWallet, setGetWallet] = useState("");

  useEffect(() => {
  

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}rider/rider/getById/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setCaptain(response.data.data.riderData);
        setVehicle(response.data.data.vehicleInfo);

        const config3 = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${BASE_URL}rider/rideCatQuick/getById/${response?.data?.data.vehicleInfo?.categoryId}`,
          headers: {},
        };

        axios
          .request(config3)
          .then((response) => {
            setCategory(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

    const config2 = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}rider/riderDocuments/getDocumentsByRider/${id}`,
      headers: {},
    };


    
    axios
      .request(config2)
      .then((response) => {
        setDocument(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const config3 = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}admin/walletRider/getByRider/${id}`,
      headers: {},
    };

    axios
      .request(config3)
      .then((response) => {
        setGetWallet(response.data.riderWallet);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendDataToRegisterApi = () => {


    const params = {
      rider:captain.id,
      balance: Number(wallet) + Number(getWallet?.balance),
    };

    axios.post(`${BASE_URL}admin/walletRider/add`, params).then((res) => {
      if (res.data.status === "success") {
        toast("Added Successfully!");

        const config3 = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${BASE_URL}admin/walletRider/getByRider/${id}`,
          headers: {},
        };

        axios
          .request(config3)
          .then((response) => {
            setGetWallet(response.data.riderWallet);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  


  return (
    <div className={"login-activity"}>
      <ToastContainer theme="dark" />
      <div className="container-fluid p-5">
        <div className="page-titles">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/react/demo/table-bootstrap-basic">Vheelo</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/react/demo/table-bootstrap-basic"> Captain Profile</a>
            </li>
          </ol>
        </div>
        <div className="row">
          <div className="col-md-12 mx-auto rounded bg-white mt-4">
            <div className="user_profile text-center py-4">
              <div className="profile-inner p-3">
                <div className="user_images">
                  <img
                    src={captain.image}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </div>
                <div className="pt-3">
                  <h2>
                    {captain.firstName +
                      " " +
                      captain.lastName}
                  </h2>
                  <p>{captain.email}</p>
                </div>

                {/* <Tabs/> */}
                <div className="tabs">
                  <ul className="tabs_list">
                    <li
                      className={`tabs_link ${
                        update === 0 ? "active" : null
                      }`}
                      onClick={() => {
                        setUpdate(0);
                      }}
                    >
                      About
                    </li>
                    <li
                      className={`tabs_link ${
                        update === 1 ? "active" : null
                      }`}
                      onClick={() => {
                        setUpdate(1);
                      }}
                    >
                      Ride Categories
                    </li>
                    <li
                      className={`tabs_link ${
                        update === 2 ? "active" : null
                      }`}
                      onClick={() => {
                        setUpdate(2);
                      }}
                    >
                      CNIC
                    </li>
                    <li
                      className={`tabs_link ${
                        update === 3 ? "active" : null
                      }`}
                      onClick={() => {
                        setUpdate(3);
                      }}
                    >
                      License
                    </li>
                    <li
                      className={`tabs_link ${
                        update === 4 ? "active" : null
                      }`}
                      onClick={() => {
                        setUpdate(4);
                      }}
                    >
                      Number Plate
                    </li>
                    <li
                      className={`tabs_link ${
                        update === 5 ? "active" : null
                      }`}
                      onClick={() => {
                        setUpdate(5);
                      }}
                    >
                      Wallet
                    </li>
                  </ul>
                  <div className="nav_tabs">
                    <div
                      className="tabsContent pt-5"
                      hidden={update != 0}
                    >
                      <div className="innner_tabs">
                        <p>{captain.city_name}</p>
                        <p>Phone: {captain.phone}</p>
                        <p>{captain.registration_time}</p>
                      </div>
                    </div>
                    <div
                      className="tabsContent pt-5"
                      hidden={update != 1}
                    >
                      <div className="row">
                        <div className="col-md-8 mx-auto">
                          <div
                            className="row "
                            style={{ alignItems: "center" }}
                          >
                            <div className="col-lg-6 col-sm-12">
                              <div>
                                <img
                                  src={category?.logo}
                                  alt=""
                                  width="100%"
                                  height="250px"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                              <div className="text-center">
                                <h6>Name: {category?.name}</h6>
                               
                                <p>
                                  Per Km Cost: {category?.priceKm}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tabsContent pt-5"
                      hidden={update != 2}
                    >
                      <div className="row">
                        <div className="col-md-10 col-sm-12 mx-auto">
                          <div className="row">
                            <div className="col-lg-6 col-sm-12">
                              <h5>Front</h5>
                              <div>
                                <img
                                  src={document?.cnicFront}
                                  alt=""
                                  width="100%"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                              <h5>Back</h5>
                              <div>
                                <img
                                  src={document?.cnicBack}
                                  alt=""
                                  width="100%"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tabsContent pt-5"
                      hidden={update != 3}
                    >
                      <div className="row">
                        <div className="col-md-10 mx-auto">
                          <div className="row">
                            <div className="col-md-6 image-centre">
                              <h5>Front</h5>
                              <div>
                                <img
                                  src={vehicle?.cardFront}
                                  alt=""
                                  width="100%"
                                />
                              </div>
                            </div>
                            <div className="col-md-6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tabsContent pt-5"
                      hidden={update != 4}
                    >
                      <div className="row">
                        <div className="col-md-7 mx-auto">
                          <div className="row">
                            <div className="col-md-12">
                              <h5>Front</h5>
                              <div>
                                <img
                                  src={vehicle?.plateImage}
                                  alt=""
                                  width="100%"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tabsContent pt-5"
                      hidden={update != 5}
                    >
                      <h4>Amount: {getWallet?.balance}</h4>
                      <div className="wallet d-flex justify-content-center pt-3">
                        <div>
                          <input
                            className="class-control"
                            onChange={(e) => {
                              setWallet({
                               
                                wallet: e.target.value,
                              });
                            }}
                            type="text"
                          />
                        </div>
                        <div className="pl-4">
                          <button
                            className="btn wallet_btn"
                            onClick={() => {
                             sendDataToRegisterApi();
                            }}
                          >
                            Add
                          </button>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="User_profile"></div>
      </div>
    </div>
  );
}

export default CaptainProfile;
