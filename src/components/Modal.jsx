import classes from "./Modal.module.css";

function Modal({ children }) {
function closeHandler() {
  
}
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}
export default Modal;
