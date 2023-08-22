import React, { useState, useEffect } from "react";
import "../../../css/main.6120d571.css";
import axios from "axios";
import BASE_URL from "../../../BASE_URL";
import { Link } from "react-router-dom";

const Captains = (props) => {
  const [captains, setCaptains] = useState([]);
  const [checked, setChecked] = useState(false);
  const [singleChecked, setSingleChecked] = useState(false);

  useEffect(() => {
    const fetchCaptains = async () => {
      try {
        const response = await axios.get(`${BASE_URL}rider/rider/getAll`);
        setCaptains(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCaptains();
  }, []);

  const handleCheckAll = () => {
    setChecked(!checked);
  };

  const handleSingleCheck = () => {
    setSingleChecked(true);
  };

  const toggleBlock = (captain) => {
    const params = new FormData();
    params.append("__api_key__", "your-api-key");
    params.append("captain_uid", captain.uid);

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post("https://apis.cab5.pk/toggle_captain_block.php", params, config)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className={"login-activity"}>
      <div className="container-fluid p-5">
        <div className="page-titles">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/react/demo/table-bootstrap-basic">Vheelo</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/react/demo/table-bootstrap-basic">Captains</a>
            </li>
          </ol>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title h5">Captains</div>
              </div>
              <div className="card-body">
                <div className="table-responsive table-responsive-lg">
                <table className="table">
                      <thead>
                        <tr onClick={() => { }}>
                          <th className="width50">
                            <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                            <input
                                  onClick={handleCheckAll}
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="checkAll"
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
                            <strong>Email</strong>
                          </th>

                          <th>
                            <strong>Phone</strong>
                          </th>
                          <th>
                            <strong>Block</strong>
                          </th>
                          <th>
                            <strong>View Details</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {captains.map((captain,index) => (
                          <tr>
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
                                <span className="w-space-no">{captain.firstName + captain.lastName}</span>
                              </div>
                            </td>
                            <td>{captain.email}</td>

                            <td>{captain.phone}</td>
                            <td>
                              <label class="switch">
                                {captain["blocked"] == true ? (
                                  <input
                                    type="checkbox"
                                    defaultChecked
                                    defaultValue={captain["uid"]}
                                    onChange={(e) => {
                                      this.setState({
                                        blocked: e.target.value,
                                      });
                                    }}
                                    onClick={() => {
                                      const params = new FormData();

                                      params.append(
                                        "__api_key__",
                                        "hi,-its-eevee. I can do wonderful things in api creation."
                                      );
                                      params.append("user_uid", captain.uid);

                                      const config = {
                                        headers: {
                                          "Content-Type":
                                            "application/x-www-form-urlencoded",
                                        },
                                      };

                                      axios
                                        .post(
                                          "https://apis.cab5.pk/toggle_user_block.php",
                                          params,
                                          config
                                        )

                                        .then((res) => {
                                          console.log(res.data);
                                        });
                                    }}
                                  />
                                ) : (
                                  <input
                                    type="checkbox"
                                    defaultValue={captain["uid"]}
                                    onChaxnge={(e) => {
                                      this.setState({
                                        blocked: e.target.value,
                                      });
                                    }}
                                    onClick={() => {
                                      const params = new FormData();

                                      params.append(
                                        "__api_key__",
                                        "hi,-its-eevee. I can do wonderful things in api creation."
                                      );
                                      params.append("user_uid", captain.uid);

                                      const config = {
                                        headers: {
                                          "Content-Type":
                                            "application/x-www-form-urlencoded",
                                        },
                                      };

                                      axios
                                        .post(
                                          "https://apis.cab5.pk/toggle_user_block.php",
                                          params,
                                          config
                                        )

                                        .then((res) => {
                                          console.log(res.data);
                                        });
                                    }}
                                  />
                                )}
                                <span class="slider round"></span>
                              </label>
                            </td>
                            <td>
                              
                              <Link
                               to={`/captainsProfile/${captain?.id}`} 
                              
                                className={"button"}
                              >
                                View Details
                              </Link>
                            </td>
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
    </div>
  );
};

export default Captains;
