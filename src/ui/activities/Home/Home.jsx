import React from 'react';
import '../../../css/main.6120d571.css';
import '../../../components/chatapp/chatapp.css';
import    '../../../components/chatapp/Chatapp';
class Home extends React.Component {
     
    render() {
      
        return <div className={"login-activity"}>

                <div id="main-wrapper" className="show"> 
                        <div className="container-fluid p-5 ">
                           
                            <div className="row   main_dashboard ">
                                <div className="col-xl-12 p-0">
                                    <div className="row">
                                        <div className="col-sm-3 all_col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning Point To Point</span>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-star" style={{color:'#00B106',fontSize:'36px'}} ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 all_col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning for Hourly Rental</span>
                                                        </div>
                                                       
                                                        <i class="fa-solid fa-user-large" style={{color:'#00B106',fontSize:'36px'}}  ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 all_col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning For City To City</span>
                                                        </div>
                                                        
                                                      <i class="fa fa-bars-progress"     
                                                        style={{color:'#00B106',fontSize:'36px'}}  ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 all_col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">12</h2>
                                                            <span className="fs-14">Unread Messages</span>
                                                        </div>
                                                       
                                                        <i class="fa-solid fa-message"  
                                                        
                                                        style={{color:'#00B106',fontSize:'36px'}} 
                                                        ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 all_col">
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
                                                                                width={450}
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
                                        <div className="col-xl-6 col-xxl- col-md-12 col-sm-12 all_col">
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
                                <div className="col-xl-6 all_col">
                                    <div className="row">
                                       
                                   
                                       
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
    }
}

export default Home;