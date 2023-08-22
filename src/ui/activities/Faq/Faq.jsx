import React, { useState, useEffect } from "react";
import "../../../css/main.6120d571.css";
import axios from "axios";
import qs from "qs";
import BASE_URL from "../../../BASE_URL";
import { Link } from "react-router-dom";

function Faq() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [FAQs, setFAQs] = useState([]);
  const [checked, setChecked] = useState(false);
  const [singleChecked, setSingleChecked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let data = qs.stringify({});

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}admin/Faq/getAll`,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.FAQs);
        setFAQs(response.data.FAQs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckAll = () => {
    setChecked(!checked);
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
                  <a href="/react/demo/table-bootstrap-basic">Faq</a>
                </li>
              </ol>
            </div>
            <div className="row">
              <div className="col-lg-12 all_col">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title h5">Faq</div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
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
                              <strong>Question</strong>
                            </th>
                            <th>
                              <strong>Answer</strong>
                            </th>
                            {/* <th>
                              <strong>ENABLED</strong>
                            </th> */}
                            <th>
                              <strong>CREATED AT</strong>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {FAQs.map((user,index) => (
                            <tr key={user.id}>
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
                                  <span className="w-space-no">
                                    {user?.question}
                                  </span>
                                </div>
                              </td>
                              <td>{user.answer}</td>
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
       
        <Link to={'/addFaq'} className={"add-btn"} onClick={() => {}}>
          +
        </Link>
      </div>
    </div>
  );
}

export default Faq;