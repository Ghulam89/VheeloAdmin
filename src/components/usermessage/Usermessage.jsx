import React from 'react'
import '../usermessage/usermessge.css'
import person from '../../images/male-02.jpg'
const Usermessage = ({own,chat_user}) => {
  return (
    <div>
        <div className={own?" own" :"chat_inner own"}>
            <div className="message_top">
                <img src={person} alt='' width="30px" height='30px' />
                <p className=" ">{chat_user}</p>
                
            </div>
            <div className='messageBottom'>1 hour age</div>
         </div>
    </div>
  )
}

export default Usermessage;