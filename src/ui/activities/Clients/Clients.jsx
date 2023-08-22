import React, { useState, useEffect } from "react";
import "../../../css/main.6120d571.css";
import axios from "axios";
import BASE_URL from "../../../BASE_URL";
import { Link, useNavigate } from "react-router-dom";
function Clients() {
  const navigate= useNavigate();
  const [users, setUsers] = useState([]);
  const [blocked, setBlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [singleChecked, setSingleChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}user/user`);
        console.log(response.data);
        setUsers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



  const handleCheckAll = () => {
    setChecked(!checked);
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
                <a href="/react/demo/table-bootstrap-basic">Clients</a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12 all_col">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Clients</div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
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
                        {users.map((user,index) => (
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
                                <span className="w-space-no">{user.name}</span>
                              </div>
                            </td>
                            <td>{user.email}</td>

                            <td>{user.phone}</td>
                            <td>
                              <label class="switch">
                                {user["blocked"] == true ? (
                                  <input
                                    type="checkbox"
                                    defaultChecked
                                    defaultValue={user["uid"]}
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
                                      params.append("user_uid", user.uid);

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
                                    defaultValue={user["uid"]}
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
                                      params.append("user_uid", user.uid);

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
                               to={`/userProfile/${user?.id}`} 
                              
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
  
}

export default Clients;
