import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function LikeButton() {
    const [like, setLike ] = useState(0)


    return ( 
        <button type ='button' className='reaction-button text-red-500' onClick= {() => setLike(like + 1) }>
        <FontAwesomeIcon icon={faHeart}/> &nbsp; &nbsp;
          {like} 
         </button>
    )
}