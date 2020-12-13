import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postVote } from '../actions/voteActions'

export default function LikeButton({post, currentUser}) {
    const dispatch = useDispatch()
    const likes = post.votes.length;
    const voted = post.votes.find(vote => vote.user_id === currentUser.id )
    function addLike() {
        const like = post.votes.find(vote => vote.user_id === currentUser.id)
        if (!like) {
            dispatch(postVote(post.answers? {question_id: post.id} : {answer_id: post.id}))
        }
    }

    return ( 
        <button type ='button' 
            className={`reaction-button ${voted? "text-red-500" : "text-gray-400"}`} 
            onClick= {addLike }>
        <FontAwesomeIcon icon={faHeart}/> &nbsp; &nbsp;
          <i className="text-sm text-green-600">
            {`${likes} ${likes>1? 'likes' : 'like'}`}
        </i>
         </button>
    )
}