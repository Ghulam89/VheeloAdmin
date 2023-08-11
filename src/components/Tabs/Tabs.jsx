import React from 'react'
import { useState } from 'react'
import './tabs.css';

const Tabs = () => {
    const [tabsData ,setTabs] = useState(0);
  return (
    <div className='tabs'>
      <ul className='tabs_list'>
         <li className='tabs_link' onClick={()=>{setTabs(0)}}>
            About
         </li>
         <li className='tabs_link'  onClick={()=>{setTabs(1)}}>
            Ride Categories
         </li>
         <li className='tabs_link' onClick={()=>{setTabs(2)}}>
            CNIC
         </li>
         <li className='tabs_link' onClick={()=>{setTabs(3)}}>
            License
         </li>
         <li className='tabs_link' onClick={()=>{setTabs(4)}}>
            Number Plate
         </li>
         <li className='tabs_link' onClick={()=>{setTabs(5)}}>
            Wallet
         </li>
      </ul>
      <div className="tabsContent" hidden={tabsData!=0}>
        <div>
            <p>City:sargodha</p>
            <p>Phone:+913067104140</p>
            <p>Member Since: 2022-09-15 18:13:25</p>
        </div>
      </div>
      <div className="tabsContent" hidden={tabsData!=1}>
        <div className=''>

        </div>
      </div>
      <div className="tabsContent" hidden={tabsData!=2}>tabsCon</div>
      <div className="tabsContent"  hidden={tabsData!=3}></div>
      <div className="tabsContent"  hidden={tabsData!=4}></div>
      <div className="tabsContent"  hidden={tabsData!=5}></div>
    </div>
  )
}

export default Tabs