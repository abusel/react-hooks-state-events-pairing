import React, {useState} from 'react'
import Comment from './Comment'

function CommentList({comments, removeComment}) {
    const [searchText, setSearchText ] = useState('')
    const [sort, setSort] = useState('AZ')
    

    let sortedComments = [...comments]
    if (sort === 'AZ'){
        sortedComments.sort()    
    }
    else if (sort === 'ZA'){
        sortedComments.sort().reverse()
    }


    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <input type= 'text' placeholder='...Search by username' value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <div>
                <p>Sort By:</p>
                <select onChange={
                    (e)=>{
                        setSort(e.target.value)
                        console.log(sortedComments)
                    }
                }>
                    <option value='AZ'>Username A-Z</option>
                    <option value='ZA'>Username Z-A</option>
                    {/* <option value='likes'>Likes</option> */}
                </select>
            </div>
            
            {sortedComments.filter((comment)=>comment.user.toLowerCase().includes(searchText.toLowerCase()))
            .map((comment)=>{
                return <Comment key = {comment.id} user= {comment.user} text= {comment.comment} id={comment.id} removeComment={removeComment} />
            })}
        </div>
    )
}

export default CommentList
