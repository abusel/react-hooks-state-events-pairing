import CommentList from "./CommentList";
import React from 'react'

function Video({video, upvotes, downvotes, handleLike, handleDislike, commentsHidden, setCommentsHidden}) {
    return (
        <>
            <iframe
            width="919"
            height="525"
            src= {video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <div>
                <button value= 'like' onClick={handleLike}>
                    {upvotes}👍
                </button>
                <button value = 'dislike' onClick={handleDislike}>
                    {downvotes}👎
                </button>
            </div>
            <button onClick= {()=>{
                setCommentsHidden((commentsHidden)=> !commentsHidden)
            }}>{commentsHidden ? 'Show Comments': 'Hide Comments'}</button>
        </>
    )
}

export default Video
