import React from 'react'

function Comment({user, text, removeComment}) {
    return (
        <div>
            <h4>{user}</h4>
            <p>{text}</p>
            <button onClick={()=> {
                removeComment(text)
                console.log(text)
                console.log(removeComment)
            }}>Remove Comment</button>
        </div>
    )
}

export default Comment
