import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./user-Types"
import axios from 'axios'
export const fetchUsersRequest  = ()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess  =users=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUsersFailure  = error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const   fetchCities = ()=>{
    return (dispatch)=>{
        const params = new FormData();
        
        params.append("__api_key__","hi,-its-eevee. I can do wonderful things in api creation.")


       const config = {
           headers: {
               "Content-Type": "application/x-www-form-urlencoded"
           }
       }

        dispatch(fetchUsersRequest)
        axios.post('https://apis.cab5.pk/fetch_cities.php',params,config)
      .then(response=>{
         const users = response.data.data.cities 
         dispatch(fetchUsersSuccess(users))
      }).catch(error=>{
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg))
      })
    }
}

