import React from 'react';
import {Routes,Route} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Faq from './ui/activities/Faq/Faq';
import LoginActivity from './ui/activities/LoginActivity/LoginActivity';
import Home from './ui/activities/Home/Home';
import Clients from './ui/activities/Clients/Clients';
import Layout from './Layout';
import Notifications from './ui/activities/Notifications/Notifications';
import UserProfile from './ui/activities/UserProfile/UserProfile';
import Captains from './ui/activities/Captains/Captains';
import CaptainProfile from './ui/activities/CaptainProfile/CaptainProfile';
import VehicleBrand from './ui/activities/VehicleBrand/VehicleBrand';
import VehicleModel from './ui/activities/VehicleModel/VehicleModel';
import VehicleColor from './ui/activities/VehicleColor/VehicleColor';
import RideCategories from './ui/activities/RideCategories/RideCategoories';
import Trips from './ui/activities/Trips/Trips';
import CancelledTrips from './ui/activities/CancelledTrips/CancelledTrips';
import Reviews from './ui/activities/Reviews/Reviews';
import SupportSystem from './ui/activities/SupportSystem/SupportSystem';
import UserSupportSystem from './ui/activities/SupportSystem/UserSupportSystem';
import AddBrand from './ui/activities/AddBrand/AddBrand';
import AddModel from './ui/activities/AddModel/AddModel';
import AddColor from './ui/activities/AddColor/AddColor';
import AddFaq from './ui/activities/AddFaq/AddFaq';
import AddRideCategory from './ui/activities/AddRideCategory/AddRideCategory';
class App extends React.Component {
    render() {
        return <>
       
        <ToastContainer theme='dark'/>
        <Routes>
            <Route path="/" element={<LoginActivity/>} />
            <Route element={<Layout/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/clients" element={<Clients/>} />
            <Route path="/userProfile/:id" element={<UserProfile/>} />
            <Route path="/captains" element={<Captains/>} />
            <Route path="/captainsProfile/:id" element={<CaptainProfile/>} />
            
            <Route path="/vehicleBrand" element={<VehicleBrand/>} />
            <Route path="/addBrand" element={<AddBrand/>} />
            <Route path="/vehicleModel" element={<VehicleModel/>} />
            <Route path="/addModel" element={<AddModel/>} />
            <Route path="/addColor" element={<AddColor/>} />
            <Route path="/vehicleColor" element={<VehicleColor/>} />
            <Route path="/rideCategories" element={<RideCategories/>} />
            <Route path="/addCategories" element={<AddRideCategory/>} />
            <Route path="/trips" element={<Trips/>} />
            <Route path="/cancelledTrips" element={<CancelledTrips/>} />
            <Route path="/notifications" element={<Notifications/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/addFaq" element={<AddFaq/>} />

            <Route path="/supportSystem" element={<SupportSystem/>} />
            <Route path="/userSupportSystem" element={<UserSupportSystem/>} />
            </Route>
           
          
            </Routes>

            </>
       
    }
}

export default App;