import React, { useState } from "react";
import { get, child, ref, getDatabase, set } from "firebase/database";
import { app } from "../../firebase/firebase";
import Modal from "react-modal";
import TodoList from "../Todo-List/TodoList";

const Home = () => {
  const [todoListArray, setTodoListArray] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [todoLength, setTodoLength] = useState(0);
  const [task, setTask] = useState("");
  // const [subTaskContent, setSubTaskContent] = useState("");
  // const [subTask, setSubTask] = useState([]);
  // const [subTaskInputs, setSubTaskInputs] = useState([{ values: "" }]);
  const database = getDatabase(app);
  get(child(ref(database), `TodoList`)).then((snapshot) => {
    setTodoListArray(snapshot.val());
  });
  get(child(ref(database), `TodoList`)).then((snapShot) => {
    setTodoLength(Object.keys(snapShot.val()).length);
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addTask = (event) => {
    event.preventDefault();
    set(ref(database, `TodoList/${todoLength + 1}`), {
      task,
    });
    console.log(task);
    closeModal();
  };

  // const addSubtask = () => {
  //   setSubTaskInputs(...subTaskInputs, { value: "" });
  // };

  return (
    <div>
      <button onClick={openModal}>Add Todo</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div>ADD A TASK</div>
        <form>
          <input
            type="text"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
          {/* <p>Add Sub Task (optional)</p>
          <button
            onClick={(event) => {
              event.preventDefault();
              addSubtask();
            }}
          >
            Add Subtask
          </button>
          {subTaskInputs.map((inputField, index) => (
            <input
              key={index}
              type="text"
              value={subTaskContent}
              onChange={(event) => {
                setSubTaskContent("");
                setSubTaskContent(event.target.value);
                setSubTask(...subTask, event.target.value);
              }}
            />
          ))} */}
          <button type="submit" onClick={(event) => addTask(event)}>
            Add
          </button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>

      {todoListArray.length === 0 ? (
        <p>"NO task is there"</p>
      ) : (
        <TodoList todoListArray={todoListArray}/>
      )}
    </div>
  );
};

export default Home;
