import React from 'react';
import { withRouter } from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import '../../../css/main.6120d571.css';
import Sidebar from "../../../components/sidebar/Sidebar";
import { ACTIVITY_TAG } from "../../../utils/Constants";
import Chatapp from '../../../components/chatapp/Chatapp';
class EarningInformation extends React.Component {


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
                        <div className="nav-control" onClick={() => {
                            // if (document.querySelector(".dlabnav").style.left === "-22%") {
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
                    <Sidebar />
                    <div className="header">
                        <div className="header-content">
                            <nav className="navbar navbar-expand">
                                <div className="collapse navbar-collapse justify-content-between">
                                    <div className="header-left">
                                        <div
                                            className="dashboard_bar"
                                            style={{ textTransform: "capitalize" }}
                                        >
                                            Earning Information
                                        </div>
                                    </div>
                                    <ul className="navbar-nav header-right">
                                        <li className="nav-item">
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
                                        <li className="nav-item dropdown notification_dropdown">
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
                                        </li>
                                        <li className="nav-item dropdown header-profile ">
                                            <a
                                                className="nav-link"
                                                role="button"
                                                data-toggle="dropdown"
                                                href="/react/demo/table-bootstrap-basic"
                                            >
                                                <img
                                                    src="/react/demo/static/media/17.a7b6b9cb820bffd162bf.jpg"
                                                    width={20}
                                                    alt=""
                                                />
                                                <div className="header-info">
                                                    <span className="text-black">Peter Parkur</span>
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
                                        <a href="/react/demo/table-bootstrap-basic">Cab5</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <a href="/react/demo/table-bootstrap-basic">Earning Information</a>
                                    </li>
                                </ol>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    
                                    
                                <div className="row">
                                <div className="col-xl-12">
                                    <div className="row">
                                        <div className=" col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning Point To Point</span>
                                                        </div>
                                                        <svg
                                                            width={36}
                                                            height={36}
                                                            viewBox="0 0 36 36"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M34.4221 13.9831C34.3342 13.721 34.1756 13.4884 33.9639 13.3108C33.7521 13.1332 33.4954 13.0175 33.2221 12.9766L23.6491 11.5141L19.3531 2.36408C19.232 2.10638 19.04 1.88849 18.7996 1.73587C18.5592 1.58325 18.2803 1.5022 17.9956 1.5022C17.7108 1.5022 17.432 1.58325 17.1916 1.73587C16.9512 1.88849 16.7592 2.10638 16.6381 2.36408L12.3421 11.5141L2.76908 12.9766C2.49641 13.0181 2.24048 13.1341 2.02943 13.3117C1.81837 13.4892 1.66036 13.7215 1.57277 13.9831C1.48517 14.2446 1.47139 14.5253 1.53293 14.7941C1.59447 15.063 1.72895 15.3097 1.92158 15.5071L8.89808 22.6501L7.24808 32.7571C7.20306 33.0345 7.23685 33.3189 7.34561 33.578C7.45437 33.8371 7.63373 34.0605 7.86325 34.2226C8.09277 34.3847 8.36321 34.4791 8.64377 34.495C8.92432 34.5109 9.20371 34.4477 9.45008 34.3126L18.0001 29.5906L26.5501 34.3126C26.7965 34.4489 27.0762 34.5131 27.3573 34.4978C27.6385 34.4826 27.9097 34.3885 28.1399 34.2264C28.37 34.0643 28.55 33.8406 28.659 33.5811C28.7681 33.3215 28.8019 33.0365 28.7566 32.7586L27.1066 22.6516L34.0786 15.5071C34.2703 15.3091 34.4038 15.0622 34.4644 14.7933C34.525 14.5245 34.5103 14.2441 34.4221 13.9831Z"
                                                                fill="#2953E8"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning for Hourly Rental</span>
                                                        </div>
                                                        <svg
                                                            width={36}
                                                            height={36}
                                                            viewBox="0 0 36 36"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M17.8936 22.4999C23.6925 22.4999 28.3936 17.7989 28.3936 11.9999C28.3936 6.20095 23.6925 1.49994 17.8936 1.49994C12.0946 1.49994 7.39355 6.20095 7.39355 11.9999C7.39355 17.7989 12.0946 22.4999 17.8936 22.4999Z"
                                                                fill="#2953E8"
                                                            />
                                                            <path
                                                                d="M29.5606 21.3344C29.2171 20.9909 28.8511 20.6699 28.4761 20.3564C27.216 21.96 25.6079 23.2562 23.7734 24.1472C21.9389 25.0382 19.926 25.5007 17.8865 25.4996C15.8471 25.4986 13.8346 25.0342 12.001 24.1414C10.1674 23.2486 8.56061 21.9507 7.30209 20.3459C5.4471 21.8906 3.95587 23.8256 2.9348 26.013C1.91373 28.2003 1.38799 30.586 1.39509 32.9999C1.39509 33.3978 1.55313 33.7793 1.83443 34.0606C2.11573 34.3419 2.49727 34.4999 2.89509 34.4999H32.8951C33.2929 34.4999 33.6744 34.3419 33.9557 34.0606C34.2371 33.7793 34.3951 33.3978 34.3951 32.9999C34.4005 30.8324 33.976 28.6854 33.1461 26.683C32.3163 24.6807 31.0976 22.8627 29.5606 21.3344Z"
                                                                fill="#2953E8"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div><img
                                                                src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning For City To City</span>
                                                        </div>
                                                        <svg
                                                            width={36}
                                                            height={36}
                                                            viewBox="0 0 36 36"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M12 1.5H6C3.51472 1.5 1.5 3.51472 1.5 6V29.8125C1.5 32.2977 3.51472 34.3125 6 34.3125H12C14.4853 34.3125 16.5 32.2977 16.5 29.8125V6C16.5 3.51472 14.4853 1.5 12 1.5Z"
                                                                fill="#2953E8"
                                                            />
                                                            <path
                                                                d="M30 1.5H24C21.5147 1.5 19.5 3.51472 19.5 6V12C19.5 14.4853 21.5147 16.5 24 16.5H30C32.4853 16.5 34.5 14.4853 34.5 12V6C34.5 3.51472 32.4853 1.5 30 1.5Z"
                                                                fill="#2953E8"
                                                            />
                                                            <path
                                                                d="M30 19.5H24C21.5147 19.5 19.5 21.5147 19.5 24V30C19.5 32.4853 21.5147 34.5 24 34.5H30C32.4853 34.5 34.5 32.4853 34.5 30V24C34.5 21.5147 32.4853 19.5 30 19.5Z"
                                                                fill="#2953E8"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">12</h2>
                                                            <span className="fs-14">Unread Messages</span>
                                                        </div>
                                                        <svg
                                                            width={46}
                                                            height={46}
                                                            viewBox="0 0 46 46"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M34.4998 1.91666H11.4998C8.95911 1.9197 6.52332 2.93035 4.72676 4.72691C2.93019 6.52348 1.91955 8.95927 1.9165 11.5V26.8333C1.91929 29.0417 2.68334 31.1816 4.07988 32.8924C5.47642 34.6031 7.42004 35.7801 9.58317 36.225V42.1667C9.58312 42.5137 9.67727 42.8542 9.85558 43.1518C10.0339 43.4495 10.2897 43.6932 10.5956 43.8569C10.9016 44.0206 11.2462 44.0982 11.5928 44.0814C11.9394 44.0645 12.2749 43.9539 12.5636 43.7613L23.5748 36.4167H34.4998C37.0406 36.4136 39.4764 35.403 41.2729 33.6064C43.0695 31.8098 44.0801 29.374 44.0832 26.8333V11.5C44.0801 8.95927 43.0695 6.52348 41.2729 4.72691C39.4764 2.93035 37.0406 1.9197 34.4998 1.91666ZM30.6665 24.9167H15.3332C14.8248 24.9167 14.3373 24.7147 13.9779 24.3553C13.6184 23.9958 13.4165 23.5083 13.4165 23C13.4165 22.4917 13.6184 22.0041 13.9779 21.6447C14.3373 21.2853 14.8248 21.0833 15.3332 21.0833H30.6665C31.1748 21.0833 31.6623 21.2853 32.0218 21.6447C32.3812 22.0041 32.5832 22.4917 32.5832 23C32.5832 23.5083 32.3812 23.9958 32.0218 24.3553C31.6623 24.7147 31.1748 24.9167 30.6665 24.9167ZM34.4998 17.25H11.4998C10.9915 17.25 10.504 17.0481 10.1446 16.6886C9.78511 16.3292 9.58317 15.8417 9.58317 15.3333C9.58317 14.825 9.78511 14.3375 10.1446 13.978C10.504 13.6186 10.9915 13.4167 11.4998 13.4167H34.4998C35.0082 13.4167 35.4957 13.6186 35.8551 13.978C36.2146 14.3375 36.4165 14.825 36.4165 15.3333C36.4165 15.8417 36.2146 16.3292 35.8551 16.6886C35.4957 17.0481 35.0082 17.25 34.4998 17.25Z"
                                                                fill="#2953E8"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="card">
                                                <div className="card-header mb-0 d-sm-flex flex-wrap d-block shadow-sm border-0 align-items-center">
                                                    <div className="mr-auto pr-3 mb-3">
                                                        <h4 className="text-black fs-20 mb-sm-0 mb-2">
                                                            Project Created
                                                        </h4>
                                                    </div>
                                                    <div className="card-action card-tabs  mt-sm-0 mb-3 mt-sm-0 ">
                                                        <ul className="nav nav-tabs  nav" role="tablist">
                                                            <li className="nav-item">
                                                                <a
                                                                    href="#"
                                                                    role="tab"
                                                                    data-rb-event-key="home"
                                                                    aria-selected="true"
                                                                    className="nav-link active"
                                                                >
                                                                    {" "}
                                                                    Daily
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    href="#"
                                                                    role="tab"
                                                                    data-rb-event-key="profile"
                                                                    aria-selected="false"
                                                                    className="nav-link"
                                                                >
                                                                    {" "}
                                                                    Weekly
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    href="#"
                                                                    role="tab"
                                                                    data-rb-event-key="contact"
                                                                    aria-selected="false"
                                                                    className="nav-link"
                                                                >
                                                                    {" "}
                                                                    Monthly
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="tab-content">
                                                        <div
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            className="fade tab-pane active show"
                                                        >
                                                            <div className="d-flex align-items-center">
                        <span className="fs-36 text-black font-w600 mr-4">
                          0,45%
                        </span>
                                                                <div>
                                                                    <svg
                                                                        className="mr-2"
                                                                        width={27}
                                                                        height={14}
                                                                        viewBox="0 0 27 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                                                            fill="#2FCA51"
                                                                        />
                                                                    </svg>
                                                                    <span>last month $563,443</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div id="chart">
                                                                    <div style={{ minHeight: 335 }}>
                                                                        <div
                                                                            id="apexchartszrdg6uip"
                                                                            className="apexcharts-canvas apexchartszrdg6uip apexcharts-theme-light"
                                                                            style={{ width: 840, height: 320 }}
                                                                        >
                                                                            <svg
                                                                                id="SvgjsSvg1714"
                                                                                width={440}
                                                                                height={320}

                                                                                style={{ background: "transparent" }}
                                                                            >
                                                                                <g
                                                                                    id="SvgjsG1716"
                                                                                    className="apexcharts-inner apexcharts-graphical"
                                                                                    transform="translate(51.34375, 30)"
                                                                                >
                                                                                    <defs id="SvgjsDefs1715">
                                                                                        <clipPath id="gridRectMaskzrdg6uip">
                                                                                            <rect
                                                                                                id="SvgjsRect1720"
                                                                                                width="782.65625"
                                                                                                height="250.73000000000002"
                                                                                                x={-2}
                                                                                                y={0}
                                                                                                rx={0}
                                                                                                ry={0}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#fff"
                                                                                            />
                                                                                        </clipPath>
                                                                                        <clipPath id="forecastMaskzrdg6uip" />
                                                                                        <clipPath id="nonForecastMaskzrdg6uip" />
                                                                                        <clipPath id="gridRectMarkerMaskzrdg6uip">
                                                                                            <rect
                                                                                                id="SvgjsRect1721"
                                                                                                width="782.65625"
                                                                                                height="254.73000000000002"
                                                                                                x={-2}
                                                                                                y={-2}
                                                                                                rx={0}
                                                                                                ry={0}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#fff"
                                                                                            />
                                                                                        </clipPath>
                                                                                    </defs>
                                                                                    <g
                                                                                        id="SvgjsG1769"
                                                                                        className="apexcharts-xaxis"
                                                                                        transform="translate(0, 0)"
                                                                                    >
                                                                                        <g
                                                                                            id="SvgjsG1770"
                                                                                            className="apexcharts-xaxis-texts-g"
                                                                                            transform="translate(0, -4)"
                                                                                        >
                                                                                            <text
                                                                                                id="SvgjsText1772"
                                                                                                fontFamily="Poppins"
                                                                                                x="27.809151785714285"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1773">01</tspan>
                                                                                                <title>01</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1775"
                                                                                                fontFamily="Poppins"
                                                                                                x="83.42745535714286"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1776">02</tspan>
                                                                                                <title>02</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1778"
                                                                                                fontFamily="Poppins"
                                                                                                x="139.04575892857144"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1779">03</tspan>
                                                                                                <title>03</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1781"
                                                                                                fontFamily="Poppins"
                                                                                                x="194.6640625"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1782">04</tspan>
                                                                                                <title>04</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1784"
                                                                                                fontFamily="Poppins"
                                                                                                x="250.28236607142856"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1785">05</tspan>
                                                                                                <title>05</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1787"
                                                                                                fontFamily="Poppins"
                                                                                                x="305.9006696428571"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1788">06</tspan>
                                                                                                <title>06</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1790"
                                                                                                fontFamily="Poppins"
                                                                                                x="361.51897321428567"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1791">07</tspan>
                                                                                                <title>07</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1793"
                                                                                                fontFamily="Poppins"
                                                                                                x="417.1372767857142"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1794">08</tspan>
                                                                                                <title>08</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1796"
                                                                                                fontFamily="Poppins"
                                                                                                x="472.7555803571428"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1797">09</tspan>
                                                                                                <title>09</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1799"
                                                                                                fontFamily="Poppins"
                                                                                                x="528.3738839285713"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1800">10</tspan>
                                                                                                <title>10</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1802"
                                                                                                fontFamily="Poppins"
                                                                                                x="583.9921874999999"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1803">11</tspan>
                                                                                                <title>11</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1805"
                                                                                                fontFamily="Poppins"
                                                                                                x="639.6104910714284"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1806">12</tspan>
                                                                                                <title>12</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1808"
                                                                                                fontFamily="Poppins"
                                                                                                x="695.228794642857"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1809">13</tspan>
                                                                                                <title>13</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1811"
                                                                                                fontFamily="Poppins"
                                                                                                x="750.8470982142856"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1812">14</tspan>
                                                                                                <title>14</title>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        id="SvgjsG1830"
                                                                                        className="apexcharts-grid"
                                                                                    >
                                                                                        <g
                                                                                            id="SvgjsG1831"
                                                                                            className="apexcharts-gridlines-horizontal"
                                                                                        >
                                                                                            <line
                                                                                                id="SvgjsLine1848"
                                                                                                x1={0}
                                                                                                y1={0}
                                                                                                x2="778.65625"
                                                                                                y2={0}
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                            <line
                                                                                                id="SvgjsLine1849"
                                                                                                x1={0}
                                                                                                y1="62.682500000000005"
                                                                                                x2="778.65625"
                                                                                                y2="62.682500000000005"
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                            <line
                                                                                                id="SvgjsLine1850"
                                                                                                x1={0}
                                                                                                y1="125.36500000000001"
                                                                                                x2="778.65625"
                                                                                                y2="125.36500000000001"
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                            <line
                                                                                                id="SvgjsLine1851"
                                                                                                x1={0}
                                                                                                y1="188.0475"
                                                                                                x2="778.65625"
                                                                                                y2="188.0475"
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                            <line
                                                                                                id="SvgjsLine1852"
                                                                                                x1={0}
                                                                                                y1="250.73000000000002"
                                                                                                x2="778.65625"
                                                                                                y2="250.73000000000002"
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                        </g>
                                                                                        <g
                                                                                            id="SvgjsG1832"
                                                                                            className="apexcharts-gridlines-vertical"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1833"
                                                                                            x1={0}
                                                                                            y1="251.73000000000002"
                                                                                            x2={0}
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1834"
                                                                                            x1="55.61830357142857"
                                                                                            y1="251.73000000000002"
                                                                                            x2="55.61830357142857"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1835"
                                                                                            x1="111.23660714285714"
                                                                                            y1="251.73000000000002"
                                                                                            x2="111.23660714285714"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1836"
                                                                                            x1="166.85491071428572"
                                                                                            y1="251.73000000000002"
                                                                                            x2="166.85491071428572"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1837"
                                                                                            x1="222.47321428571428"
                                                                                            y1="251.73000000000002"
                                                                                            x2="222.47321428571428"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1838"
                                                                                            x1="278.09151785714283"
                                                                                            y1="251.73000000000002"
                                                                                            x2="278.09151785714283"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1839"
                                                                                            x1="333.7098214285714"
                                                                                            y1="251.73000000000002"
                                                                                            x2="333.7098214285714"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1840"
                                                                                            x1="389.32812499999994"
                                                                                            y1="251.73000000000002"
                                                                                            x2="389.32812499999994"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1841"
                                                                                            x1="444.9464285714285"
                                                                                            y1="251.73000000000002"
                                                                                            x2="444.9464285714285"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1842"
                                                                                            x1="500.56473214285705"
                                                                                            y1="251.73000000000002"
                                                                                            x2="500.56473214285705"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1843"
                                                                                            x1="556.1830357142857"
                                                                                            y1="251.73000000000002"
                                                                                            x2="556.1830357142857"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1844"
                                                                                            x1="611.8013392857142"
                                                                                            y1="251.73000000000002"
                                                                                            x2="611.8013392857142"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1845"
                                                                                            x1="667.4196428571428"
                                                                                            y1="251.73000000000002"
                                                                                            x2="667.4196428571428"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1846"
                                                                                            x1="723.0379464285713"
                                                                                            y1="251.73000000000002"
                                                                                            x2="723.0379464285713"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1847"
                                                                                            x1="778.6562499999999"
                                                                                            y1="251.73000000000002"
                                                                                            x2="778.6562499999999"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1854"
                                                                                            x1={0}
                                                                                            y1="250.73000000000002"
                                                                                            x2="778.65625"
                                                                                            y2="250.73000000000002"
                                                                                            stroke="transparent"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1853"
                                                                                            x1={0}
                                                                                            y1={1}
                                                                                            x2={0}
                                                                                            y2="250.73000000000002"
                                                                                            stroke="transparent"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                        />
                                                                                    </g>
                                                                                    <g
                                                                                        id="SvgjsG1722"
                                                                                        className="apexcharts-bar-series apexcharts-plot-series"
                                                                                    >
                                                                                        <g
                                                                                            id="SvgjsG1723"
                                                                                            className="apexcharts-series"
                                                                                        >
                                                                                            <rect
                                                                                                id="SvgjsRect1725"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="19.46640625"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1726"
                                                                                                d="M 19.46640625 125.36500000000001L 19.46640625 15.670625000000001Q 19.46640625 15.670625000000001 19.46640625 15.670625000000001L 36.15189732142857 15.670625000000001Q 36.15189732142857 15.670625000000001 36.15189732142857 15.670625000000001L 36.15189732142857 15.670625000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 19.46640625 125.36500000000001L 19.46640625 15.670625000000001Q 19.46640625 15.670625000000001 19.46640625 15.670625000000001L 36.15189732142857 15.670625000000001Q 36.15189732142857 15.670625000000001 36.15189732142857 15.670625000000001L 36.15189732142857 15.670625000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001z"
                                                                                                pathfrom="M 19.46640625 125.36500000000001L 19.46640625 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 19.46640625 125.36500000000001"
                                                                                                cy="15.670625000000001"
                                                                                                cx="75.08470982142856"
                                                                                                j={0}
                                                                                                val={70}
                                                                                                barheight="109.69437500000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1727"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="75.08470982142856"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1728"
                                                                                                d="M 75.08470982142856 125.36500000000001L 75.08470982142856 94.02375Q 75.08470982142856 94.02375 75.08470982142856 94.02375L 91.77020089285713 94.02375Q 91.77020089285713 94.02375 91.77020089285713 94.02375L 91.77020089285713 94.02375L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 75.08470982142856 125.36500000000001L 75.08470982142856 94.02375Q 75.08470982142856 94.02375 75.08470982142856 94.02375L 91.77020089285713 94.02375Q 91.77020089285713 94.02375 91.77020089285713 94.02375L 91.77020089285713 94.02375L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001z"
                                                                                                pathfrom="M 75.08470982142856 125.36500000000001L 75.08470982142856 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 75.08470982142856 125.36500000000001"
                                                                                                cy="94.02375"
                                                                                                cx="130.70301339285714"
                                                                                                j={1}
                                                                                                val={20}
                                                                                                barheight="31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1729"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="130.70301339285714"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1730"
                                                                                                d="M 130.70301339285714 125.36500000000001L 130.70301339285714 7.835312500000001Q 130.70301339285714 7.835312500000001 130.70301339285714 7.835312500000001L 147.38850446428572 7.835312500000001Q 147.38850446428572 7.835312500000001 147.38850446428572 7.835312500000001L 147.38850446428572 7.835312500000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 130.70301339285714 125.36500000000001L 130.70301339285714 7.835312500000001Q 130.70301339285714 7.835312500000001 130.70301339285714 7.835312500000001L 147.38850446428572 7.835312500000001Q 147.38850446428572 7.835312500000001 147.38850446428572 7.835312500000001L 147.38850446428572 7.835312500000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001z"
                                                                                                pathfrom="M 130.70301339285714 125.36500000000001L 130.70301339285714 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 130.70301339285714 125.36500000000001"
                                                                                                cy="7.835312500000001"
                                                                                                cx="186.3213169642857"
                                                                                                j={2}
                                                                                                val={75}
                                                                                                barheight="117.52968750000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1731"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="186.3213169642857"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1732"
                                                                                                d="M 186.3213169642857 125.36500000000001L 186.3213169642857 94.02375Q 186.3213169642857 94.02375 186.3213169642857 94.02375L 203.00680803571427 94.02375Q 203.00680803571427 94.02375 203.00680803571427 94.02375L 203.00680803571427 94.02375L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 186.3213169642857 125.36500000000001L 186.3213169642857 94.02375Q 186.3213169642857 94.02375 186.3213169642857 94.02375L 203.00680803571427 94.02375Q 203.00680803571427 94.02375 203.00680803571427 94.02375L 203.00680803571427 94.02375L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001z"
                                                                                                pathfrom="M 186.3213169642857 125.36500000000001L 186.3213169642857 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 186.3213169642857 125.36500000000001"
                                                                                                cy="94.02375"
                                                                                                cx="241.93962053571425"
                                                                                                j={3}
                                                                                                val={20}
                                                                                                barheight="31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1733"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="241.93962053571425"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1734"
                                                                                                d="M 241.93962053571425 125.36500000000001L 241.93962053571425 47.011875Q 241.93962053571425 47.011875 241.93962053571425 47.011875L 258.6251116071428 47.011875Q 258.6251116071428 47.011875 258.6251116071428 47.011875L 258.6251116071428 47.011875L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 241.93962053571425 125.36500000000001L 241.93962053571425 47.011875Q 241.93962053571425 47.011875 241.93962053571425 47.011875L 258.6251116071428 47.011875Q 258.6251116071428 47.011875 258.6251116071428 47.011875L 258.6251116071428 47.011875L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001z"
                                                                                                pathfrom="M 241.93962053571425 125.36500000000001L 241.93962053571425 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 241.93962053571425 125.36500000000001"
                                                                                                cy="47.011875"
                                                                                                cx="297.5579241071428"
                                                                                                j={4}
                                                                                                val={50}
                                                                                                barheight="78.353125"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1735"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="297.5579241071428"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1736"
                                                                                                d="M 297.5579241071428 125.36500000000001L 297.5579241071428 62.682500000000005Q 297.5579241071428 62.682500000000005 297.5579241071428 62.682500000000005L 314.24341517857135 62.682500000000005Q 314.24341517857135 62.682500000000005 314.24341517857135 62.682500000000005L 314.24341517857135 62.682500000000005L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 297.5579241071428 125.36500000000001L 297.5579241071428 62.682500000000005Q 297.5579241071428 62.682500000000005 297.5579241071428 62.682500000000005L 314.24341517857135 62.682500000000005Q 314.24341517857135 62.682500000000005 314.24341517857135 62.682500000000005L 314.24341517857135 62.682500000000005L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001z"
                                                                                                pathfrom="M 297.5579241071428 125.36500000000001L 297.5579241071428 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 297.5579241071428 125.36500000000001"
                                                                                                cy="62.682500000000005"
                                                                                                cx="353.17622767857137"
                                                                                                j={5}
                                                                                                val={40}
                                                                                                barheight="62.682500000000005"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1737"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="353.17622767857137"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1738"
                                                                                                d="M 353.17622767857137 125.36500000000001L 353.17622767857137 23.5059375Q 353.17622767857137 23.5059375 353.17622767857137 23.5059375L 369.8617187499999 23.5059375Q 369.8617187499999 23.5059375 369.8617187499999 23.5059375L 369.8617187499999 23.5059375L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 353.17622767857137 125.36500000000001L 353.17622767857137 23.5059375Q 353.17622767857137 23.5059375 353.17622767857137 23.5059375L 369.8617187499999 23.5059375Q 369.8617187499999 23.5059375 369.8617187499999 23.5059375L 369.8617187499999 23.5059375L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001z"
                                                                                                pathfrom="M 353.17622767857137 125.36500000000001L 353.17622767857137 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 353.17622767857137 125.36500000000001"
                                                                                                cy="23.5059375"
                                                                                                cx="408.7945312499999"
                                                                                                j={6}
                                                                                                val={65}
                                                                                                barheight="101.85906250000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1739"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="408.7945312499999"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1740"
                                                                                                d="M 408.7945312499999 125.36500000000001L 408.7945312499999 101.85906250000001Q 408.7945312499999 101.85906250000001 408.7945312499999 101.85906250000001L 425.48002232142846 101.85906250000001Q 425.48002232142846 101.85906250000001 425.48002232142846 101.85906250000001L 425.48002232142846 101.85906250000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 408.7945312499999 125.36500000000001L 408.7945312499999 101.85906250000001Q 408.7945312499999 101.85906250000001 408.7945312499999 101.85906250000001L 425.48002232142846 101.85906250000001Q 425.48002232142846 101.85906250000001 425.48002232142846 101.85906250000001L 425.48002232142846 101.85906250000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001z"
                                                                                                pathfrom="M 408.7945312499999 125.36500000000001L 408.7945312499999 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 408.7945312499999 125.36500000000001"
                                                                                                cy="101.85906250000001"
                                                                                                cx="464.4128348214285"
                                                                                                j={7}
                                                                                                val={15}
                                                                                                barheight="23.5059375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1741"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="464.4128348214285"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1742"
                                                                                                d="M 464.4128348214285 125.36500000000001L 464.4128348214285 62.682500000000005Q 464.4128348214285 62.682500000000005 464.4128348214285 62.682500000000005L 481.098325892857 62.682500000000005Q 481.098325892857 62.682500000000005 481.098325892857 62.682500000000005L 481.098325892857 62.682500000000005L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 464.4128348214285 125.36500000000001L 464.4128348214285 62.682500000000005Q 464.4128348214285 62.682500000000005 464.4128348214285 62.682500000000005L 481.098325892857 62.682500000000005Q 481.098325892857 62.682500000000005 481.098325892857 62.682500000000005L 481.098325892857 62.682500000000005L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001z"
                                                                                                pathfrom="M 464.4128348214285 125.36500000000001L 464.4128348214285 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 464.4128348214285 125.36500000000001"
                                                                                                cy="62.682500000000005"
                                                                                                cx="520.0311383928571"
                                                                                                j={8}
                                                                                                val={40}
                                                                                                barheight="62.682500000000005"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1743"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="520.0311383928571"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1744"
                                                                                                d="M 520.0311383928571 125.36500000000001L 520.0311383928571 39.1765625Q 520.0311383928571 39.1765625 520.0311383928571 39.1765625L 536.7166294642857 39.1765625Q 536.7166294642857 39.1765625 536.7166294642857 39.1765625L 536.7166294642857 39.1765625L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 520.0311383928571 125.36500000000001L 520.0311383928571 39.1765625Q 520.0311383928571 39.1765625 520.0311383928571 39.1765625L 536.7166294642857 39.1765625Q 536.7166294642857 39.1765625 536.7166294642857 39.1765625L 536.7166294642857 39.1765625L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001z"
                                                                                                pathfrom="M 520.0311383928571 125.36500000000001L 520.0311383928571 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 520.0311383928571 125.36500000000001"
                                                                                                cy="39.1765625"
                                                                                                cx="575.6494419642856"
                                                                                                j={9}
                                                                                                val={55}
                                                                                                barheight="86.1884375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1745"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="575.6494419642856"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1746"
                                                                                                d="M 575.6494419642856 125.36500000000001L 575.6494419642856 31.341250000000002Q 575.6494419642856 31.341250000000002 575.6494419642856 31.341250000000002L 592.3349330357142 31.341250000000002Q 592.3349330357142 31.341250000000002 592.3349330357142 31.341250000000002L 592.3349330357142 31.341250000000002L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 575.6494419642856 125.36500000000001L 575.6494419642856 31.341250000000002Q 575.6494419642856 31.341250000000002 575.6494419642856 31.341250000000002L 592.3349330357142 31.341250000000002Q 592.3349330357142 31.341250000000002 592.3349330357142 31.341250000000002L 592.3349330357142 31.341250000000002L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001z"
                                                                                                pathfrom="M 575.6494419642856 125.36500000000001L 575.6494419642856 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 575.6494419642856 125.36500000000001"
                                                                                                cy="31.341250000000002"
                                                                                                cx="631.2677455357142"
                                                                                                j={10}
                                                                                                val={60}
                                                                                                barheight="94.02375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1747"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="631.2677455357142"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1748"
                                                                                                d="M 631.2677455357142 125.36500000000001L 631.2677455357142 94.02375Q 631.2677455357142 94.02375 631.2677455357142 94.02375L 647.9532366071428 94.02375Q 647.9532366071428 94.02375 647.9532366071428 94.02375L 647.9532366071428 94.02375L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 631.2677455357142 125.36500000000001L 631.2677455357142 94.02375Q 631.2677455357142 94.02375 631.2677455357142 94.02375L 647.9532366071428 94.02375Q 647.9532366071428 94.02375 647.9532366071428 94.02375L 647.9532366071428 94.02375L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001z"
                                                                                                pathfrom="M 631.2677455357142 125.36500000000001L 631.2677455357142 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 631.2677455357142 125.36500000000001"
                                                                                                cy="94.02375"
                                                                                                cx="686.8860491071428"
                                                                                                j={11}
                                                                                                val={20}
                                                                                                barheight="31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1749"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="686.8860491071428"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1750"
                                                                                                d="M 686.8860491071428 125.36500000000001L 686.8860491071428 7.835312500000001Q 686.8860491071428 7.835312500000001 686.8860491071428 7.835312500000001L 703.5715401785714 7.835312500000001Q 703.5715401785714 7.835312500000001 703.5715401785714 7.835312500000001L 703.5715401785714 7.835312500000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 686.8860491071428 125.36500000000001L 686.8860491071428 7.835312500000001Q 686.8860491071428 7.835312500000001 686.8860491071428 7.835312500000001L 703.5715401785714 7.835312500000001Q 703.5715401785714 7.835312500000001 703.5715401785714 7.835312500000001L 703.5715401785714 7.835312500000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001z"
                                                                                                pathfrom="M 686.8860491071428 125.36500000000001L 686.8860491071428 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 686.8860491071428 125.36500000000001"
                                                                                                cy="7.835312500000001"
                                                                                                cx="742.5043526785713"
                                                                                                j={12}
                                                                                                val={75}
                                                                                                barheight="117.52968750000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1751"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="742.5043526785713"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1752"
                                                                                                d="M 742.5043526785713 125.36500000000001L 742.5043526785713 62.682500000000005Q 742.5043526785713 62.682500000000005 742.5043526785713 62.682500000000005L 759.1898437499999 62.682500000000005Q 759.1898437499999 62.682500000000005 759.1898437499999 62.682500000000005L 759.1898437499999 62.682500000000005L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 742.5043526785713 125.36500000000001L 742.5043526785713 62.682500000000005Q 742.5043526785713 62.682500000000005 742.5043526785713 62.682500000000005L 759.1898437499999 62.682500000000005Q 759.1898437499999 62.682500000000005 759.1898437499999 62.682500000000005L 759.1898437499999 62.682500000000005L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001z"
                                                                                                pathfrom="M 742.5043526785713 125.36500000000001L 742.5043526785713 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 742.5043526785713 125.36500000000001"
                                                                                                cy="62.682500000000005"
                                                                                                cx="798.1226562499999"
                                                                                                j={13}
                                                                                                val={40}
                                                                                                barheight="62.682500000000005"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                        </g>
                                                                                        <g
                                                                                            id="SvgjsG1753"
                                                                                            className="apexcharts-series"

                                                                                        >
                                                                                            <path
                                                                                                id="SvgjsPath1755"
                                                                                                d="M 19.46640625 125.36500000000001L 19.46640625 219.38875000000002Q 19.46640625 219.38875000000002 19.46640625 219.38875000000002L 36.15189732142857 219.38875000000002Q 36.15189732142857 219.38875000000002 36.15189732142857 219.38875000000002L 36.15189732142857 219.38875000000002L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 19.46640625 125.36500000000001L 19.46640625 219.38875000000002Q 19.46640625 219.38875000000002 19.46640625 219.38875000000002L 36.15189732142857 219.38875000000002Q 36.15189732142857 219.38875000000002 36.15189732142857 219.38875000000002L 36.15189732142857 219.38875000000002L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001z"
                                                                                                pathfrom="M 19.46640625 125.36500000000001L 19.46640625 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 19.46640625 125.36500000000001"
                                                                                                cy="219.38875000000002"
                                                                                                cx="75.08470982142856"
                                                                                                j={0}
                                                                                                val={-60}
                                                                                                barheight="-94.02375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1756"
                                                                                                d="M 75.08470982142856 125.36500000000001L 75.08470982142856 141.035625Q 75.08470982142856 141.035625 75.08470982142856 141.035625L 91.77020089285713 141.035625Q 91.77020089285713 141.035625 91.77020089285713 141.035625L 91.77020089285713 141.035625L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 75.08470982142856 125.36500000000001L 75.08470982142856 141.035625Q 75.08470982142856 141.035625 75.08470982142856 141.035625L 91.77020089285713 141.035625Q 91.77020089285713 141.035625 91.77020089285713 141.035625L 91.77020089285713 141.035625L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001z"
                                                                                                pathfrom="M 75.08470982142856 125.36500000000001L 75.08470982142856 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 75.08470982142856 125.36500000000001"
                                                                                                cy="141.035625"
                                                                                                cx="130.70301339285714"
                                                                                                j={1}
                                                                                                val={-10}
                                                                                                barheight="-15.670625000000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1757"
                                                                                                d="M 130.70301339285714 125.36500000000001L 130.70301339285714 203.71812500000001Q 130.70301339285714 203.71812500000001 130.70301339285714 203.71812500000001L 147.38850446428572 203.71812500000001Q 147.38850446428572 203.71812500000001 147.38850446428572 203.71812500000001L 147.38850446428572 203.71812500000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 130.70301339285714 125.36500000000001L 130.70301339285714 203.71812500000001Q 130.70301339285714 203.71812500000001 130.70301339285714 203.71812500000001L 147.38850446428572 203.71812500000001Q 147.38850446428572 203.71812500000001 147.38850446428572 203.71812500000001L 147.38850446428572 203.71812500000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001z"
                                                                                                pathfrom="M 130.70301339285714 125.36500000000001L 130.70301339285714 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 130.70301339285714 125.36500000000001"
                                                                                                cy="203.71812500000001"
                                                                                                cx="186.3213169642857"
                                                                                                j={2}
                                                                                                val={-50}
                                                                                                barheight="-78.353125"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1758"
                                                                                                d="M 186.3213169642857 125.36500000000001L 186.3213169642857 164.5415625Q 186.3213169642857 164.5415625 186.3213169642857 164.5415625L 203.00680803571427 164.5415625Q 203.00680803571427 164.5415625 203.00680803571427 164.5415625L 203.00680803571427 164.5415625L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 186.3213169642857 125.36500000000001L 186.3213169642857 164.5415625Q 186.3213169642857 164.5415625 186.3213169642857 164.5415625L 203.00680803571427 164.5415625Q 203.00680803571427 164.5415625 203.00680803571427 164.5415625L 203.00680803571427 164.5415625L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001z"
                                                                                                pathfrom="M 186.3213169642857 125.36500000000001L 186.3213169642857 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 186.3213169642857 125.36500000000001"
                                                                                                cy="164.5415625"
                                                                                                cx="241.93962053571425"
                                                                                                j={3}
                                                                                                val={-25}
                                                                                                barheight="-39.1765625"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1759"
                                                                                                d="M 241.93962053571425 125.36500000000001L 241.93962053571425 172.376875Q 241.93962053571425 172.376875 241.93962053571425 172.376875L 258.6251116071428 172.376875Q 258.6251116071428 172.376875 258.6251116071428 172.376875L 258.6251116071428 172.376875L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 241.93962053571425 125.36500000000001L 241.93962053571425 172.376875Q 241.93962053571425 172.376875 241.93962053571425 172.376875L 258.6251116071428 172.376875Q 258.6251116071428 172.376875 258.6251116071428 172.376875L 258.6251116071428 172.376875L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001z"
                                                                                                pathfrom="M 241.93962053571425 125.36500000000001L 241.93962053571425 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 241.93962053571425 125.36500000000001"
                                                                                                cy="172.376875"
                                                                                                cx="297.5579241071428"
                                                                                                j={4}
                                                                                                val={-30}
                                                                                                barheight="-47.011875"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1760"
                                                                                                d="M 297.5579241071428 125.36500000000001L 297.5579241071428 227.2240625Q 297.5579241071428 227.2240625 297.5579241071428 227.2240625L 314.24341517857135 227.2240625Q 314.24341517857135 227.2240625 314.24341517857135 227.2240625L 314.24341517857135 227.2240625L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 297.5579241071428 125.36500000000001L 297.5579241071428 227.2240625Q 297.5579241071428 227.2240625 297.5579241071428 227.2240625L 314.24341517857135 227.2240625Q 314.24341517857135 227.2240625 314.24341517857135 227.2240625L 314.24341517857135 227.2240625L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001z"
                                                                                                pathfrom="M 297.5579241071428 125.36500000000001L 297.5579241071428 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 297.5579241071428 125.36500000000001"
                                                                                                cy="227.2240625"
                                                                                                cx="353.17622767857137"
                                                                                                j={5}
                                                                                                val={-65}
                                                                                                barheight="-101.85906250000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1761"
                                                                                                d="M 353.17622767857137 125.36500000000001L 353.17622767857137 159.840375Q 353.17622767857137 159.840375 353.17622767857137 159.840375L 369.8617187499999 159.840375Q 369.8617187499999 159.840375 369.8617187499999 159.840375L 369.8617187499999 159.840375L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 353.17622767857137 125.36500000000001L 353.17622767857137 159.840375Q 353.17622767857137 159.840375 353.17622767857137 159.840375L 369.8617187499999 159.840375Q 369.8617187499999 159.840375 369.8617187499999 159.840375L 369.8617187499999 159.840375L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001z"
                                                                                                pathfrom="M 353.17622767857137 125.36500000000001L 353.17622767857137 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 353.17622767857137 125.36500000000001"
                                                                                                cy="159.840375"
                                                                                                cx="408.7945312499999"
                                                                                                j={6}
                                                                                                val={-22}
                                                                                                barheight="-34.475375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1762"
                                                                                                d="M 408.7945312499999 125.36500000000001L 408.7945312499999 141.035625Q 408.7945312499999 141.035625 408.7945312499999 141.035625L 425.48002232142846 141.035625Q 425.48002232142846 141.035625 425.48002232142846 141.035625L 425.48002232142846 141.035625L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 408.7945312499999 125.36500000000001L 408.7945312499999 141.035625Q 408.7945312499999 141.035625 408.7945312499999 141.035625L 425.48002232142846 141.035625Q 425.48002232142846 141.035625 425.48002232142846 141.035625L 425.48002232142846 141.035625L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001z"
                                                                                                pathfrom="M 408.7945312499999 125.36500000000001L 408.7945312499999 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 408.7945312499999 125.36500000000001"
                                                                                                cy="141.035625"
                                                                                                cx="464.4128348214285"
                                                                                                j={7}
                                                                                                val={-10}
                                                                                                barheight="-15.670625000000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1763"
                                                                                                d="M 464.4128348214285 125.36500000000001L 464.4128348214285 203.71812500000001Q 464.4128348214285 203.71812500000001 464.4128348214285 203.71812500000001L 481.098325892857 203.71812500000001Q 481.098325892857 203.71812500000001 481.098325892857 203.71812500000001L 481.098325892857 203.71812500000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 464.4128348214285 125.36500000000001L 464.4128348214285 203.71812500000001Q 464.4128348214285 203.71812500000001 464.4128348214285 203.71812500000001L 481.098325892857 203.71812500000001Q 481.098325892857 203.71812500000001 481.098325892857 203.71812500000001L 481.098325892857 203.71812500000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001z"
                                                                                                pathfrom="M 464.4128348214285 125.36500000000001L 464.4128348214285 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 464.4128348214285 125.36500000000001"
                                                                                                cy="203.71812500000001"
                                                                                                cx="520.0311383928571"
                                                                                                j={8}
                                                                                                val={-50}
                                                                                                barheight="-78.353125"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1764"
                                                                                                d="M 520.0311383928571 125.36500000000001L 520.0311383928571 156.70625Q 520.0311383928571 156.70625 520.0311383928571 156.70625L 536.7166294642857 156.70625Q 536.7166294642857 156.70625 536.7166294642857 156.70625L 536.7166294642857 156.70625L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 520.0311383928571 125.36500000000001L 520.0311383928571 156.70625Q 520.0311383928571 156.70625 520.0311383928571 156.70625L 536.7166294642857 156.70625Q 536.7166294642857 156.70625 536.7166294642857 156.70625L 536.7166294642857 156.70625L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001z"
                                                                                                pathfrom="M 520.0311383928571 125.36500000000001L 520.0311383928571 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 520.0311383928571 125.36500000000001"
                                                                                                cy="156.70625"
                                                                                                cx="575.6494419642856"
                                                                                                j={9}
                                                                                                val={-20}
                                                                                                barheight="-31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1765"
                                                                                                d="M 575.6494419642856 125.36500000000001L 575.6494419642856 235.05937500000002Q 575.6494419642856 235.05937500000002 575.6494419642856 235.05937500000002L 592.3349330357142 235.05937500000002Q 592.3349330357142 235.05937500000002 592.3349330357142 235.05937500000002L 592.3349330357142 235.05937500000002L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 575.6494419642856 125.36500000000001L 575.6494419642856 235.05937500000002Q 575.6494419642856 235.05937500000002 575.6494419642856 235.05937500000002L 592.3349330357142 235.05937500000002Q 592.3349330357142 235.05937500000002 592.3349330357142 235.05937500000002L 592.3349330357142 235.05937500000002L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001z"
                                                                                                pathfrom="M 575.6494419642856 125.36500000000001L 575.6494419642856 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 575.6494419642856 125.36500000000001"
                                                                                                cy="235.05937500000002"
                                                                                                cx="631.2677455357142"
                                                                                                j={10}
                                                                                                val={-70}
                                                                                                barheight="-109.69437500000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1766"
                                                                                                d="M 631.2677455357142 125.36500000000001L 631.2677455357142 180.21218750000003Q 631.2677455357142 180.21218750000003 631.2677455357142 180.21218750000003L 647.9532366071428 180.21218750000003Q 647.9532366071428 180.21218750000003 647.9532366071428 180.21218750000003L 647.9532366071428 180.21218750000003L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 631.2677455357142 125.36500000000001L 631.2677455357142 180.21218750000003Q 631.2677455357142 180.21218750000003 631.2677455357142 180.21218750000003L 647.9532366071428 180.21218750000003Q 647.9532366071428 180.21218750000003 647.9532366071428 180.21218750000003L 647.9532366071428 180.21218750000003L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001z"
                                                                                                pathfrom="M 631.2677455357142 125.36500000000001L 631.2677455357142 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 631.2677455357142 125.36500000000001"
                                                                                                cy="180.21218750000003"
                                                                                                cx="686.8860491071428"
                                                                                                j={11}
                                                                                                val={-35}
                                                                                                barheight="-54.847187500000004"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1767"
                                                                                                d="M 686.8860491071428 125.36500000000001L 686.8860491071428 219.38875000000002Q 686.8860491071428 219.38875000000002 686.8860491071428 219.38875000000002L 703.5715401785714 219.38875000000002Q 703.5715401785714 219.38875000000002 703.5715401785714 219.38875000000002L 703.5715401785714 219.38875000000002L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 686.8860491071428 125.36500000000001L 686.8860491071428 219.38875000000002Q 686.8860491071428 219.38875000000002 686.8860491071428 219.38875000000002L 703.5715401785714 219.38875000000002Q 703.5715401785714 219.38875000000002 703.5715401785714 219.38875000000002L 703.5715401785714 219.38875000000002L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001z"
                                                                                                pathfrom="M 686.8860491071428 125.36500000000001L 686.8860491071428 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 686.8860491071428 125.36500000000001"
                                                                                                cy="219.38875000000002"
                                                                                                cx="742.5043526785713"
                                                                                                j={12}
                                                                                                val={-60}
                                                                                                barheight="-94.02375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1768"
                                                                                                d="M 742.5043526785713 125.36500000000001L 742.5043526785713 156.70625Q 742.5043526785713 156.70625 742.5043526785713 156.70625L 759.1898437499999 156.70625Q 759.1898437499999 156.70625 759.1898437499999 156.70625L 759.1898437499999 156.70625L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 742.5043526785713 125.36500000000001L 742.5043526785713 156.70625Q 742.5043526785713 156.70625 742.5043526785713 156.70625L 759.1898437499999 156.70625Q 759.1898437499999 156.70625 759.1898437499999 156.70625L 759.1898437499999 156.70625L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001z"
                                                                                                pathfrom="M 742.5043526785713 125.36500000000001L 742.5043526785713 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 742.5043526785713 125.36500000000001"
                                                                                                cy="156.70625"
                                                                                                cx="798.1226562499999"
                                                                                                j={13}
                                                                                                val={-20}
                                                                                                barheight="-31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                        </g>
                                                                                        <g
                                                                                            id="SvgjsG1724"
                                                                                            className="apexcharts-datalabels"
                                                                                        />
                                                                                        <g
                                                                                            id="SvgjsG1754"
                                                                                            className="apexcharts-datalabels"
                                                                                        />
                                                                                    </g>
                                                                                    <line
                                                                                        id="SvgjsLine1855"
                                                                                        x1={0}
                                                                                        y1={0}
                                                                                        x2="778.65625"
                                                                                        y2={0}
                                                                                        stroke="#b6b6b6"
                                                                                        strokeDasharray={0}
                                                                                        strokeWidth={1}
                                                                                        strokeLinecap="butt"
                                                                                        className="apexcharts-ycrosshairs"
                                                                                    />
                                                                                    <line
                                                                                        id="SvgjsLine1856"
                                                                                        x1={0}
                                                                                        y1={0}
                                                                                        x2="778.65625"
                                                                                        y2={0}
                                                                                        strokeDasharray={0}
                                                                                        strokeWidth={0}
                                                                                        strokeLinecap="butt"
                                                                                        className="apexcharts-ycrosshairs-hidden"
                                                                                    />
                                                                                    <g
                                                                                        id="SvgjsG1857"
                                                                                        className="apexcharts-yaxis-annotations"
                                                                                    />
                                                                                    <g
                                                                                        id="SvgjsG1858"
                                                                                        className="apexcharts-xaxis-annotations"
                                                                                    />
                                                                                    <g
                                                                                        id="SvgjsG1859"
                                                                                        className="apexcharts-point-annotations"
                                                                                    />
                                                                                </g>
                                                                                <g
                                                                                    id="SvgjsG1813"
                                                                                    className="apexcharts-yaxis"
                                                                                    rel={0}
                                                                                    transform="translate(6.34375, 0)"
                                                                                >
                                                                                    <g
                                                                                        id="SvgjsG1814"
                                                                                        className="apexcharts-yaxis-texts-g"
                                                                                    >
                                                                                        <text
                                                                                            id="SvgjsText1816"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="31.4"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1817">80</tspan>
                                                                                            <title>80</title>
                                                                                        </text>
                                                                                        <text
                                                                                            id="SvgjsText1819"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="94.08250000000001"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1820">40</tspan>
                                                                                            <title>40</title>
                                                                                        </text>
                                                                                        <text
                                                                                            id="SvgjsText1822"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="156.76500000000001"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1823">0</tspan>
                                                                                            <title>0</title>
                                                                                        </text>
                                                                                        <text
                                                                                            id="SvgjsText1825"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="219.44750000000002"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1826">-40</tspan>
                                                                                            <title>-40</title>
                                                                                        </text>
                                                                                        <text
                                                                                            id="SvgjsText1828"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="282.13"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1829">-80</tspan>
                                                                                            <title>-80</title>
                                                                                        </text>
                                                                                    </g>
                                                                                </g>
                                                                                <g
                                                                                    id="SvgjsG1717"
                                                                                    className="apexcharts-annotations"
                                                                                />
                                                                            </svg>
                                                                            <div
                                                                                className="apexcharts-legend"
                                                                                style={{ maxHeight: 160 }}
                                                                            />
                                                                            <div className="apexcharts-tooltip apexcharts-theme-light">
                                                                                <div
                                                                                    className="apexcharts-tooltip-title"
                                                                                    style={{
                                                                                        fontFamily: "Helvetica, Arial, sans-serif",
                                                                                        fontSize: 12
                                                                                    }}
                                                                                />
                                                                                <div
                                                                                    className="apexcharts-tooltip-series-group"
                                                                                    style={{ order: 1 }}
                                                                                >
                                  <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                          backgroundColor: "rgb(41, 83, 232)"
                                      }}
                                  />
                                                                                    <div
                                                                                        className="apexcharts-tooltip-text"
                                                                                        style={{
                                                                                            fontFamily:
                                                                                                "Helvetica, Arial, sans-serif",
                                                                                            fontSize: 12
                                                                                        }}
                                                                                    >
                                                                                        <div className="apexcharts-tooltip-y-group">
                                                                                            <span className="apexcharts-tooltip-text-y-label" />
                                                                                            <span className="apexcharts-tooltip-text-y-value" />
                                                                                        </div>
                                                                                        <div className="apexcharts-tooltip-goals-group">
                                                                                            <span className="apexcharts-tooltip-text-goals-label" />
                                                                                            <span className="apexcharts-tooltip-text-goals-value" />
                                                                                        </div>
                                                                                        <div className="apexcharts-tooltip-z-group">
                                                                                            <span className="apexcharts-tooltip-text-z-label" />
                                                                                            <span className="apexcharts-tooltip-text-z-value" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="apexcharts-tooltip-series-group"
                                                                                    style={{ order: 2 }}
                                                                                >
                                  <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                          backgroundColor: "rgb(9, 38, 138)"
                                      }}
                                  />
                                                                                    <div
                                                                                        className="apexcharts-tooltip-text"
                                                                                        style={{
                                                                                            fontFamily:
                                                                                                "Helvetica, Arial, sans-serif",
                                                                                            fontSize: 12
                                                                                        }}
                                                                                    >
                                                                                        <div className="apexcharts-tooltip-y-group">
                                                                                            <span className="apexcharts-tooltip-text-y-label" />
                                                                                            <span className="apexcharts-tooltip-text-y-value" />
                                                                                        </div>
                                                                                        <div className="apexcharts-tooltip-goals-group">
                                                                                            <span className="apexcharts-tooltip-text-goals-label" />
                                                                                            <span className="apexcharts-tooltip-text-goals-value" />
                                                                                        </div>
                                                                                        <div className="apexcharts-tooltip-z-group">
                                                                                            <span className="apexcharts-tooltip-text-z-label" />
                                                                                            <span className="apexcharts-tooltip-text-z-value" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                                                <div className="apexcharts-yaxistooltip-text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            className="fade tab-pane"
                                                        >
                                                            <div className="d-flex align-items-center">
                        <span className="fs-36 text-black font-w600 mr-4">
                          5,75%
                        </span>
                                                                <div>
                                                                    <svg
                                                                        className="mr-2"
                                                                        width={27}
                                                                        height={14}
                                                                        viewBox="0 0 27 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                                                            fill="#2FCA51"
                                                                        />
                                                                    </svg>
                                                                    <span>last month $563,443</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div id="chart">
                                                                    <div style={{ minHeight: 335 }}>
                                                                        <div
                                                                            id="apexchartsssr5z9sz"
                                                                            className="apexcharts-canvas apexchartsssr5z9sz"
                                                                            style={{ width: 0, height: 320 }}
                                                                        >
                                                                            <svg
                                                                                id="SvgjsSvg1706"
                                                                                width={0}
                                                                                height={320}
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                version="1.1"
                                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                className="apexcharts-svg"
                                                                                transform="translate(0, 0)"
                                                                                style={{ background: "transparent" }}
                                                                            >
                                                                                <g
                                                                                    id="SvgjsG1709"
                                                                                    className="apexcharts-annotations"
                                                                                />
                                                                                <g
                                                                                    id="SvgjsG1708"
                                                                                    className="apexcharts-inner apexcharts-graphical"
                                                                                >
                                                                                    <defs id="SvgjsDefs1707" />
                                                                                </g>
                                                                            </svg>
                                                                            <div className="apexcharts-legend" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            className="fade tab-pane"
                                                        >
                                                            <div className="d-flex align-items-center">
                        <span className="fs-36 text-black font-w600 mr-4">
                          1,20%
                        </span>
                                                                <div>
                                                                    <svg
                                                                        className="mr-2"
                                                                        width={27}
                                                                        height={14}
                                                                        viewBox="0 0 27 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                                                            fill="#2FCA51"
                                                                        />
                                                                    </svg>
                                                                    <span>last month $563,443</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div id="chart">
                                                                    <div style={{ minHeight: 335 }}>
                                                                        <div
                                                                            id="apexcharts7t1zy4q"
                                                                            className="apexcharts-canvas apexcharts7t1zy4q"
                                                                            style={{ width: 0, height: 320 }}
                                                                        >
                                                                            <svg
                                                                                id="SvgjsSvg1710"
                                                                                width={0}
                                                                                height={320}
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                version="1.1"
                                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                className="apexcharts-svg"
                                                                                transform="translate(0, 0)"
                                                                                style={{ background: "transparent" }}
                                                                            >
                                                                                <g
                                                                                    id="SvgjsG1713"
                                                                                    className="apexcharts-annotations"
                                                                                />
                                                                                <g
                                                                                    id="SvgjsG1712"
                                                                                    className="apexcharts-inner apexcharts-graphical"
                                                                                >
                                                                                    <defs id="SvgjsDefs1711" />
                                                                                </g>
                                                                            </svg>
                                                                            <div className="apexcharts-legend" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                                            <div className="card">
                                                <div className="card-header border-0 shadow-sm">
                                                    <h4 className="fs-20 text-black font-w600">Monthly Target</h4>
                                                    <div className="dropdown">
                                                        <button
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            type="button"
                                                            className="table-dropdown icon-false p-0 dropdown-toggle btn btn-true"
                                                        >
                                                            <a
                                                                data-toggle="dropdown"
                                                                aria-expanded="false"
                                                                href="/react/demo/"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                                                        stroke="#575757"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                                                        stroke="#575757"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                                                        stroke="#575757"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="card-body text-center">
                                                    <div>
                                                        <div id="chart">
                                                            <div style={{ minHeight: "278.7px" }}>
                                                                <div
                                                                    id="apexchartsn2vsosws"
                                                                    className="apexcharts-canvas apexchartsn2vsosws apexcharts-theme-light"
                                                                    style={{ height: "278.7px" }}
                                                                >
                                                                    <svg
                                                                        id="SvgjsSvg1860"
                                                                        width={375}
                                                                        height="278.70000000000005"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        version="1.1"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        className="apexcharts-svg"
                                                                        transform="translate(0, 0)"
                                                                        style={{ background: "transparent" }}
                                                                    >
                                                                        <g
                                                                            id="SvgjsG1862"
                                                                            className="apexcharts-inner apexcharts-graphical"
                                                                            transform="translate(50.5, 0)"
                                                                        >
                                                                            <defs id="SvgjsDefs1861">
                                                                                <clipPath id="gridRectMaskn2vsosws">
                                                                                    <rect
                                                                                        id="SvgjsRect1864"
                                                                                        width={282}
                                                                                        height={300}
                                                                                        x={-3}
                                                                                        y={-1}
                                                                                        rx={0}
                                                                                        ry={0}
                                                                                        opacity={1}
                                                                                        strokeWidth={0}
                                                                                        stroke="none"
                                                                                        strokeDasharray={0}
                                                                                        fill="#fff"
                                                                                    />
                                                                                </clipPath>
                                                                                <clipPath id="forecastMaskn2vsosws" />
                                                                                <clipPath id="nonForecastMaskn2vsosws" />
                                                                                <clipPath id="gridRectMarkerMaskn2vsosws">
                                                                                    <rect
                                                                                        id="SvgjsRect1865"
                                                                                        width={280}
                                                                                        height={302}
                                                                                        x={-2}
                                                                                        y={-2}
                                                                                        rx={0}
                                                                                        ry={0}
                                                                                        opacity={1}
                                                                                        strokeWidth={0}
                                                                                        stroke="none"
                                                                                        strokeDasharray={0}
                                                                                        fill="#fff"
                                                                                    />
                                                                                </clipPath>
                                                                                <linearGradient
                                                                                    id="SvgjsLinearGradient1870"
                                                                                    x1={0}
                                                                                    y1={1}
                                                                                    x2={1}
                                                                                    y2={1}
                                                                                >
                                                                                    <stop
                                                                                        id="SvgjsStop1871"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(41,83,232,1)"
                                                                                        offset={0}
                                                                                    />
                                                                                    <stop
                                                                                        id="SvgjsStop1872"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(248,248,248,1)"
                                                                                        offset={1}
                                                                                    />
                                                                                    <stop
                                                                                        id="SvgjsStop1873"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(248,248,248,1)"
                                                                                        offset={1}
                                                                                    />
                                                                                </linearGradient>
                                                                                <linearGradient
                                                                                    id="SvgjsLinearGradient1881"
                                                                                    x1={0}
                                                                                    y1={1}
                                                                                    x2={1}
                                                                                    y2={1}
                                                                                >
                                                                                    <stop
                                                                                        id="SvgjsStop1882"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(41,83,232,1)"
                                                                                        offset={0}
                                                                                    />
                                                                                    <stop
                                                                                        id="SvgjsStop1883"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(0,143,251,1)"
                                                                                        offset={1}
                                                                                    />
                                                                                    <stop
                                                                                        id="SvgjsStop1884"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(0,143,251,1)"
                                                                                        offset={1}
                                                                                    />
                                                                                </linearGradient>
                                                                            </defs>
                                                                            <g
                                                                                id="SvgjsG1866"
                                                                                className="apexcharts-radialbar"
                                                                            >
                                                                                <g id="SvgjsG1867">
                                                                                    <g
                                                                                        id="SvgjsG1868"
                                                                                        className="apexcharts-tracks"
                                                                                    >
                                                                                        <g
                                                                                            id="SvgjsG1869"
                                                                                            className="apexcharts-radialbar-track apexcharts-track"
                                                                                            rel={1}
                                                                                        >
                                                                                            <path
                                                                                                id="apexcharts-radialbarTrack-0"
                                                                                                d="M 138 38.30853658536584 A 99.69146341463416 99.69146341463416 0 1 1 137.98260055736114 38.30853810375365"
                                                                                                fill="none"
                                                                                                fillOpacity={1}
                                                                                                stroke="rgba(248,248,248,0.85)"
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="butt"
                                                                                                strokeWidth="12.927731707317076"
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-radialbar-area"
                                                                                                 />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g id="SvgjsG1875">
                                                                                        <g
                                                                                            id="SvgjsG1880"
                                                                                            className="apexcharts-series apexcharts-radial-series"
                                                                                            >
                                                                                            <path
                                                                                                id="SvgjsPath1885"
                                                                                                d="M 138 38.30853658536584 A 99.69146341463416 99.69146341463416 0 1 1 38.30853658536584 138"
                                                                                                fill="none"
                                                                                                fillOpacity="0.85"
                                                                                                stroke="url(#SvgjsLinearGradient1881)"
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="butt"
                                                                                                strokeWidth="19.295121951219514"
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                                              />
                                                                                        </g>
                                                                                        <circle
                                                                                            id="SvgjsCircle1876"
                                                                                            r="93.22759756097562"
                                                                                            cx={138}
                                                                                            cy={138}
                                                                                            className="apexcharts-radialbar-hollow"
                                                                                            fill="#ffffff"
                                                                                        />
                                                                                        <g
                                                                                            id="SvgjsG1877"
                                                                                            className="apexcharts-datalabels-group"
                                                                                            transform="translate(0, 0) scale(1)"
                                                                                            style={{ opacity: 1 }}
                                                                                        >
                                                                                            <text
                                                                                                id="SvgjsText1878"
                                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                                x={138}
                                                                                                y={138}
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="16px"
                                                                                                fontWeight={600}
                                                                                                fill="#008ffb"
                                                                                                className="apexcharts-text apexcharts-datalabel-label"
                                                                                                style={{
                                                                                                    fontFamily:
                                                                                                        "Helvetica, Arial, sans-serif"
                                                                                                }}
                                                                                            />
                                                                                            <text
                                                                                                id="SvgjsText1879"
                                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                                x={138}
                                                                                                y={147}
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="20px"
                                                                                                fontWeight={400}
                                                                                                fill="#111111"
                                                                                                className="apexcharts-text apexcharts-datalabel-value"
                                                                                                style={{
                                                                                                    fontFamily:
                                                                                                        "Helvetica, Arial, sans-serif"
                                                                                                }}
                                                                                            >
                                                                                                75%
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                            <line
                                                                                id="SvgjsLine1886"
                                                                                x1={0}
                                                                                y1={0}
                                                                                x2={276}
                                                                                y2={0}
                                                                                stroke="#b6b6b6"
                                                                                strokeDasharray={0}
                                                                                strokeWidth={1}
                                                                                strokeLinecap="butt"
                                                                                className="apexcharts-ycrosshairs"
                                                                            />
                                                                            <line
                                                                                id="SvgjsLine1887"
                                                                                x1={0}
                                                                                y1={0}
                                                                                x2={276}
                                                                                y2={0}
                                                                                strokeDasharray={0}
                                                                                strokeWidth={0}
                                                                                strokeLinecap="butt"
                                                                                className="apexcharts-ycrosshairs-hidden"
                                                                            />
                                                                        </g>
                                                                        <g
                                                                            id="SvgjsG1863"
                                                                            className="apexcharts-annotations"
                                                                        />
                                                                    </svg>
                                                                    <div className="apexcharts-legend" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card">
                                                <div className="card-header shadow-sm">
                                                    <div className="mr-2">
                                                        <h4 className="fs-20 mb-0 font-w600 text-black">
                                                            Quick To-Do List
                                                        </h4>
                                                        <span className="fs-14">Lorem ipsum dolor sit amet</span>
                                                    </div>
                                                    <a className="plus-icon" href="">
                                                        <i className="fa fa-plus" aria-hidden="true" />
                                                    </a>
                                                </div>
                                                <div
                                                    id="RecentActivitiesContent"
                                                    className="scrollbar-container card-body loadmore-content height620 dlab-scroll pb-0 ps ps--active-y"
                                                >
                                                    <div>
                                                        <div className="border-bottom pb-4 mb-4">
                                                            <a
                                                                className="btn btn-sm btn-success rounded-xl mb-2"
                                                                href=""
                                                            >
                                                                Graphic Deisgner
                                                            </a>
                                                            <p className="font-w600">
                                                                <a
                                                                    className="text-black"
                                                                    href="/react/demo/post-details"
                                                                >
                                                                    Visual Graphic for Presentation to Client
                                                                </a>
                                                            </p>
                                                            <div className="row justify-content-between">
                                                                <ul className="users col-6">
                                                                    <li>
                                                                        <img
                                                                            src="/react/demo/static/media/1.692b460fb58fc7fa629f.jpg"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="data:image/jpeg;base64,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OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSI3QzY4N0FFREY2MkY5NkQ2QTU0RjRCM0VFMjBENjEwQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQTdDMEJBMUQ4MzJFQjExQTk1MUFBNUYxM0I3MjMxNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSI3QzY4N0FFREY2MkY5NkQ2QTU0RjRCM0VFMjBENjEwQSIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iYzIiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTMwVDExOjE0OjQxKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0zMFQxMjoyMzoxMiswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0zMFQxMjoyMzoxMiswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkZBN0MwQkExRDgzMkVCMTFBOTUxQUE1RjEzQjcyMzE0IiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDEyOjIzOjEyKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+N0M2ODdBRURGNjJGOTZENkE1NEY0QjNFRTIwRDYxMEE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAhxJQ0NfUFJPRklMRQABAQAAAgxsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAXmNwcnQAAAFcAAAAC3d0cHQAAAFoAAAAFGJrcHQAAAF8AAAAFHJYWVoAAAGQAAAAFGdYWVoAAAGkAAAAFGJYWVoAAAG4AAAAFHJUUkMAAAHMAAAAQGdUUkMAAAHMAAAAQGJUUkMAAAHMAAAAQGRlc2MAAAAAAAAAA2MyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAASVgAAFhZWiAA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"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="data:image/jpeg;base64,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RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSIxRTIzN0RBNjJBMDNGRDc3OTgwNDFDRTU5NThGRDI4OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQjdDMEJBMUQ4MzJFQjExQTk1MUFBNUYxM0I3MjMxNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSIxRTIzN0RBNjJBMDNGRDc3OTgwNDFDRTU5NThGRDI4OSIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iYzIiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTMwVDExOjE0OjQ4KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0zMFQxMjoyMzo0NyswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0zMFQxMjoyMzo0NyswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkZCN0MwQkExRDgzMkVCMTFBOTUxQUE1RjEzQjcyMzE0IiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDEyOjIzOjQ3KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+MUUyMzdEQTYyQTAzRkQ3Nzk4MDQxQ0U1OTU4RkQyODk8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAhxJQ0NfUFJPRklMRQABAQAAAgxsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAXmNwcnQAAAFcAAAAC3d0cHQAAAFoAAAAFGJrcHQAAAF8AAAAFHJYWVoAAAGQAAAAFGdYWVoAAAGkAAAAFGJYWVoAAAG4AAAAFHJUUkMAAAHMAAAAQGdUUkMAAAHMAAAAQGJUUkMAAAHMAAAAQGRlc2MAAAAAAAAAA2MyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAASVgAAFhZWiAAAAAAAAD21gABAAAAANMtWFlaIAAAAAAAAAMWAAAD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"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="/react/demo/static/media/4.309a93e83fd24f62ca6b.jpg"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                </ul>
                                                                <div className="col-6 pl-0">
                                                                    <h6 className="fs-14">
                                                                        Progress
                                                                        <span className="pull-right font-w600">24%</span>
                                                                    </h6>
                                                                    <div className="progress" style={{ height: 7 }}>
                                                                        <div
                                                                            role="progressbar"
                                                                            className="progress-bar bg-bg-primary"
                                                                            aria-valuenow={24}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}
                                                                            style={{ width: "24%" }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-bottom pb-4 mb-4">
                                                            <a
                                                                className="btn btn-sm btn-secondary rounded-xl mb-2"
                                                                href="/react/demo/"
                                                            >
                                                                Digital Marketing
                                                            </a>
                                                            <p className="font-w600">
                                                                <a
                                                                    className="text-black"
                                                                    href="/react/demo/post-details"
                                                                >
                                                                    Build Database Design for Fasto Admin v2
                                                                </a>
                                                            </p>
                                                            <div className="row justify-content-between">
                                                                <ul className="users col-6">
                                                                    <li>
                                                                        <img
                                                                            src="/react/demo/static/media/5.ea72aae182be635ad433.jpg"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="/react/demo/static/media/6.a8a99557606d5dff8e8d.jpg"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="/react/demo/static/media/7.e302974bd18ff83d8135.jpg"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="data:image/jpeg;base64,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LmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJEQzFERDI0RURDQ0Q1NzY2ODVGOEY4OUY2QUVFN0RFOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMDdEMEJBMUQ4MzJFQjExQTk1MUFBNUYxM0I3MjMxNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJEQzFERDI0RURDQ0Q1NzY2ODVGOEY4OUY2QUVFN0RFOCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iYzIiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTMwVDExOjE1OjIyKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0zMFQxMjoyNTo1NSswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0zMFQxMjoyNTo1NSswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwN0QwQkExRDgzMkVCMTFBOTUxQUE1RjEzQjcyMzE0IiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDEyOjI1OjU1KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REMxREQyNEVEQ0NENTc2Njg1RjhGODlGNkFFRTdERTg8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAhxJQ0NfUFJPRklMRQABAQAAAgxsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAXmNwcnQAAAFcAAAAC3d0cHQAAAFoAAAAFGJrcHQAAAF8AAAAFHJYWVoAAAGQAAAAFGdYWVoAAAGkAAAAFGJYWVoAAAG4AAAAFHJUUkMAAAHMAAAAQGdUUkMAAAHMAAAAQGJUUkMAAAHMAAAAQGRlc2MAAAAAAAAAA2MyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAASVgAAFhZWiAAAAAAAAD21gABAAAAANMtWFlaIAAAAAAAAAMWAAADMwAAAqRYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9jdXJ2AAAAAAAAABoAAADLAckDYwWSCGsL9hA/FVEbNCHx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"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                </ul>
                                                                <div className="col-6 pl-0">
                                                                    <h6 className="fs-14">
                                                                        Progress
                                                                        <span className="pull-right font-w600">79%</span>
                                                                    </h6>
                                                                    <div className="progress" style={{ height: 7 }}>
                                                                        <div
                                                                            role="progressbar"
                                                                            className="progress-bar bg-bg-primary"
                                                                            aria-valuenow={79}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}
                                                                            style={{ width: "79%" }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-bottom pb-4 mb-4">
                                                            <a
                                                                className="btn btn-sm btn-warning rounded-xl mb-2"
                                                                href="/react/demo/"
                                                            >
                                                                Programmer
                                                            </a>
                                                            <p className="font-w600">
                                                                <a
                                                                    className="text-black"
                                                                    href="/react/demo/post-details"
                                                                >
                                                                    Make Promotional Ads for Instagram Fasto’s
                                                                </a>
                                                            </p>
                                                            <div className="row justify-content-between">
                                                                <ul className="users col-6">
                                                                    <li>
                                                                        <img
                                                                            src="data:image/jpeg;base64,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b3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJBMUIyOUFGMzI4MjZBMTE0N0NFQUUyOUY5NDg2NEY2RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTdEMEJBMUQ4MzJFQjExQTk1MUFBNUYxM0I3MjMxNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJBMUIyOUFGMzI4MjZBMTE0N0NFQUUyOUY5NDg2NEY2RCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iYzIiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTMwVDExOjE1OjI5KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0zMFQxMjoyNjoyMCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0zMFQxMjoyNjoyMCswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxN0QwQkExRDgzMkVCMTFBOTUxQUE1RjEzQjcyMzE0IiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDEyOjI2OjIwKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+QTFCMjlBRjMyODI2QTExNDdDRUFFMjlGOTQ4NjRGNkQ8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAhxJQ0NfUFJPRklMRQABAQAAAgxsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAXmNwcnQAAAFcAAAAC3d0cHQAAAFoAAAAFGJrcHQAAAF8AAAAFHJYWVoAAAGQAAAAFGdYWVoAAAGkAAAAFGJYWVoAAAG4AAAAFHJUUkMAAAHMAAAAQGdUUkMAAAHMAAAAQGJUUkMAAAHMAAAAQGRlc2MAAAAAAAAAA2MyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAASVgAAFhZWiAAAAAAAAD21gABAAAAANMtWFlaIAAAAAAAAAMWAAADMwAAAqRYWVogAAAAAAAAb6IA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"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="data:image/jpeg;base64,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Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iQjk3QzhEMTY2ODM1NTNDRkExRjE3MTlENEVFREY0NjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDI3RDBCQTFEODMyRUIxMUE5NTFBQTVGMTNCNzIzMTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQjk3QzhEMTY2ODM1NTNDRkExRjE3MTlENEVFREY0NjEiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9ImMyIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0xMS0zMFQxMToxNTozNSswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMTEtMzBUMTI6Mjc6NDIrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTEtMzBUMTI6Mjc6NDIrMDU6MzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjdEMEJBMUQ4MzJFQjExQTk1MUFBNUYxM0I3MjMxNCIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0zMFQxMjoyNzo0MiswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkI5N0M4RDE2NjgzNTUzQ0ZBMUYxNzE5RDRFRURGNDYxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD////uACFBZG9iZQBkQAAAAAEDABADAgMGAAAAAAAAAAAAAAAA/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQEBAQECAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wgARCAAjACMDAREAAhEBAxEB/8QAwAAAAgIDAAAAAAAAAAAAAAAACAkHCgQGCwEAAwEBAQEAAAAAAAAAAAAAAgMEBgUBABAAAQIEBAQFBQAAAAAAAAAAAwIEAQYHCBESEwUAFBUWITM0FwkiMiMlGBEAAAUBBwIFAgMJAAAAAAAAAgMEBQYBABESExQVBxYXISMlCBgiJDEyNkJDRGSENZVmSRIAAQIDBQQIBgMAAAAAAAAAARECADEDIUFRYRJxgaEy8JHB4SITMwSx8UJiskPRoiP/2gAMAwEBAhEDEQAAAK5c52xc5osMvjiHxH1sK37ZJGB20gLWYrRx9CD6FlFO4qFNHhy2rxVc9/W5l0vLui9oGbHUdcl1NHU5ll8L2pc3pkul7JQP/9oACAECAAEFAHBNBusGCkrhkViqGZOm7VE5obOgnDfbmy+HAIBRmHhuDYoxgcuyRQlykqBHKTT4KJJ2o2+ZTwOInBdFOZWUHkOMMxsuvuPqfDD/2gAIAQMAAQUACjOVJEKgtOKkfSrITO3SkQY7qpMDP3CeAGiQmBMzAyCLO1ZjSuLXRUVuMepDgS4iKo8YJZGhArcUHCvx54+YH7G2PLsPT+GP/9oACAEBAAEFAKCSKO5O7iV60st0lqYZWcsp/wBymgm9U07cn/3Fsip/LNu9BA/O7uMpu7rvk+vEpozsmuZmep1SvbesHP8Axy3b0dqjW2vdr9oFPZdq+7sP3qzxdxdsVD6c/wBAW+dWJV7ebXbw57ra/wBkliwmvkwbDVO3eiTW4edejU87qvf0+vUB53tW2rrnsJ8WXI/zb+n7x//aAAgBAgIGPwABieYQg6bILi+3bD2lwlZFN6zAtzlE3J5ON2vl2rwijQa/S4tWSmZkBBcfcFcES3ris15JcwobYqimR/m6X2m/cYnZpXj8FijWbVLnAoDel1uUuqNOoo0KqYfzGpupj3OKqDMyU55xVDnDWGklcBjCJ9WntgMvSzb84Hi8qoDtG3bhDH1vc1dLbkCHgF7I8LirgJzAmhzJtOSQqHk1/wBkgTl03w7bcq7o9vq1pq/Yujfpu4YxUVZnm7uGSRf6O6f4dsf/2gAIAQMCBj8AJcFaqmAgIAyhpa3xY4RUaRI98IjV8/D6tKrsS2KnuHtUByTRbMTxgBtAADNYpua0Na4LjFNzxZUai3KLvnC2qqcE60sXCKtJ1MBhCpcSLD1zjW5kyiLjw3whDX02gWBCQMhgL0ikWDw6ggEwcUiZ5V79sBzRbFrBUokbOMFlD2zNbrypRZ2rZnjBBARhNokTlkBxhFHNpn9qpDkx6TgIqLfy7717IrJokfTTXuXjfhDOWV3bnH6/WzWX58Ej/9oACAEBAQY/AJVJ5inFIuLeFXwK92SOZoFDe/zZW4mjMMeC7hFOCxJWggCoYAQS8ulL6X1rVkZEcRVpG5ASkQoCUbMdRAcnAICYJiFMSGpAUOAVKYg0w0urd4Vtx3Oo5FTk7szyiPnUkqJtAQc2jZZC1uZBxKxFlq0agsok0NDa1oMsAhUpW6tualcZSE1lvA3K86405Li2lRGUfuDuWnRfOWB1LQDAYiGyonVzULiQFAoFOoOUBBT663X7JF92+dmPbsLjoO7vxYwd3Mzdb9o6L9VwXZm5eXqrvG3LnOboiVcqxVl59dom5JQzNqhiCRniZU5qyknm8iT0bUiKJvBg0zgpyBZ5oBVKD9fghjEH4Hh7cxMKshIYrZuVmWeN6BtUnmZact1TRdq19TiwjEUWCoBmBLqEGKtuHJdAYkwNTByzGEExijg7xN5dROw1ShWmRDZ06Ne1MhhbiFGZUNF6kuosNQVpX8bcduvLrQ/NyH3rcCO/Ccqdl0RZYlF2vkRiRhdYsiUkMi5woQrkKZapPbDFx1cIgiTAOCIFAV1WCS6zrTsZq9jL3Lc+mtnx348HWuw/Za/B/afC/H5tuZ/bK/8ADscjbO88epZy7QBWjb36ATaUxoxuh86mlUziE8gxZPKhTyFcSalJqBWccGlDKFhHU2cDjoXd2lDsijcXgpLo3ksNX2SnbY3koaHVa2FCUmqfUBSpYPIbCaDFfTwtxilKe+FfcB2qiRbM78dxV4ZHmSNEOQqUdXB5jTAcAKuVt3HDwtrRYpbaGGIg5ijxLvpXidSxNrsZC3HmKFMMBSQgLeKWcdzZ0o5vLHPWRsUmgb36OJiUSgbokFgMGmGZUGKhggW3nqFk0PTPy0yuh3XHmdF9CbbfnZms6h8/Yb8rL8M7B9No7zgqSrz2lK6OkZmjS3KKJVLjD3xMsYZM2IzsN1FxLIuKVJKCuDqCS61rdfW1BAirX7tOL3uOLVKtoq8oIa6gYngihqBCeokBKslWkUgGCqvRgErIAEVLqDpSyyA8IeyP2itr5PiTWctW9cocjySVcVsqlAamcHOLOLcjWKWJqNSDzHREEsolzNKoG6lR0pbS1aWlcVxZIZWzkyKNpzE0KkfIj0e4xp8lkObzTDTGuD8eRIlcibCTBmGmPK5SbQdSiC7bVujdkd6/jH+oGzJ1PZrrToPMzsjddy/hr7s/6Med4Wn2HbMvrAX5dVpMy+uDaM37vX34rv3WnxYvDBaE5WtyNja9d1VsHb/L0Rf6i1vqOvx/ht3m34v2be5rp7tdqujpNf8ADHt38r9FtavdOhe6HpG86TFm3eoabHt/3OC0LyNg0fb1JqO1HUWfl6VPmazcfXd+yLtdpvNw5+DzcVv+Ueo+aX+87pn9if8AGfO/bP6bZ/5+3//Z"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="data:image/jpeg;base64,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ZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJCRTdEMjUyQTlEMDU1QkI4RDlFMjMyQUI5MjM5QUYzMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDREE0NDM2NEQ5MzJFQjExQTk1MUFBNUYxM0I3MjMxNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJCRTdEMjUyQTlEMDU1QkI4RDlFMjMyQUI5MjM5QUYzMCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iYzIiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTMwVDExOjE1OjQxKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0zMFQxMjoyODowMyswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0zMFQxMjoyODowMyswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEQTQ0MzY0RDkzMkVCMTFBOTUxQUE1RjEzQjcyMzE0IiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDEyOjI4OjAzKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+QkU3RDI1MkE5RDA1NUJCOEQ5RTIzMkFCOTIzOUFGMzA8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAhxJQ0NfUFJPRklMRQABAQAAAgxsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAXmNwcnQAAAFcAAAAC3d0cHQAAAFoAAAAFGJrcHQAAAF8AAAAFHJYWVoAAAGQAAAAFGdYWVoAAAGkAAAAFGJYWVoAAAG4AAAAFHJUUkMAAAHMAAAAQGdUUkMAAAHMAAAAQGJUUkMAAAHMAAAAQGRlc2MAAAAAAAAAA2MyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAASVgAAFhZWiAAAAAAAAD21gAB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"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="data:image/jpeg;base64,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dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iQjhEQ0FBRkE4QzY1NENDMzA1OUNEMDNEMjUxMEQxNzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0VBNDQzNjREOTMyRUIxMUE5NTFBQTVGMTNCNzIzMTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQjhEQ0FBRkE4QzY1NENDMzA1OUNEMDNEMjUxMEQxNzIiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9ImMyIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0xMS0zMFQxMToxNTo0OCswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMTEtMzBUMTI6Mjg6MjUrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTEtMzBUMTI6Mjg6MjUrMDU6MzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRUE0NDM2NEQ5MzJFQjExQTk1MUFBNUYxM0I3MjMxNCIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0zMFQxMjoyODoyNSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkI4RENBQUZBOEM2NTRDQzMwNTlDRDAzRDI1MTBEMTcyPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MF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"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                </ul>
                                                                <div className="col-6 pl-0">
                                                                    <h6 className="fs-14">
                                                                        Progress
                                                                        <span className="pull-right font-w600">36%</span>
                                                                    </h6>
                                                                    <div className="progress" style={{ height: 7 }}>
                                                                        <div
                                                                            role="progressbar"
                                                                            className="progress-bar bg-bg-primary"
                                                                            aria-valuenow={36}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}
                                                                            style={{ width: "36%" }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-bottom pb-4 mb-4">
                                                            <a
                                                                className="btn btn-sm btn-secondary rounded-xl mb-2"
                                                                href="/react/demo/"
                                                            >
                                                                Digital Marketing
                                                            </a>
                                                            <p className="font-w600">
                                                                <a
                                                                    className="text-black"
                                                                    href="/react/demo/post-details"
                                                                >
                                                                    Build Database Design for Fasto Admin v2
                                                                </a>
                                                            </p>
                                                            <div className="row justify-content-between">
                                                                <ul className="users col-6">
                                                                    <li>
                                                                        <img
                                                                            src="/react/demo/static/media/5.ea72aae182be635ad433.jpg"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="/react/demo/static/media/6.a8a99557606d5dff8e8d.jpg"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="/react/demo/static/media/7.e302974bd18ff83d8135.jpg"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="data:image/jpeg;base64,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LmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJEQzFERDI0RURDQ0Q1NzY2ODVGOEY4OUY2QUVFN0RFOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMDdEMEJBMUQ4MzJFQjExQTk1MUFBNUYxM0I3MjMxNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJEQzFERDI0RURDQ0Q1NzY2ODVGOEY4OUY2QUVFN0RFOCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iYzIiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTMwVDExOjE1OjIyKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0zMFQxMjoyNTo1NSswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0zMFQxMjoyNTo1NSswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwN0QwQkExRDgzMkVCMTFBOTUxQUE1RjEzQjcyMzE0IiBzdEV2dDp3aGVuPSIyMDIwLTExLTMwVDEyOjI1OjU1KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+REMxREQyNEVEQ0NENTc2Njg1RjhGODlGNkFFRTdERTg8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAhxJQ0NfUFJPRklMRQABAQAAAgxsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAXmNwcnQAAAFcAAAAC3d0cHQAAAFoAAAAFGJrcHQAAAF8AAAAFHJYWVoAAAGQAAAAFGdYWVoAAAGkAAAAFGJYWVoAAAG4AAAAFHJUUkMAAAHMAAAAQGdUUkMAAAHMAAAAQGJUUkMAAAHMAAAAQGRlc2MAAAAAAAAAA2MyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAASVgAAFhZWiAAAAAAAAD21gABAAAAANMtWFlaIAAAAAAAAAMWAAADMwAAAqRYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9jdXJ2AAAAAAAAABoAAADLAckDYwWSCGsL9hA/FVEbNCHx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"
                                                                            alt=""
                                                                        />
                                                                    </li>
                                                                </ul>
                                                                <div className="col-6 pl-0">
                                                                    <h6 className="fs-14">
                                                                        Progress
                                                                        <span className="pull-right font-w600">79%</span>
                                                                    </h6>
                                                                    <div className="progress" style={{ height: 7 }}>
                                                                        <div
                                                                            role="progressbar"
                                                                            className="progress-bar bg-bg-primary"
                                                                            aria-valuenow={79}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}
                                                                            style={{ width: "79%" }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="ps__rail-x"
                                                        style={{ width: 631, left: 0, bottom: 0 }}
                                                    >
                                                        <div
                                                            className="ps__thumb-x"
                                                            tabIndex={0}
                                                            style={{ left: 0, width: 0 }}
                                                        />
                                                    </div>
                                                    <div
                                                        className="ps__rail-y"
                                                        style={{ top: 0, right: 0, height: 620 }}
                                                    >
                                                        <div
                                                            className="ps__thumb-y"
                                                            tabIndex={0}
                                                            style={{ top: 0, height: 537 }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <a
                                                        className="btn d-block btn-primary light dlab-load-more"
                                                        rel="ajax/recent-activities.	"
                                                        id="RecentActivities"
                                                        href="/react/demo/"
                                                    >
                                                        <strong>26</strong> Tasks More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card">
                                                <div className="card-header shadow-sm">
                                                    <div className="mr-2">
                                                        <h4 className="fs-20 mb-0 font-w600 text-black">
                                                            Upcoming Projects
                                                        </h4>
                                                    </div>
                                                    <a className="plus-icon" href="/react/demo/contacts">
                                                        <i className="fa fa-plus" aria-hidden="true" />
                                                    </a>
                                                </div>
                                                <div
                                                    id="upcomingprojects"
                                                    className="scrollbar-container card-body height620 dlab-scroll ps"
                                                >
                                                    <div className="">
                                                        <div className="border-bottom pb-4 mb-4">
                      <span className="fs-14 text-primary mb-2 d-block font-w500">
                        Yoast Esac
                      </span>
                                                            <div className="d-flex">
                                                                <p className="font-w600 mr-auto mb-2">
                                                                    <a
                                                                        className="text-black"
                                                                        href="/react/demo/post-details"
                                                                    >
                                                                        Redesign Kripton Mobile App
                                                                    </a>
                                                                </p>
                                                                <div className="dropdown mb-3 dropdown">
                                                                    <button
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        type="button"
                                                                        className="table-dropdown icon-false p-0 dropdown-toggle btn btn-true"
                                                                    >
                                                                        <a
                                                                            data-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                            href="/react/demo/"
                                                                        >
                                                                            <svg
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <i
                                                                    className="fa fa-calendar-o mr-3"
                                                                    aria-hidden="true"
                                                                />
                                                                Created on Sep 8th, 2020
                                                            </div>
                                                            <div className="media align-items-center">
                                                                <div className="d-inline-block mr-3 position-relative donut-chart-sale">
                                                                    <svg className="peity" height={50} width={50}>
                                                                        <path
                                                                            d="M 25 0 A 25 25 0 1 1 7.322330470336315 42.67766952966369 L 3.786796564403577 46.21320343559643 A 30 30 0 1 0 25.000000000000004 -5"
                                                                            data-value={5}
                                                                            fill="rgb(41, 83, 232)"
                                                                        />
                                                                        <path
                                                                            d="M 7.322330470336315 42.67766952966369 A 25 25 0 0 1 24.999999999999996 0 L 24.999999999999993 -5 A 30 30 0 0 0 3.786796564403577 46.21320343559643"
                                                                            data-value={3}
                                                                            fill="rgba(200, 200, 200, 0.5)"
                                                                        />
                                                                    </svg>
                                                                    <small className="text-primary fs-30">
                                                                        <i className="fa fa-bolt" aria-hidden="true" />
                                                                    </small>
                                                                </div>
                                                                <div className="media-body">
                                                                    <p className="mb-1">Deadline</p>
                                                                    <span className="text-black font-w600">
                            Tuesday, Sep 29th 2020
                          </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-bottom pb-4 mb-4">
                      <span className="fs-14 text-primary mb-2 d-block font-w500">
                        Yoast Esac
                      </span>
                                                            <div className="d-flex">
                                                                <p className="font-w600 mr-auto mb-2">
                                                                    <a
                                                                        className="text-black"
                                                                        href="/react/demo/post-details"
                                                                    >
                                                                        Build Branding Persona for Etza.id
                                                                    </a>
                                                                </p>
                                                                <div className="dropdown mb-3 dropdown">
                                                                    <button
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        type="button"
                                                                        className="table-dropdown icon-false p-0 dropdown-toggle btn btn-true"
                                                                    >
                                                                        <a
                                                                            data-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                            href="/react/demo/"
                                                                        >
                                                                            <svg
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <i
                                                                    className="fa fa-calendar-o mr-3"
                                                                    aria-hidden="true"
                                                                />
                                                                Created on Sep 8th, 2020
                                                            </div>
                                                            <div className="media align-items-center">
                                                                <div className="d-inline-block mr-3 position-relative donut-chart-sale">
                                                                    <svg className="peity" height={50} width={50}>
                                                                        <path
                                                                            d="M 25 0 A 25 25 0 0 1 50 25 L 55 25 A 30 30 0 0 0 25.000000000000004 -5"
                                                                            data-="true"
                                                                            value={2}
                                                                            fill="rgb(41, 83, 232)"
                                                                        />
                                                                        <path
                                                                            d="M 50 25 A 25 25 0 1 1 24.999999999999996 0 L 24.999999999999993 -5 A 30 30 0 1 0 55 25"
                                                                            data-value={6}
                                                                            fill="rgba(200, 200, 200, 0.5)"
                                                                        />
                                                                    </svg>
                                                                    <small className="text-primary fs-30">
                                                                        <i className="fa fa-bolt" aria-hidden="true" />
                                                                    </small>
                                                                </div>
                                                                <div className="media-body">
                                                                    <p className="mb-1">Deadline</p>
                                                                    <span className="text-black font-w600">
                            Tuesday, Sep 29th 2020
                          </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pb-4">
                      <span className="fs-14 text-primary mb-2 d-block font-w500">
                        Yoast Esac
                      </span>
                                                            <div className="d-flex">
                                                                <p className="font-w600 mr-auto mb-2">
                                                                    <a
                                                                        className="text-black"
                                                                        href="/react/demo/post-details"
                                                                    >
                                                                        Manage SEO for Eclan Company Profile
                                                                    </a>
                                                                </p>
                                                                <div className="dropdown mb-3 dropdown">
                                                                    <button
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        type="button"
                                                                        className="table-dropdown icon-false p-0 dropdown-toggle btn btn-true"
                                                                    >
                                                                        <a
                                                                            data-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                            href="/react/demo/"
                                                                        >
                                                                            <svg
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                                                                    stroke="#575757"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <i
                                                                    className="fa fa-calendar-o mr-3"
                                                                    aria-hidden="true"
                                                                />
                                                                Created on Sep 8th, 2020
                                                            </div>
                                                            <div className="media align-items-center">
                                                                <div className="d-inline-block mr-3 position-relative donut-chart-sale">
                                                                    <svg className="peity" height={50} width={50}>
                                                                        <path
                                                                            d="M 25 0 A 25 25 0 1 1 7.322330470336308 7.322330470336315 L 3.78679656440357 3.786796564403577 A 30 30 0 1 0 25.000000000000004 -5"
                                                                            data-value={7}
                                                                            fill="rgb(41, 83, 232)"
                                                                        />
                                                                        <path
                                                                            d="M 7.322330470336308 7.322330470336315 A 25 25 0 0 1 24.999999999999996 0 L 24.999999999999993 -5 A 30 30 0 0 0 3.78679656440357 3.786796564403577"
                                                                            data-value={1}
                                                                            fill="rgba(200, 200, 200, 0.5)"
                                                                        />
                                                                    </svg>
                                                                    <small className="text-primary fs-30">
                                                                        <i className="fa fa-bolt" aria-hidden="true" />
                                                                    </small>
                                                                </div>
                                                                <div className="media-body">
                                                                    <p className="mb-1">Deadline</p>
                                                                    <span className="text-black font-w600">
                            Tuesday, Sep 29th 2020
                          </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                                        <div
                                                            className="ps__thumb-x"
                                                            tabIndex={0}
                                                            style={{ left: 0, width: 0 }}
                                                        />
                                                    </div>
                                                    <div
                                                        className="ps__rail-y"
                                                        style={{ top: 0, right: 0, height: 718 }}
                                                    >
                                                        <div
                                                            className="ps__thumb-y"
                                                            tabIndex={0}
                                                            style={{ top: 0, height: 0 }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

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

export default withRouter(EarningInformation);