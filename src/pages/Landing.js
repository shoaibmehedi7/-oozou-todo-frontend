import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ButtonCustom from "../components/common/ButtonCustom";
import Checkbox from "../components/common/Checkbox";
import InputField from "../components/common/InputField";
import { createTodo, getAllTodo } from "../store/todo/api/todoApi";
import { taskStatus } from "../constants/constants";
import AccordionItem from "../components/accordion/AccordionItem";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function Landing() {
  const dispatch = useDispatch();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [inputValue, setInputValue] = useState({ title: "" });
  const { title } = inputValue;
  const todos = useSelector((state) => state.todo);
  const createToDoState = useSelector((state) => state.createTodo.data);
  const createSubtaskState = useSelector((state) => state.createSubtask.data);
  const updateSubtaskState = useSelector((state) => state.updateSubtask.data);
  const updateToDoState = useSelector((state) => state.updateTodo.data);
  const [checked, setChecked] = React.useState(false);
  let [loading, setLoading] = useState(true);

  console.log(todos);

  const onSubmit = (e) => {
    e.preventDefault();
    openModal();
    if (title.trim() === "") {
      toast.warning("Please enter a valid todo");
      return;
    }
    dispatch(createTodo(inputValue));
    setInputValue({ title: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  useEffect(() => {
    dispatch(getAllTodo());
  }, [
    createToDoState,
    updateToDoState,
    createSubtaskState,
    updateSubtaskState,
  ]);

  useEffect(() => {
    if(!todos.loading){
    setIsOpen(false);

      // openModal(false);
    }
    // else{
    //   openModal(false);
    // }
  }, [
    todos.loading
  ]);

  // if (todos.loading) {
  //   return (
  //     <div className="flex min-h-screen min-w-full bg-slate-600 justify-center">
  //       <ClipLoader loading={loading} size={150} />
  //     </div>
  //   );
  // }

  return (
    <div className="w-full bg-blue-200 min-h-screen flex justify-center">
      <div className="bg-white w-10/12 my-4 rounded-2xl p-12">
        <div className="inline-block w-1/2 pb-12">
          <InputField
            className="w-2/3 h-16 text-2xl px-8"
            type="text"
            value={title}
            placeholder="ToDo"
            label="Title"
            name="title"
            onChange={handleChange}
          />
          <ButtonCustom
            className="w-1/3 h-16 text-2xl px-8"
            title="New List"
            onSubmit={onSubmit}
          />
        </div>
        <div className="">
          <p className="text-3xl">ToDo List</p>
          <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <ClipLoader loading={loading} size={100} />
              </Modal>
          {/* {todos.loading && (
            <div className="flex min-h-screen min-w-full justify-center">
                <ClipLoader loading={loading} size={150} />
            </div>
          )} */}
          {todos.data.map((todo) => {
            return <AccordionItem id={todo.id} modalControl={setIsOpen} todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
