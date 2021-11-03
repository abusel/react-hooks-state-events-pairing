import React, {useState} from 'react'

function Comment({user, text, removeComment}) {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    return (
        <div>
            <h4>{user}</h4>
            <p>{text}</p>
            <div>
                <button onClick={()=>{
                    setLikes((likes)=>likes + 1)
                }}>{likes}👍</button>
                <button onClick={()=>{
                    setDislikes((dislikes)=> dislikes+1)
                }}>{dislikes}👎</button>
            </div>
            <button onClick={()=> {
                removeComment(text)
            }}>Remove Comment</button>
        </div>
    )
}

export default Comment
