
import Post from "./Post";
import classes from "./PostList.module.css";
import { useEffect, useState } from "react";
import {useLoaderData} from "react-router-dom"

function PostList() {
  const posts = useLoaderData();

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
      { posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((item) => (
            <Post key={item.id} author={item.author} body={item.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts...</p>
        </div>
      )} */}
    </>
  );
}
export default PostList;
