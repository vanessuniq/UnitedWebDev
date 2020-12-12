import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function LikeButton({votes, currentUser}) {
    const [like, setLike ] = useState(votes.length)
    const voted = votes.find(vote => vote.user_id === currentUser.id )

    return ( 
        <button type ='button' 
            className={`reaction-button ${voted? "text-red-500" : "text-gray-400"}`} 
            onClick= {() => setLike(like + 1) }>
        <FontAwesomeIcon icon={faHeart}/> &nbsp; &nbsp;
          <i className="text-sm text-green-600">
            {`${like} ${like>1? 'likes' : 'like'}`}
        </i>
         </button>
    )
}