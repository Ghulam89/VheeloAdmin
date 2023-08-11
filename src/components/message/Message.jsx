import React from 'react'
import chat from '../../images/chat.png'
const Message = () => {
  return (
    <div className='message pt-5 text-center'>

      <div className='pb-4 pt-4'>
       <img  src={chat} alt='' />
      </div>
         <h2>Select a conversation or start a new chat</h2>
    </div>
  )
}

export default Message