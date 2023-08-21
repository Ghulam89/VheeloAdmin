import React from 'react';
import { withRouter } from "react-router-dom";
import UrlArgsBundle from "./core/url_args_bundle";
import { ACTIVITY_TAG } from "./utils/Constants";
import LoginActivity from "./ui/activities/LoginActivity/LoginActivity";
import Home from "./ui/activities/Home/Home";
import Table from "./ui/activities/Table/Table";
import Form from "./ui/activities/Form/Form";
import Clients from "./ui/activities/Clients/Clients";
import Captains from "./ui/activities/Captains/Captains";
import Cities from "./ui/activities/Cities/Cities";
import AddCity from "./ui/activities/AddCity/AddCity";
import RideCategoories from "./ui/activities/RideCategories/RideCategoories";
import AddRideCategory from "./ui/activities/AddRideCategory/AddRideCategory";
import Trips from "./ui/activities/Trips/Trips";
import CancelledTrips from "./ui/activities/CancelledTrips/CancelledTrips";
import SupportSystem from './ui/activities/SupportSystem/SupportSystem';
import Payment from './ui/activities/Payment/Payment';
import EarningInformation from './ui/activities/EarningInformation/EarningInformation';
import Notifications from './ui/activities/Notifications/Notifications';
import Transaction from './ui/activities/Transaction/Transaction';
import Reviews from './ui/activities/Reviews/Reviews';
import UserProfile from './ui/activities/UserProfile/UserProfile';
import VehicleBrand from './ui/activities/VehicleBrand/VehicleBrand';
import VehicleModel from './ui/activities/VehicleModel/VehicleModel';
import VehicleColor from './ui/activities/VehicleColor/VehicleColor';
import AddBrand from './ui/activities/AddBrand/AddBrand';
import Messagebox from './components/messagebox/Messagebox';
import AddColor from './ui/activities/AddColor/AddColor';
import AddModel from './ui/activities/AddModel/AddModel';
import CaptainProfile from './ui/activities/CaptainProfile/CaptainProfile';
import Faq from './ui/activities/Faq/Faq';
import AddFaq from './ui/activities/AddFaq/AddFaq';
import UserSupportSystem from './ui/activities/SupportSystem/UserSupportSystem';

class Cab5 extends React.Component {

  render() {
    const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);

    if (urlArgsBundle.hasActivityTag()) {
      let activityTag = urlArgsBundle.getActivityTag();

      if (activityTag === ACTIVITY_TAG.LOGIN_ACTIVITY) {
        return <LoginActivity />
      } else if (activityTag === ACTIVITY_TAG.HOME) {
        return <Home />
      } else if (activityTag === ACTIVITY_TAG.TABLE) {
        return <Table />
      } else if (activityTag === ACTIVITY_TAG.FORM) {
        return <Form />

      }
      else if (activityTag === ACTIVITY_TAG.CLIENTS) {
        return <Clients />
      } else if (activityTag === ACTIVITY_TAG.CAPTAINS) {
        return <Captains />
      } else if (activityTag === ACTIVITY_TAG.CITIES) {
        return <Cities />
      } else if (activityTag === ACTIVITY_TAG.ADD_CITY) {
        return <AddCity />
      } else if (activityTag === ACTIVITY_TAG.RIDE_CATEGORIES) {
        return <RideCategoories />
      } else if (activityTag === ACTIVITY_TAG.ADD_RIDE_CATEGORY) {
        return <AddRideCategory />
      } else if (activityTag === ACTIVITY_TAG.TRIPS) {
        return <Trips />
      }
      else if (activityTag === ACTIVITY_TAG.USER_SUPPORT_SYSTEM) {
        return <UserSupportSystem />
      }
      else if (activityTag === ACTIVITY_TAG.CANCELLED_TRIPS) {
        return <CancelledTrips />
      } else if (activityTag === ACTIVITY_TAG.SUPPORT_SYSTEM) {
        return <SupportSystem />
      }
      else if (activityTag === ACTIVITY_TAG.PAYMENT) {
        return <Payment />
      } else if (activityTag === ACTIVITY_TAG.EARNING_INFORMATION) {
        return <EarningInformation />
      } else if (activityTag === ACTIVITY_TAG.REVIEWS) {
        return <Reviews />
      }

      else if (activityTag === ACTIVITY_TAG.TRANSACTION) {
        return <Transaction />
      }
      else if (activityTag === ACTIVITY_TAG.NOTIFICATIONS) {
        return <Notifications />
      }
      else if (activityTag === ACTIVITY_TAG.USER_PROFILE) {
        return <UserProfile />
      } else if (activityTag === ACTIVITY_TAG.VEHICLE_BRAND) {
        return <VehicleBrand />
      } else if (activityTag === ACTIVITY_TAG.VEHICLE_MODEL) {
        return <VehicleModel />
      } else if (activityTag === ACTIVITY_TAG.VEHICLE_COLOR) {
        return <VehicleColor />
      } else if (activityTag === ACTIVITY_TAG.ADD_BRAND) {
        return <AddBrand />

      }
      else if (activityTag === ACTIVITY_TAG.CAPTAIN_PROFILE) {
        return <CaptainProfile />
      }
      else if (activityTag === ACTIVITY_TAG.FAQ) {
        return <Faq />
      }
      else if (activityTag === ACTIVITY_TAG.ADD_FAQ) {
        return <AddFaq />
      }
      else if (activityTag === ACTIVITY_TAG.ADD_COLOR) {
        return <AddColor />
      }
      else if (activityTag === ACTIVITY_TAG.ADD_MODEL) {
        return <AddModel />
      }
      else if (activityTag === ACTIVITY_TAG.MESSAGE_USER) {
        return <Messagebox />
      }

    } else {
      urlArgsBundle.setActivityTag(ACTIVITY_TAG.LOGIN_ACTIVITY)
      this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
    }

    return <></>
  }
}

export default withRouter(Cab5);