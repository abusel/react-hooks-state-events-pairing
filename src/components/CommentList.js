import React from 'react'
import Comment from './Comment'

function CommentList({comments, removeComment}) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {comments.map((comment)=>{
                return <Comment user= {comment.user} text= {comment.comment} id={comment.id} removeComment={removeComment}/>
            })}
        </div>
    )
}

export default CommentList
