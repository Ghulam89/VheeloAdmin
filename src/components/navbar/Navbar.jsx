import React from 'react';
import {withRouter} from "react-router-dom";
import '../../css/main.6120d571.css';
  import '../../App.css'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return <div className={"Navbar"}>
                <div className="nav-header">
                    <a className="brand-logo" href="">
                      
                        <img
                            className={"logo-abbr"}
                            alt={"image not found"}
                            src={require('../../images/main_logo.png')}
                        />
                    </a>
                    <div className="nav-control">
                        <div className="hamburger ">
                            <span className="line" />
                            <span className="line" />
                            <span className="line" />
                        </div>
                    </div>
                </div>
                


        </div>

    }
    }

    export default withRouter(Navbar);