import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import BASE_URL from "../../../BASE_URL";
import "../../../css/main.6120d571.css";
import "./userprofile.css";
import { useNavigate, useParams } from "react-router-dom";

function UserProfile() {

  const {id}= useParams();
  const [update, setUpdate] = useState(0);
  const [user, setUser] = useState("");
  const [wallet, setWallet] = useState("");

  useEffect(() => {

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}user/user/getById/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data, "single ");
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendDataToRegisterApi = () => {
    const params = new FormData();

    params.append(
      "__api_key__",
      "hi,-its-eevee. I can do wonderful things in api creation."
    );
    params.append("user_uid", user.uid);
    params.append("amount", wallet);

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        "https://apis.cab5.pk/add_amount_to_user_wallet.php",
        params,
        config
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.state === "OK") {
          toast("Added Successfully!");
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
              <a href="/react/demo/table-bootstrap-basic">Clients Profile</a>
            </li>
          </ol>
        </div>
        <div className="row">
          <div className="col-md-12 mx-auto rounded bg-white mt-4">
            <div className="user_profile text-center py-4">
              <div className="profile-inner p-3">
                <div className="user_images">
                  <img src={user.image} width="100px" height="100px" alt="" />
                </div>

                <div className="pt-3">
                  <h2>{user?.name}</h2>
                </div>

                <div className="tabs">
                  <ul className="tabs_list">
                    <li
                      className={`tabs_link ${update === 0 ? "active" : null}`}
                      onClick={() => {
                        setUpdate(0);
                      }}
                    >
                      About
                    </li>
                    <li
                      className={`tabs_link ${update === 1 ? "active" : null}`}
                      onClick={() => {
                        setUpdate(1);
                      }}
                    >
                      Wallet
                    </li>
                  </ul>
                  <div className="nav_tabs">
                    <div className="tabsContent pt-5" hidden={update !== 0}>
                      <div className="innner_tabs">
                        <p>Phone: {user.phone}</p>
                        <p>Member Since: {user?.createdAt}</p>
                      </div>
                    </div>
                    <div className="tabsContent pt-5" hidden={update !== 1}>
                      <h4>Amount: {user.wallet}</h4>
                      <div className="wallet d-flex justify-content-center pt-3">
                        <div>
                          <input
                            className="class-control"
                            onChange={(e) => {
                              setWallet(e.target.value);
                            }}
                            type="text"
                          />
                        </div>
                        <div className="pl-4">
                          <button
                            className="btn wallet_btn"
                            onClick={() => {
                              if (wallet === "") {
                                toast("Please Enter Amount First");
                              } else {
                                sendDataToRegisterApi();
                              }
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

export default UserProfile;