import React from 'react';
import {withRouter} from "react-router-dom";
import '../../css/main.6120d571.css';
import UrlArgsBundle from "../../core/url_args_bundle";
import {ACTIVITY_TAG} from "../../utils/Constants";
import '../../App.css'
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem:'',
            
        }
    }


    handleItemClick = (itemName) => {
        this.setState({ activeItem: itemName });
      };


      componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
      } 


      handleBeforeUnload = () => {
      
        localStorage.clear();
      };

    
    render() {
        const { activeItem } = this.state;

        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"Navbar"}>
            <div className="dlabnav">
                <div className="scrollbar-container dlabnav-scroll ps">
                    <div className="mm-wrapper">
                        <ul className="metismenu">
                            <li className="mm-active"
                               
                            >
                                <a

                                
                                  
                                onClick={()=>{
                                


                                       

                                    urlArgsBundle.setActivityTag(ACTIVITY_TAG.HOME)
                                    this.props.history.push(urlArgsBundle.getArgsAsUrlParams())

                                    this.handleItemClick(localStorage.setItem('activeNav','home'))

                                }}

                                
                                
                                
                                className={localStorage.getItem('activeNav')==='home'?'activeNavbar':'ai-icon'} href="">
                                    <i className={localStorage.getItem('activeNav')==='home'?'activeNavbar fa-solid fa-house':'fa-solid fa-house'}  />
                                    <span className={localStorage.getItem('activeNav')==='home'?'activeNavbar':'nav-text'}>Dashboard</span>
                                </a>
                            </li>
                            <li className=""
                                >
                                <a
                                
                                onClick={()=>{
                                    urlArgsBundle.setActivityTag(ACTIVITY_TAG.CLIENTS)
                                    this.props.history.push(urlArgsBundle.getArgsAsUrlParams())

                                    this.handleItemClick(localStorage.setItem('activeNav','clients'))
                                }}
                                className={localStorage.getItem('activeNav')==='clients'?'activeNavbar':'ai-icon'} href="">

<i className={localStorage.getItem('activeNav')==='clients'?'activeNavbar fa-solid fa-users':'fa-solid fa-users'}  />
                                    
                                    <span className={localStorage.getItem('activeNav')==='clients'?'activeNavbar':'nav-text'}>Clients</span>
                                </a>
                            </li>
                            <li className="" onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.SUPPORT_SYSTEM)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())

                                this.handleItemClick(localStorage.setItem('activeNav','support'))
                            }}

                            >
                                <a   className={localStorage.getItem('activeNav')==='support'?'activeNavbar':'ai-icon'} href="">
                                   


                                    <i className={localStorage.getItem('activeNav')==='support'?'activeNavbar fa-solid fa-headset':'fa-solid fa-headset'}  />
                                    <span className={localStorage.getItem('activeNav')==='support'?'activeNavbar':'nav-text'}> Support System</span>
                                </a>
                            </li>
                            <li className="" onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.CAPTAINS)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                
                                this.handleItemClick(localStorage.setItem('activeNav','captains'))
                            }}>
                                <a className={localStorage.getItem('activeNav')==='captains'?'activeNavbar':'ai-icon'} href="">
                                  

                                    <i className={localStorage.getItem('activeNav')==='captains'?'activeNavbar fa-solid fa-ship':'fa-solid fa-ship'}  />
                                    <span  className={localStorage.getItem('activeNav')==='captains'?'activeNavbar':'nav-text'}> Captains</span>
                                </a>
                            </li>
                            {/* <li className="" onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.CITIES)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                            }}>
                                <a className="ai-icon" href="">
                                <i className="fa-solid fa-building"/>
                                    <span className="nav-text"> Cities </span>
                                </a>
                            </li> */}
                            <li className="" onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.VEHICLE_BRAND)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                
                                this.handleItemClick(localStorage.setItem('activeNav','brand'))
                            }}>
                                <a className={localStorage.getItem('activeNav')==='brand'?'activeNavbar':'ai-icon'} href="">
                              

                                <i className={localStorage.getItem('activeNav')==='brand'?'activeNavbar fa-brands fa-staylinked':'fa-brands fa-staylinked'}  />
                                    <span  className={localStorage.getItem('activeNav')==='brand'?'activeNavbar':'nav-text'}> Vehicle Brand</span>
                                </a>
                            </li>
                            <li className="" onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.VEHICLE_MODEL)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                
                                this.handleItemClick(localStorage.setItem('activeNav','model'))
                            }}>
                                <a   className={localStorage.getItem('activeNav')==='model'?'activeNavbar':'ai-icon'} href="">
                                  
                                   <i className={localStorage.getItem('activeNav')==='model'?'activeNavbar fa-solid fa-car':'fa-solid fa-car'}  />
                                   <span 
                                    className={localStorage.getItem('activeNav')==='model'?'activeNavbar':'nav-text'}
                                   > Vehicle Model</span>
                                </a>
                            </li>
                            <li className="" onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.VEHICLE_COLOR)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                
                                this.handleItemClick(localStorage.setItem('activeNav','colors'))
                            }}>
                                <a className={localStorage.getItem('activeNav')==='colors'?'activeNavbar':'ai-icon'} href="">
                             

                                <i className={localStorage.getItem('activeNav')==='colors'?'activeNavbar fa-solid fa-palette':'fa-solid fa-palette'}  />
                                    <span 
                                     className={localStorage.getItem('activeNav')==='colors'?'activeNavbar':'nav-text'}
                                    > Vehicle Color</span>
                                </a>
                            </li>
                            <li className="" onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.RIDE_CATEGORIES)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                this.handleItemClick(localStorage.setItem('activeNav','ride_categories'))
                            }}>
                                <a   className={localStorage.getItem('activeNav')==='ride_categories'?'activeNavbar':'ai-icon'}  href="">
                                    
                                    <i className={localStorage.getItem('activeNav')==='ride_categories'?'activeNavbar fa-solid fa-grip':'fa-solid fa-grip'}  />
                                    <span  className={localStorage.getItem('activeNav')==='ride_categories'?'activeNavbar':'nav-text'}> Ride Categories</span>
                                </a>
                            </li>
                            <li className=""
                                onClick={()=>{
                                    urlArgsBundle.setActivityTag(ACTIVITY_TAG.TRIPS)
                                    this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                    this.handleItemClick(localStorage.setItem('activeNav','trips'))
                                }}
                            >
                                <a   className={localStorage.getItem('activeNav')==='trips'?'activeNavbar':'ai-icon'}  href="">
                                  

                                    <i className={localStorage.getItem('activeNav')==='trips'?'activeNavbar fa-solid fa-bus':'fa-solid fa-bus'}  />
                                    <span  className={localStorage.getItem('activeNav')==='trips'?'activeNavbar':'nav-text'}> Trips</span>
                                </a>
                            </li>
                            <li className=""
                                onClick={()=>{
                                    urlArgsBundle.setActivityTag(ACTIVITY_TAG.CANCELLED_TRIPS)
                                    this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                    this.handleItemClick(localStorage.setItem('activeNav','cancelled_trips'))
                                }}
                            >
                                <a   className={localStorage.getItem('activeNav')==='cancelled_trips'?'activeNavbar':'ai-icon'}  href="">
                                  

                                    <i className={localStorage.getItem('activeNav')==='cancelled_trips'?'activeNavbar fa-solid fa-bus':'fa-solid fa-bus'}  />
                                    <span 
                                    
                                    className={localStorage.getItem('activeNav')==='cancelled_trips'?'activeNavbar':'nav-text'}
                                    > Cancelled Trips</span>
                                </a>
                            </li>
                            {/* <li className="" 
                             
                             onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.PAYMENT)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                            }}
                            >
                                <a className="ai-icon" href="">
                                    <i className="fa-solid fa-sack-dollar"/>
                                    <span className="nav-text"> Payment</span>
                                </a>
                            </li> */}
                            {/* <li
                            
                            onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.EARNING_INFORMATION)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                            }}
                            className="">
                                <a className="ai-icon" href="">
                                    <i className="fa-solid fa-dollar-sign"/>
                                    <span className="nav-text"> Earning Information </span>
                                </a>
                            </li> */}
                            <li
                             onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.REVIEWS)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                this.handleItemClick(localStorage.setItem('activeNav','reviews'))
                            }}
                            
                            className="">
                                <a className={localStorage.getItem('activeNav')==='reviews'?'activeNavbar':'ai-icon'} href="">
                                

                                    
                                    <i className={localStorage.getItem('activeNav')==='reviews'?'activeNavbar fa-solid fa-comment-dots':'fa-solid fa-comment-dots'}  />
                                    <span  className={localStorage.getItem('activeNav')==='reviews'?'activeNavbar':'nav-text'}> Reviews</span>
                                </a>
                            </li>
                            <li
                             onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.FAQ)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())

                                this.handleItemClick(localStorage.setItem('activeNav','faq'))
                            }}
                            
                            className="">
                                <a className={localStorage.getItem('activeNav')==='faq'?'activeNavbar':'ai-icon'} href="">
                                    

                                    <i className={localStorage.getItem('activeNav')==='faq'?'activeNavbar fa-solid fa-comment-dots':'fa-solid fa-comment-dots'}  />
                                    <span 
                                       className={localStorage.getItem('activeNav')==='faq'?'activeNavbar':'nav-text'}
                                    > Faq</span>
                                </a>
                            </li>
                            {/* <li
                            
                            onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.TRANSACTION)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                            }}
                            className="">
                                <a className="ai-icon" href="">
                                    <i className="fa-solid fa-money-bill-transfer"/>
                                    <span className="nav-text"> Transaction</span>
                                </a>
                            </li> */}
                            <li
                            
                            onClick={()=>{
                                urlArgsBundle.setActivityTag(ACTIVITY_TAG.NOTIFICATIONS)
                                this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                this.handleItemClick(localStorage.setItem('activeNav','notifications'))
                            }}
                            className="">
                                <a className={localStorage.getItem('activeNav')==='notifications'?'activeNavbar':'ai-icon'} href="">
                                

                                    
                                    <i className={localStorage.getItem('activeNav')==='notifications'?'activeNavbar fa-solid fa-bell':'fa-solid fa-bell'}  />
                                    <span 
                                       className={localStorage.getItem('activeNav')==='notifications'?'activeNavbar':'nav-text'}
                                    > Notifications</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="copyright">
                        <p>
                            <strong>Vheelo  Dashboard</strong> © 2022 All Rights Reserved
                        </p>
                        <p>
                            Made with <span className="heart"/> by Wolf software solution PVT LTD
                        </p>
                    </div>
                    <div className="ps__rail-x" style={{left: 0, bottom: 0}}>
                        <div
                            className="ps__thumb-x"
                            tabIndex={0}
                            style={{left: 0, width: 0}}
                        />
                    </div>
                    <div className="ps__rail-y" style={{top: 0, right: 0, height: 2975}}>
                        <div
                            className="ps__thumb-y"
                            tabIndex={0}
                            style={{top: 0, height: 0}}
                        />
                    </div>
                </div>
            </div>
        </div>

    }
}

export default withRouter(Sidebar);