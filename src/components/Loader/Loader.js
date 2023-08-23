import React from 'react'

const Loader = () => {
  return (
    <>
    <div className='loadingContainer'>
   <div>
    <image src={require('../../images/c_icon.png')} width="120px " height="120px"  />
   <span class="loader">Loading</span>
   </div>
    </div>
    </>
  )
}

export default Loader