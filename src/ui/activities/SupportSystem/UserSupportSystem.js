import React from 'react';
import { Link, useLocation } from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import '../../../css/main.6120d571.css';
import UserMessage from '../../../components/messagebox/UserMessage';

function UserSupportSystem() {
    const location = useLocation();
  

    return (
        <div className={"login-activity"}>
            <div className="">
                <div id="main-wrapper" className="show">
                    <div className="container-fluid p-5">
                        <div className="page-titles">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/react/demo/table-bootstrap-basic">Vheelo</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    <a href="/react/demo/table-bootstrap-basic">Support System</a>
                                </li>
                            </ol>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Link
                                to={'/supportSystem'}
                                className='btn btn-danger'
                                style={{ backgroundColor: '#fff', borderColor: '#00B106', color: '#00B106' }}>Rider Support</Link>
                            <Link
                                to={'/userSupportSystem'}
                                className='btn btn-danger' style={{ backgroundColor: '#00B106', borderColor: '#00B106' }}>User Support</Link>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-12">
                                <UserMessage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSupportSystem;