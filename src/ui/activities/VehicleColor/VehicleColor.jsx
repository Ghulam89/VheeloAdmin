import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import BASE_URL from "../../../BASE_URL";
import { Link } from "react-router-dom";

const VehicleColor = () => {
  const [vehicleBrand, setVehicleBrand] = useState([]);
  const [checked, setChecked] = useState(false);
  const [singleChecked, setSingleChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = qs.stringify({});
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${BASE_URL}admin/vehicleColor/getAll`,
          headers: {},
          data: data,
        };
        const response = await axios.request(config);
        setVehicleBrand(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
                <a href="/react/demo/table-bootstrap-basic"> Vehicle Color</a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5"> Vehicle Color</div>
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
                            <strong>ID_</strong>
                          </th>
                          <th>
                            <strong>Vehicle Brand</strong>
                          </th>
                          <th>
                            <strong>Vehicle Model</strong>
                          </th>
                          <th>
                            <strong>Vehicle Color</strong>
                          </th>
                          <th>
                            <strong>Created At</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {vehicleBrand.map((brand, index) => (
                          <tr key={index}>
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
                                <span className="w-space-no">{index + 1}</span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="w-space-no">
                                  {brand.brand}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="w-space-no">
                                  {brand.model}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="w-space-no">
                                  {brand.color}
                                </span>
                              </div>
                            </td>
                            <td>{brand.createdAt}</td>
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
        <Link to={'/addColor'} className={"add-btn"} onClick={() => {}}>
          +
        </Link>
      </div>
    </div>
  );
};

export default VehicleColor;
