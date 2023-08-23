import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
const Layout = () => {
    const [isopen,setOpen] = useState(false);
  const Toggle = ()=>{
     setOpen(!isopen)
     document.getElementById('tbCard').style.width = isopen ?  '1036px':'1300px'
  }
    return (
        <>
            
            <div className=' container-fluid d-flex p-0 '>
                <div className='position-fixed' style={{zIndex:'999'}}>
                    <Sidebar width={isopen ? '0px' : '260px'} display={isopen ? 'none' : 'block'} />
                </div>
                <div className="container-fluid  p-0" id='layout_container' style={{marginLeft:isopen?'0px':'260px'}}>
                    <div className="main-panel">
                        <Navbar width={isopen ? '100%' : '81%'} Toggle={Toggle} />
                        <Outlet/>
                        <Footer/>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Layout
