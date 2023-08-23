import React, { useState, useEffect } from 'react';
import '../../css/main.6120d571.css';
import '../../App.css';
import { Link } from 'react-router-dom';

function Sidebar({width,display}) {
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.clear();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
        localStorage.setItem('activeNav', itemName);
    };

    return (
        <div className={"Navbar"} id='Sidebar' style={{width:width,display: display}}>
           
<div className="dlabnav" >
<div className="scrollbar-container dlabnav-scroll ps">
    <div className="mm-wrapper">
        <ul className="metismenu">
            <li className="mm-active"

            >
                <Link
                    to="/home"


                    onClick={() => {






                        handleItemClick(localStorage.setItem('activeNav', 'home'))

                    }}




                    className={localStorage.getItem('activeNav') === 'home' ? 'activeNavbar' : 'ai-icon'} href="">
                    <i className={localStorage.getItem('activeNav') === 'home' ? 'activeNavbar fa-solid fa-house' : 'fa-solid fa-house'} />
                    <span className={localStorage.getItem('activeNav') === 'home' ? 'activeNavbar' : 'nav-text'}>Dashboard</span>
                </Link>
            </li>
            <li className=""
            >
                <Link

                    to='/clients'

                    onClick={() => {

                    handleItemClick(localStorage.setItem('activeNav', 'clients'))
                    }}
                    className={localStorage.getItem('activeNav') === 'clients' ? 'activeNavbar' : 'ai-icon'} href="">

                    <i className={localStorage.getItem('activeNav') === 'clients' ? 'activeNavbar fa-solid fa-users' : 'fa-solid fa-users'} />

                    <span className={localStorage.getItem('activeNav') === 'clients' ? 'activeNavbar' : 'nav-text'}>Clients</span>
                </Link>
            </li>
            <li className="" onClick={() => {


            handleItemClick(localStorage.setItem('activeNav', 'support'))
            }}

            >
                <Link to="/supportSystem" className={localStorage.getItem('activeNav') === 'support' ? 'activeNavbar' : 'ai-icon'} href="">



                    <i className={localStorage.getItem('activeNav') === 'support' ? 'activeNavbar fa-solid fa-headset' : 'fa-solid fa-headset'} />
                    <span className={localStorage.getItem('activeNav') === 'support' ? 'activeNavbar' : 'nav-text'}> Support System</span>
                </Link>
            </li>
            <li className="" onClick={() => {


            handleItemClick(localStorage.setItem('activeNav', 'captains'))
            }}>
                <Link to={'/captains'} className={localStorage.getItem('activeNav') === 'captains' ? 'activeNavbar' : 'ai-icon'} href="">


                    <i className={localStorage.getItem('activeNav') === 'captains' ? 'activeNavbar fa-solid fa-ship' : 'fa-solid fa-ship'} />
                    <span className={localStorage.getItem('activeNav') === 'captains' ? 'activeNavbar' : 'nav-text'}> Captains</span>
                </Link>
            </li>

            <li className="" onClick={() => {

                handleItemClick(localStorage.setItem('activeNav', 'brand'))
            }}>
                <Link to='/vehicleBrand' className={localStorage.getItem('activeNav') === 'brand' ? 'activeNavbar' : 'ai-icon'} href="">


                    <i className={localStorage.getItem('activeNav') === 'brand' ? 'activeNavbar fa-brands fa-staylinked' : 'fa-brands fa-staylinked'} />
                    <span className={localStorage.getItem('activeNav') === 'brand' ? 'activeNavbar' : 'nav-text'}> Vehicle Brand</span>
                </Link>
            </li>
            <li className="" onClick={() => {


            handleItemClick(localStorage.setItem('activeNav', 'model'))
            }}>
                <Link to={'/vehicleModel'} className={localStorage.getItem('activeNav') === 'model' ? 'activeNavbar' : 'ai-icon'} href="">

                    <i className={localStorage.getItem('activeNav') === 'model' ? 'activeNavbar fa-solid fa-car' : 'fa-solid fa-car'} />
                    <span
                        className={localStorage.getItem('activeNav') === 'model' ? 'activeNavbar' : 'nav-text'}
                    > Vehicle Model</span>
                </Link>
            </li>
            <li className="" onClick={() => {

            handleItemClick(localStorage.setItem('activeNav', 'colors'))
            }}>
                <Link to={'/vehicleColor'} className={localStorage.getItem('activeNav') === 'colors' ? 'activeNavbar' : 'ai-icon'} href="">


                    <i className={localStorage.getItem('activeNav') === 'colors' ? 'activeNavbar fa-solid fa-palette' : 'fa-solid fa-palette'} />
                    <span
                        className={localStorage.getItem('activeNav') === 'colors' ? 'activeNavbar' : 'nav-text'}
                    > Vehicle Color</span>
                </Link>
            </li>
            <li className="" onClick={() => {

            handleItemClick(localStorage.setItem('activeNav', 'ride_categories'))
            }}>
                <Link to="/rideCategories" className={localStorage.getItem('activeNav') === 'ride_categories' ? 'activeNavbar' : 'ai-icon'} href="">

                    <i className={localStorage.getItem('activeNav') === 'ride_categories' ? 'activeNavbar fa-solid fa-grip' : 'fa-solid fa-grip'} />
                    <span className={localStorage.getItem('activeNav') === 'ride_categories' ? 'activeNavbar' : 'nav-text'}> Ride Categories</span>
                </Link>
            </li>
            <li className=""
                onClick={() => {

                    handleItemClick(localStorage.setItem('activeNav', 'trips'))
                }}
            >
                <Link to='/trips' className={localStorage.getItem('activeNav') === 'trips' ? 'activeNavbar' : 'ai-icon'} href="">


                    <i className={localStorage.getItem('activeNav') === 'trips' ? 'activeNavbar fa-solid fa-bus' : 'fa-solid fa-bus'} />
                    <span className={localStorage.getItem('activeNav') === 'trips' ? 'activeNavbar' : 'nav-text'}> Trips</span>
                </Link>
            </li>
            <li className=""
                onClick={() => {

                    handleItemClick(localStorage.setItem('activeNav', 'cancelled_trips'))
                }}
            >
                <Link to='/cancelledTrips' className={localStorage.getItem('activeNav') === 'cancelled_trips' ? 'activeNavbar' : 'ai-icon'} href="">


                    <i className={localStorage.getItem('activeNav') === 'cancelled_trips' ? 'activeNavbar fa-solid fa-bus' : 'fa-solid fa-bus'} />
                    <span

                        className={localStorage.getItem('activeNav') === 'cancelled_trips' ? 'activeNavbar' : 'nav-text'}
                    > Cancelled Trips</span>
                </Link>
            </li>

            <li
                onClick={() => {


                    handleItemClick(localStorage.setItem('activeNav', 'reviews'))
                }}

                className="">
                <Link to={'/reviews'} className={localStorage.getItem('activeNav') === 'reviews' ? 'activeNavbar' : 'ai-icon'} href="">



                    <i className={localStorage.getItem('activeNav') === 'reviews' ? 'activeNavbar fa-solid fa-comment-dots' : 'fa-solid fa-comment-dots'} />
                    <span className={localStorage.getItem('activeNav') === 'reviews' ? 'activeNavbar' : 'nav-text'}> Reviews</span>
                </Link>
            </li>
            <li
                onClick={() => {


                    handleItemClick(localStorage.setItem('activeNav', 'faq'))
                }}

                className="">
                <Link to={'/faq'} className={localStorage.getItem('activeNav') === 'faq' ? 'activeNavbar' : 'ai-icon'} href="">


                    <i className={localStorage.getItem('activeNav') === 'faq' ? 'activeNavbar fa-solid fa-comment-dots' : 'fa-solid fa-comment-dots'} />
                    <span
                        className={localStorage.getItem('activeNav') === 'faq' ? 'activeNavbar' : 'nav-text'}
                    > Faq</span>
                </Link>
            </li>

            <li

                onClick={() => {

                    handleItemClick(localStorage.setItem('activeNav', 'notifications'))
                }}
                className="">
                <Link className={localStorage.getItem('activeNav') === 'notifications' ? 'activeNavbar' : 'ai-icon'} to="/notifications">



                    <i className={localStorage.getItem('activeNav') === 'notifications' ? 'activeNavbar fa-solid fa-bell' : 'fa-solid fa-bell'} />
                    <span
                        className={localStorage.getItem('activeNav') === 'notifications' ? 'activeNavbar' : 'nav-text'}
                    > Notifications</span>
                </Link>
            </li>

        </ul>
    </div>
    <div className="copyright">
        <p>
            <strong>Vheelo  Dashboard</strong> © 2022 All Rights Reserved
        </p>
        <p>
            Made with <span className="heart" /> by Wolf software solution PVT LTD
        </p>
    </div>
    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
            className="ps__thumb-x"
            tabIndex={0}
            style={{ left: 0, width: 0 }}
        />
    </div>
    <div className="ps__rail-y" style={{ top: 0, right: 0, height: 2975 }}>
        <div
            className="ps__thumb-y"
            tabIndex={0}
            style={{ top: 0, height: 0 }}
        />
    </div>
</div>
</div>
        </div>
    );
}

export default Sidebar;



