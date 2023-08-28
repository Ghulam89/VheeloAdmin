import React from 'react';
import '../../../css/main.6120d571.css';
import Messagebox from '../../../components/messagebox/Messagebox';
import { Link } from 'react-router-dom';

function SupportSystem() {
  return (
    <div className={'login-activity'}>
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
                className="btn btn-danger"
                style={{ backgroundColor: '#00B106', borderColor: '#00B106' }}
              >
                Rider Support
              </Link>
              <Link
                to={'/userSupportSystem'}
                className="btn btn-danger"
                style={{ backgroundColor: '#fff', borderColor: '#00B106', color: '#00B106' }}
              >
                User Support
              </Link>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <Messagebox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportSystem;