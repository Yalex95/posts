import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); // modal
  function showModal() {
    setModalIsVisible(true);
  }
  function closeModal() {
    setModalIsVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModal} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={closeModal} />
      </main>
    </>
  );
}

export default App;
