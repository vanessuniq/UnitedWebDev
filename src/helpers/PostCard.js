import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from './TimeAgo'
const PostCard = ({post}) => {
    return (
        <article className="max-w-sm w-full lg:max-w-full lg:flex post-excerpt">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${post.user.avatar})`}} title="profile picture">
                    </div>
                    <div className=" bg-white p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                        
                           {post.title? <Link to={`/questions/${post.id}`} className="text-blue-900 hover:text-red-600 font-bold text-xl mb-2">{post.title}</Link> : null}
                            <div className='text-sm'>
                                <span className="text-gray-900 leading-none">by {post.user.username} </span>
                                <TimeAgo timestamp={post.created_at}/><br/><br/>
                            </div>
                            <p className="text-gray-700 text-base">{post.body}</p>
                        </div>
                        <div className="flex items-center">
                            {post.answers? <p>{post.answers.length} answer(s) </p> : null}
                           <button> reaction button </button>
                            <div className="text-sm">
                                {post.votes.length} Vote(s)
                            </div>
                        </div>
                    </div>
                </article>
    );
}

export default PostCard;
