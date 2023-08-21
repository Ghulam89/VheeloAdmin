import React from 'react';
import {withRouter} from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import '../../../css/main.6120d571.css';
import Sidebar from "../../../components/sidebar/Sidebar";
import {ACTIVITY_TAG} from "../../../utils/Constants";
import Chatapp from '../../../components/chatapp/Chatapp';
import Messagebox from '../../../components/messagebox/Messagebox';
import UserMessage from '../../../components/messagebox/UserMessage';
class UserSupportSystem extends React.Component {


    render() {

        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"login-activity"}>
            <div className="">
                <div id="main-wrapper" className="show">
                    <div className="nav-header">
                        <a className="brand-logo" href="">
                            <img
                                className={"brand-title"}
                                alt={"image not found"}
                                src={require('../../../images/main_logo.png')}
                            />
                        </a>
                        <div className="nav-control" onClick={()=>{
                            // if( document.querySelector(".dlabnav").style.left === "-22%") {
                            //     document.querySelector(".dlabnav").style.left = "0%";
                            // } else {
                            //     document.querySelector(".dlabnav").style.left = "-22%";
                            // }

                            const   btn = document.querySelector(".dlabnav");
                            btn.classList.toggle("active")

                        }
                        }>
                            <div className="hamburger ">
                                <span className="line" />
                                <span className="line" />
                                <span className="line" />
                            </div>
                        </div>
                    </div>
                    <Sidebar/>
                    <div className="header">
                        <div className="header-content">
                            <nav className="navbar navbar-expand">
                                <div className="collapse navbar-collapse justify-content-between">
                                    <div className="header-left">
                                        <div
                                            className="dashboard_bar"
                                            style={{ textTransform: "capitalize" }}
                                        >
                                            Support System
                                        </div>
                                    </div>
                                    <ul className="navbar-nav header-right">
                                        {/* <li className="nav-item">
                                            <div className="input-group search-area d-lg-inline-flex d-none">
                                                <div className="input-group-append">
                  <span className="input-group-text">
                    <a href="">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                  </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search here..."
                                                />
                                            </div>
                                        </li>
                                        <li
                                        
                                        onClick={()=>{
                                            const btnshow = document.querySelector('.chatMenu');

                                            btnshow.classList.add('chatactive')


                                        }}
                                        
                                        
                                        className="nav-item dropdown notification_dropdown">
                                            <a
                                                className="nav-link bell bell-link"
                                                href="/react/demo/table-bootstrap-basic"
                                            >
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.23779 10.2492L4.66679 11.7064V8.30554L2.23779 10.2492Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M1.1665 12.327V23.3334C1.16852 23.8531 1.28817 24.3656 1.5165 24.8325L9.20134 17.15L1.1665 12.327Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M26.4832 24.8325C26.7115 24.3656 26.8311 23.8531 26.8332 23.3334V12.327L18.7983 17.15L26.4832 24.8325Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M23.3335 8.30554V11.7064L25.7625 10.2492L23.3335 8.30554Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M21.0492 13.0772C21.024 12.998 21.0076 12.9162 21.0002 12.8334V7.00004C21.0002 6.69062 20.8773 6.39388 20.6585 6.17508C20.4397 5.95629 20.1429 5.83337 19.8335 5.83337H8.16684C7.85742 5.83337 7.56067 5.95629 7.34188 6.17508C7.12309 6.39388 7.00017 6.69062 7.00017 7.00004V12.8334C6.99274 12.9162 6.97631 12.998 6.95117 13.0772L14.0002 17.3064L21.0492 13.0772Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M17.3262 3.50003L14.7292 1.4222C14.5222 1.25653 14.2651 1.16626 14 1.16626C13.7349 1.16626 13.4777 1.25653 13.2708 1.4222L10.6738 3.50003H17.3262Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M16.7358 18.3855L14.6008 19.6688C14.4194 19.7778 14.2117 19.8354 14 19.8354C13.7883 19.8354 13.5806 19.7778 13.3991 19.6688L11.2641 18.3855L3.16748 26.4833C3.63438 26.7117 4.14691 26.8313 4.66665 26.8333H23.3333C23.853 26.8313 24.3656 26.7117 24.8325 26.4833L16.7358 18.3855Z"
                                                        fill="#67636D"
                                                    />
                                                </svg>
                                                <span className="badge light text-white bg-primary rounded-circle">
                  6
                </span>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown notification_dropdown">
                                            <a
                                                className="nav-link  ai-icon"
                                                role="button"
                                                data-toggle="dropdown"
                                                href="/react/demo/table-bootstrap-basic"
                                            >
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.3333 19.8333H23.1187C23.2568 19.4597 23.3295 19.065 23.3333 18.6666V12.8333C23.3294 10.7663 22.6402 8.75902 21.3735 7.12565C20.1068 5.49228 18.3343 4.32508 16.3333 3.80679V3.49996C16.3333 2.88112 16.0875 2.28763 15.6499 1.85004C15.2123 1.41246 14.6188 1.16663 14 1.16663C13.3812 1.16663 12.7877 1.41246 12.3501 1.85004C11.9125 2.28763 11.6667 2.88112 11.6667 3.49996V3.80679C9.66574 4.32508 7.89317 5.49228 6.6265 7.12565C5.35983 8.75902 4.67058 10.7663 4.66667 12.8333V18.6666C4.67053 19.065 4.74316 19.4597 4.88133 19.8333H4.66667C4.35725 19.8333 4.0605 19.9562 3.84171 20.175C3.62292 20.3938 3.5 20.6905 3.5 21C3.5 21.3094 3.62292 21.6061 3.84171 21.8249C4.0605 22.0437 4.35725 22.1666 4.66667 22.1666H23.3333C23.6428 22.1666 23.9395 22.0437 24.1583 21.8249C24.3771 21.6061 24.5 21.3094 24.5 21C24.5 20.6905 24.3771 20.3938 24.1583 20.175C23.9395 19.9562 23.6428 19.8333 23.3333 19.8333Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M9.98193 24.5C10.3863 25.2088 10.971 25.7981 11.6767 26.2079C12.3823 26.6178 13.1839 26.8337 13.9999 26.8337C14.816 26.8337 15.6175 26.6178 16.3232 26.2079C17.0289 25.7981 17.6136 25.2088 18.0179 24.5H9.98193Z"
                                                        fill="#67636D"
                                                    />
                                                </svg>
                                                <span className="badge light text-white bg-primary rounded-circle">
                  4
                </span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right ">
                                                <div
                                                    id="DZ_W_Notification1"
                                                    className="scrollbar-container widget-media dlab-scroll p-3 height380 ps"
                                                >
                                                    <ul className="timeline">
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2">
                                                                    <img
                                                                        alt="avatar"
                                                                        width={50}
                                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                                    />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2 media-info">KG</div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Resport created successfully</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2 media-success">
                                                                    <i className="fa fa-home" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2">
                                                                    <img
                                                                        alt="avatar"
                                                                        width={50}
                                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                                    />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2 media-danger">KG</div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Resport created successfully</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2 media-primary">
                                                                    <i className="fa fa-home" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                                        <div
                                                            className="ps__thumb-x"
                                                            tabIndex={0}
                                                            style={{ left: 0, width: 0 }}
                                                        />
                                                    </div>
                                                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                                                        <div
                                                            className="ps__thumb-y"
                                                            tabIndex={0}
                                                            style={{ top: 0, height: 0 }}
                                                        />
                                                    </div>
                                                </div>
                                                <a
                                                    className="all-notification"
                                                    href="/react/demo/table-bootstrap-basic"
                                                >
                                                    See all notifications <i className="ti-arrow-right" />
                                                </a>
                                            </div>
                                        </li> */}
                                        <li
                                         
                                          
                                         onClick={()=>{
                                            document.querySelector(".dropdown-menu-right").style.display = "block"
                                            }
                                            }


                                        
                                        className="nav-item dropdown header-profile ">
                                            <a
                                                className="nav-link"
                                                role="button"
                                                data-toggle="dropdown"
                                               
                                            >
                                                <img
                                                    src={require('../../../images/user.png')}
                                                    width={20}
                                                    alt=""
                                                />
                                                <div className="header-info">
                                                    <span className="text-black">Admin</span>
                                                    <p className="fs-12 mb-0">Super Admin</p>
                                                </div>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right ">
                                                <a
                                                    className="dropdown-item ai-icon"
                                                    href="/react/demo/app-profile"
                                                >
                                                    <svg
                                                        id="icon-user1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-primary"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx={12} cy={7} r={4} />
                                                    </svg>
                                                    <span className="ml-2">Profile </span>
                                                </a>
                                                <a
                                                    className="dropdown-item ai-icon"
                                                    href="/react/demo/email-inbox"
                                                >
                                                    <svg
                                                        id="icon-inbox"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-success"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                        <polyline points="22,6 12,13 2,6" />
                                                    </svg>
                                                    <span className="ml-2">Inbox </span>
                                                </a>
                                                <a
                                                    className="dropdown-item ai-icon"
                                                    href="/react/demo/page-login"
                                                >
                                                    <svg
                                                        id="icon-logout"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-danger"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                        <polyline points="16 17 21 12 16 7" />
                                                        <line x1={21} y1={12} x2={9} y2={12} />
                                                    </svg>
                                                    <span className="ml-2">Logout </span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="chatbox ">
                        <div className="chatbox-close" />
                        <div className="custom-tab-1">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link " data-toggle="tab" href="#notes">
                                        Notes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " data-toggle="tab" href="#alerts">
                                        Alerts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#chat">
                                        Chat
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade  active show" id="chat" role="tabpanel">
                                    <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box ">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="/react/demo/table-bootstrap-basic">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect
                                                            fill="#000000"
                                                            x={4}
                                                            y={11}
                                                            width={16}
                                                            height={2}
                                                            rx={1}
                                                        />
                                                        <rect
                                                            fill="#000000"
                                                            opacity="0.3"
                                                            transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                                                            x={4}
                                                            y={11}
                                                            width={16}
                                                            height={2}
                                                            rx={1}
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <div>
                                                <h6 className="mb-1">Chat List</h6>
                                                <p className="mb-0">Show All</p>
                                            </div>
                                            <a href="/react/demo/table-bootstrap-basic">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <circle fill="#000000" cx={5} cy={12} r={2} />
                                                        <circle fill="#000000" cx={12} cy={12} r={2} />
                                                        <circle fill="#000000" cx={19} cy={12} r={2} />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        
                                    </div>
                                    <div className="card chat dz-chat-history-box d-none">
                                        <div className="card-header chat-list-header text-center">
                                            <a
                                                className="dz-chat-history-back"
                                                href="/react/demo/table-bootstrap-basic"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                        <rect
                                                            fill="#000000"
                                                            opacity="0.3"
                                                            transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                                                            x={14}
                                                            y={7}
                                                            width={2}
                                                            height={10}
                                                            rx={1}
                                                        />
                                                        <path
                                                            d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                            transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <div>
                                                <h6 className="mb-1">Chat with Khelesh</h6>
                                                <p className="mb-0 text-success">Online</p>
                                            </div>
                                            <div className="dropdown">
                                                <a
                                                    data-toggle="dropdown"
                                                    aria-expanded="false"
                                                    href="/react/demo/table-bootstrap-basic"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="18px"
                                                        height="18px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                    >
                                                        <g
                                                            stroke="none"
                                                            strokeWidth={1}
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <rect x={0} y={0} width={24} height={24} />
                                                            <circle fill="#000000" cx={5} cy={12} r={2} />
                                                            <circle fill="#000000" cx={12} cy={12} r={2} />
                                                            <circle fill="#000000" cx={19} cy={12} r={2} />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-right ">
                                                    <li className="dropdown-item">
                                                        <i className="fa fa-user-circle text-primary mr-2" /> View
                                                        profile
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <i className="fa fa-users text-primary mr-2" /> Add to close
                                                        friends
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <i className="fa fa-plus text-primary mr-2" /> Add to group
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <i className="fa fa-ban text-primary mr-2" /> Block
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            id="DZ_W_Contacts_Body3"
                                            className="scrollbar-container card-body msg_card_body dz-scroll ps"
                                        >
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you samim?
                                                    <span className="msg_time">8:40 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Khalid i am good tnx how about you?
                                                    <span className="msg_time_send">8:55 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am good too, thank you for your chat template
                                                    <span className="msg_time">9:00 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    You are welcome
                                                    <span className="msg_time_send">9:05 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am looking for your next templates
                                                    <span className="msg_time">9:07 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Ok, thank you have a good day
                                                    <span className="msg_time_send">9:10 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Bye, see you<span className="msg_time">9:12 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you samim?
                                                    <span className="msg_time">8:40 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Khalid i am good tnx how about you?
                                                    <span className="msg_time_send">8:55 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am good too, thank you for your chat template
                                                    <span className="msg_time">9:00 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    You are welcome
                                                    <span className="msg_time_send">9:05 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am looking for your next templates
                                                    <span className="msg_time">9:07 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Ok, thank you have a good day
                                                    <span className="msg_time_send">9:10 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Bye, see you<span className="msg_time">9:12 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                                <div
                                                    className="ps__thumb-x"
                                                    tabIndex={0}
                                                    style={{ left: 0, width: 0 }}
                                                />
                                            </div>
                                            <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                                                <div
                                                    className="ps__thumb-y"
                                                    tabIndex={0}
                                                    style={{ top: 0, height: 0 }}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-footer type_msg">
                                            <div className="input-group">
                <textarea
                    className="form-control"
                    placeholder="Type your message..."
                    defaultValue={""}
                />
                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-primary">
                                                        <i className="fa fa-location-arrow" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade  " id="notes">
                                    <div className="card mb-sm-3 mb-md-0 note_card">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="/react/demo/table-bootstrap-basic">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect
                                                            fill="#000000"
                                                            x={4}
                                                            y={11}
                                                            width={16}
                                                            height={2}
                                                            rx={1}
                                                        />
                                                        <rect
                                                            fill="#000000"
                                                            opacity="0.3"
                                                            transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                                                            x={4}
                                                            y={11}
                                                            width={16}
                                                            height={2}
                                                            rx={1}
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <div>
                                                <h6 className="mb-1">Notes</h6>
                                                <p className="mb-0">Add New Nots</p>
                                            </div>
                                            <a href="/react/demo/table-bootstrap-basic">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <path
                                                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                            opacity="0.3"
                                                        />
                                                        <path
                                                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="  content-body">
                        <div className="container-fluid">
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

                            <div style={{display:'flex',gap:'8px'}}>
                                <button
                                 onClick={()=>{
                                    urlArgsBundle.setActivityTag(ACTIVITY_TAG.SUPPORT_SYSTEM)
                                    this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                }}
                                className='btn btn-danger'
                                
                                style={{backgroundColor:'#fff',borderColor:'#00B106',color:'#00B106'}}> Rider Support</button>
                                <button
                                onClick={()=>{
                                    urlArgsBundle.setActivityTag(ACTIVITY_TAG.USER_SUPPORT_SYSTEM)
                                    this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                }}
                                className='btn btn-danger'  style={{backgroundColor:'#00B106',borderColor:'#00B106'}}>User Support</button>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-12">
                                   <UserMessage/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="copyright">
                            <p>
                                Copyright © Designed &amp; Developed by{" "}
                                <a href="http://dexignlab.com/" target="_blank">
                                    WOlf Tech Solutions PVT LTD
                                </a>{" "}
                                2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withRouter(UserSupportSystem);