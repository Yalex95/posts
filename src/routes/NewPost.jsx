import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from '../components/Modal'

function NewPost({ onCancel, onAddPost }) {
  const [entredBody, setEntredBody] = useState(""); //body post
  const [entredAuthor, setEntredAuthor] = useState(""); //author post
  /**Event functions handlers */
  function changeBodyHandler(event) {
    setEntredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEntredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: entredBody,
      author: entredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
