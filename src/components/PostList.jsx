
import Post from "./Post";
import classes from "./PostList.module.css";
import { useEffect, useState } from "react";

function PostList() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  /**Get posts function */
  useEffect(() => {
    async function getPosts() {
      setIsLoading(true);
      const res = await fetch("http://localhost:8080/posts");
      const resData = await res.json();
      setPost(resData.posts);
      setIsLoading(false);
    }
    getPosts();
  }, []);

  /**Add post function */
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPost((existingPost) => [postData, ...existingPost]);
  }
  return (
    <>
      {!isLoading && post.length > 0 && (
        <ul className={classes.posts}>
          {post.map((item, i) => (
            <Post key={i} author={item.author} body={item.body} />
          ))}
        </ul>
      )}
      {!isLoading && post.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts...</p>
        </div>
      )}
    </>
  );
}
export default PostList;
