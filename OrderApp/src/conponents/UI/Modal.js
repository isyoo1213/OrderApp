import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        {props.children}
        {/* Modal을 사용하는 Cart에서 props.children을 받고, ModalOverlay를 사용하는 Modal에서 Modal이 받아온 props.children을 또 받는다.
            즉 Cart의 내용들을 꾸며주는 ModalOverlay에까지 children.props를 전달해야함 */}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
