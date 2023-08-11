import {format} from 'date-fns'
// import ColumnFilter from './ColumnFilter'
// import SwitchButton from 'react-switch-button'
// import 'react-switch-button/dist/react-switch-button.css';


export const USERS_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },
    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },

    {
        Header:'Phone',
        Footer: 'Phone',
        accessor:'phone',
        
    },

    {
        Header:'Registration Date',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },
    
]







export const CAPTAIN_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },
    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },

    {
        Header:'Phone',
        Footer: 'Phone',
        accessor:'phone',
        
    },


    {
        Header:'City',
        Footer: 'City',
        accessor:'city',
        
    },

    {
        Header:'Registration Date',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },
    
]






export const CITIES_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },
    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },


    {
        Header:'Created At',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },
    
]













export const RIDES_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },
    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },

    {
        Header:'Price per km',
        accessor:'age',
        
    },


    {
        Header:'Created At',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },
    
]








export const SCHEDULED_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },
    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },

    {
        Header:'Phone',
        accessor:'phone',
        
    },


    {
        Header:'Schedule At',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },
    {
        Header:'Pickup Location',
        accessor:'country',
        
    },
    
]













export const TRIPS_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },
    {
        Header:'Driver',
        Footer: 'First Name',
        accessor:'first_name',
        
    },

    {
        Header:'User',
        Footer: 'Last Name',
        accessor:'last_name',
        
    },

    {
        Header:'Phone',
        accessor:'phone',
        
    },


    {
        Header:'Ride Date',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },
    {
        Header:'Route',
        accessor:'country',
        
    },
    
]












export const REQUESTS_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },
    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },

    {
        Header:'Phone',
        Footer: 'Phone',
        accessor:'phone',
        
    },

    {
        Header:'Registration Date',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },
    
]














export const PAYED_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },


    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },


    {
        Header:'Registration Date',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },



    {
        Header:'Amount',
        accessor:'age',
        
    },



    {
        Header:'Bank Name',
        accessor:'last_name',
        
    },


    

    {
        Header:'Account Number',
        accessor:'phone',
        
    },

    
    
]











export const UNPAYED_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },


    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },


    {
        Header:'Registration Date',
        Footer: 'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value})=>{return format(new Date(value),'dd/MM/yyyy hh:mm:ss')},
        
    },



    {
        Header:'Amount',
        accessor:'age',
        
    },



    {
        Header:'Bank Name',
        accessor:'last_name',
        
    },


    

    {
        Header:'Account Number',
        accessor:'phone',
        
    },

    
    
]












export const REQ_APPROVAL_COLUMNS=[
    {
        Header:'#',
        Footer: 'Id',
        accessor:'id',
        
        disableFilters:true
    },


    {
        Header:'Name',
        Footer: 'First Name',
        accessor:'first_name',
        
    },




    {
        Header:'Amount',
        accessor:'age',
        
    },



    {
        Header:'Number',
        accessor:'last_name',
        
    },


    

    {
        Header:'Account Number',
        accessor:'phone',
        
    },



    {
        Header:'Type',
        accessor:'country',
        
    },

    
    
]













export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header:'First Name',
                Footer: 'First Name',
                accessor:'first_name',
            },
            {
                Header:'Last Name',
                Footer: 'Last Name',
                accessor:'last_name',
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header:'Date of Birth',
                Footer: 'Date of Birth',
                accessor:'date_of_birth',
            },
            {
                Header:'Country',
                Footer: 'Country',
                accessor:'country',
                
            },
            {
                Header:'Phone',
                Footer: 'Phone',
                accessor:'phone',
            },
        ]
    },
]