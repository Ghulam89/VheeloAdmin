import React from 'react'

const Rating = ({text}) => {
  return (
    <div className=''>
       <span>
        <i
         className={
            text >=1?
            'fas fa-star rating6':
            text>=0.5?'fas fa-star-half-alt':
            'fas fa-star'
         }
        >
        
        </i>
       </span>
       <span>
        <i
         className={
            text >=2?
            'fas fa-star rating6':
            text>=1.5?'fas fa-star-half-alt':
            'fas fa-star'
         }
        >
        
        </i>
       </span>
       <span>
        <i
         className={
            text >=3?
            'fas fa-star rating6':
            text>=2.5?'fas fa-star-half-alt':
            'fas fa-star'
         }
        >
        
        </i>
       </span>
       <span>
        <i
         className={
            text >=4?
            'fas fa-star rating6':
            text>=3.5?'fas fa-star-half-alt':
            'fas fa-star'
         }
        >
        
        </i>
       </span>
       <span>
        <i
         className={
            text >=5?
            'fas fa-star rating6':
            text>=4.5?'fas fa-star-half-alt':
            'fas fa-star'
         }
        >
        
        </i>
       </span>
    </div>
  )
}

export default Rating;