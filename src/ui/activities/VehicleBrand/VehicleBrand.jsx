import qs from "qs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../BASE_URL";
import { useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const VehicleBrand = (props) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [vehicleBrand, setVehicleBrand] = useState([]);
  const [checked, setChecked] = useState(false);
  const [singleChecked, setSingleChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}admin/vehicleBrand/getAll`);
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
        <ToastContainer />

        <div className="container-fluid p-5">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/react/demo/table-bootstrap-basic">Vheelo</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="/react/demo/table-bootstrap-basic">Vehicle Brand</a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Vehicle Brand</div>
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
                            <strong>Id_</strong>
                          </th>
                          <th>
                            <strong>Name</strong>
                          </th>
                          <th>
                            <strong>Type</strong>
                          </th>
                          <th>
                            <strong>Created at</strong>
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
                                <span className="w-space-no">{brand.brand}</span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="w-space-no">{brand.type}</span>
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

        <Link to={'/addBrand'} className={"add-btn"} >
          +
        </Link>
      </div>
    </div>
  );
};

export default VehicleBrand;