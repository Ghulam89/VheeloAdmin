import React, { useState, useEffect } from "react";
import UrlArgsBundle from "../../../core/url_args_bundle";
import "../../../css/main.6120d571.css";
import axios from "axios";
import qs from "qs";
import BASE_URL from "../../../BASE_URL";
import { Link } from "react-router-dom";

const RideCategories = () => {
  const [rideCategories, setRideCategories] = useState([]);
  const [rideCategoryUid, setRideCategoryUid] = useState("");
  const [checked, setChecked] = useState(false);
  const [singleChecked, setSingleChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = qs.stringify({});
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${BASE_URL}admin/rideCatQuick/getAll`,
          headers: {},
          data: data,
        };
        const response = await axios.request(config);
        setRideCategories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleToggleEnabled = (user) => {
    const params = new FormData();
    params.append(
      "__api_key__",
      "hi,-its-eevee. I can do wonderful things in api creation."
    );
    params.append("ride_category_uid", user.uid);

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        "https://apis.cab5.pk/toggle_ride_category_enable_disable.php",
        params,
        config
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  

  return (
    <div className={"login-activity"}>
      <div className="">
        <div className="container-fluid p-5">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/react/demo/table-bootstrap-basic">Vheelo</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="/react/demo/table-bootstrap-basic">Ride Categories</a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12 all_col">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Ride Categories</div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="width50">
                            <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkAll"
                                onClick={() => setChecked(!checked)}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkAll"
                              />
                            </div>
                          </th>
                          <th>
                            <strong>NAME</strong>
                          </th>
                          <th>
                            <strong>PRICE PER KM</strong>
                          </th>
                          <th>
                            <strong>ENABLED</strong>
                          </th>
                          <th>
                            <strong>CREATED AT</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rideCategories.map((user,index) => (
                          <tr key={user.uid}>
                             <td>
                              <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                {checked?<input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id={`customCheckBox${index}`}
                                  checked={true}
                                  onClick={() => setSingleChecked(index)}
                                />:<input
                                type="checkbox"
                                className="custom-control-input"
                                id={`customCheckBox${index}`}
                                onClick={() => setSingleChecked(index)}
                              />}
                                <label
                                  className="custom-control-label"
                                  htmlFor={`customCheckBox${index}`}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={user?.logo}
                                  className="rounded-lg mr-2"
                                  width={24}
                                  alt=""
                                />
                                <span className="w-space-no">{user?.name}</span>
                              </div>
                            </td>
                            <td>{user.priceKm}</td>
                            <td>
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  defaultChecked={user["enabled"] === "Y"}
                                  defaultValue={user["uid"]}
                                  onChange={(e) => {
                                    setRideCategoryUid(e.target.value);
                                  }}
                                  onClick={() => handleToggleEnabled(user)}
                                />
                                <span className="slider round"></span>
                              </label>
                            </td>
                            <td>{user.createdAt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link  to={'/addCategories'} className={"add-btn"} onClick={() => {}}>
          +
        </Link>
      </div>
    </div>
  );
};

export default RideCategories;
