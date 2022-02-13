import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ButtonCustom from "../components/common/ButtonCustom";
import Checkbox from "../components/common/Checkbox";
import InputField from "../components/common/InputField";
import { createTodo, getAllTodo } from "../store/todo/api/todoApi";
import { taskStatus } from "../constants/constants";

function Landing() {
  const [inputValue, setInputValue] = useState({ title: "" });
  const { title } = inputValue;
  const todos = useSelector((state) => state.todo.data);
  const createToDoState = useSelector((state) => state.createTodo.data);
  const [checked, setChecked] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodo());
  }, [createToDoState]);

  return (
    <div className="w-full bg-blue-200 min-h-screen flex justify-center">
      <div className="bg-white w-10/12 my-4 rounded-2xl p-12">
        <div className="inline-block w-1/2 pb-12">
          <InputField
            className="w-2/3"
            type="text"
            value={title}
            placeholder="ToDo"
            label="Title"
            name="title"
            onChange={handleChange}
          />
          <ButtonCustom className="w-1/3" title="New List" onSubmit={onSubmit} />
        </div>
        <div className="">
          <p className="text-3xl">ToDo List</p>
          {todos.map((todo) => {
            return (
              <div className="w-full mt-2 bg-slate-200 p-4 rounded-lg">
                <Checkbox
                  disable={todo.status === taskStatus.COMPLETED}
                  label={todo.title}
                  value={todo.status === taskStatus.COMPLETED}
                />
                <p>3 of 5 completed</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
