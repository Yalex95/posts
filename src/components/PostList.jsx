import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ isPosting, onStopPosting }) {
  const [post, setPost] = useState([]);

  /*
  const [entredBody, setEntredBody] = useState(""); //body post
  const [entredAuthor, setEntredAuthor] = useState(""); //author post
  ///Event functions handler 
  function changeBodyHandler(event) {
    setEntredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEntredAuthor(event.target.value);
  }*/
  function addPostHandler(postData) {
    setPost((existingPost)=>[postData, ...existingPost]);
  }
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        {post.map((item, key) => {
          <Post key={key} author={item.author} body={item.body}/>
        })}
        {/* print authomatically */}
      </ul>
    </>
  );
}
export default PostList;
