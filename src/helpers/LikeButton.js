import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import { deleteVote, postVote } from '../actions/voteActions'

export default function LikeButton({post, currentUser}) {
    const dispatch = useDispatch()
    const likes = post.votes.length; //number of post's likes
    // check if current user already liked the given post
    const voted = post.votes.find(vote => vote.user_id === currentUser.id )
    function addLike() {
        if (voted) {
            dispatch(deleteVote(voted))
        } else {
            dispatch(postVote(post.answers? {question_id: post.id} : {answer_id: post.id}))
        }
    }

    return (
        <Fragment>
        
            <button type ='button' 
                className={`reaction-button ${voted? "text-red-500" : "text-gray-400"}`} 
                onClick= {addLike }
                data-tip data-for="likeTip">
                <FontAwesomeIcon icon={faHeart}/> &nbsp; &nbsp;
                <i className="text-sm text-green-600">
                    {`${likes} ${likes>1? 'likes' : 'like'}`}
                </i>
            </button>
            <ReactTooltip id="likeTip" place="top">
                Find this post constructive?
            </ReactTooltip>
        </Fragment>
    )
}