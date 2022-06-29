import { useState } from 'react';

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen ] = useState(false); // 초기값으로 false를 줌 => 처음부터 모달이 열려있으면 안되니까.

  function deleteHandler(){
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />} {/*위와 같은 조건인데 더 간결*/}
    </div>
  );
}

export default Todo;