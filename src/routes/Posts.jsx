import { useState } from "react";
import MainHeader from "../components/MainHeader";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  
  const res = await fetch("http://localhost:8080/posts");
  const resData = await res.json();
  return resData.posts
  
}
