import video from "../data/video.js";
import Video from './Video'
import React, {useState} from 'react'
import CommentList from "./CommentList.js";

function App() {
  console.log("Here's your data:", video);
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [commentsHidden, setCommentsHidden] = useState(false)
  const [displayedComments, setDisplayedComments] = useState(video.comments)

  function removeComment(removedCommentId){
    setDisplayedComments((displayedComments)=>{
      return displayedComments.filter((comment)=> comment.comment !== removedCommentId)
    })
  }
  
  function increaseUpVotes(){
    setUpVotes((upVotes)=> upVotes + 1)
  }
  function increaseDownVotes(){
    setDownVotes((downVotes)=> downVotes + 1)
  }
  return (
    <div className="App">
      <Video video={video} upvotes = {upVotes} downvotes={downVotes} handleLike = {increaseUpVotes} handleDislike = {increaseDownVotes} commentsHidden= {commentsHidden} setCommentsHidden= {setCommentsHidden}/>
      <hr></hr>
      {commentsHidden ? null : <CommentList comments={displayedComments} removeComment={removeComment}/>}
    </div>
  );
}

export default App;
