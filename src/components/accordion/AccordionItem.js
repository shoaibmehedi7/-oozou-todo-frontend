import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { taskStatus } from "../../constants/constants";
import { updateTodo } from "../../store/todo/api/todoApi";
import {
  createSubtask,
  updateSubtask,
} from "../../store/subtask/api/subtaskApi";
import Checkbox from "../common/Checkbox";
import InputField from "../common/InputField";
import { toast } from "react-toastify";
import ButtonCustom from "../common/ButtonCustom";

const AccordionItem = ({ todo }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ title: "", todo_id: todo.id });
  const { title, todo_id } = inputValue;

  const contentEl = useRef();

  const completedCount = todo.subTasks.filter(
    (task) => task.status === taskStatus.COMPLETED
  ).length;

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      toast.warning("Please enter a valid todo");
      return;
    }
    dispatch(createSubtask(inputValue));
    setInputValue({ title: "",todo_id: todo.id});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  return (
    <div className={`accordion_item ${active ? "active" : ""}`}>
      <button
        className="button"
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className="min-w-full flex flex-col-2 bg-[#14B8A6] rounded-xl my-1">
          <div className="w-full mt-2 p-2 rounded-lg ">
            <Checkbox
              disable={todo.status}
              label={todo.title}
              value={todo.status}
              api={() => {
                dispatch(
                  updateTodo({
                    id: todo.id,
                    status: "completed",
                  })
                );
              }}
            />
            <p>{`${completedCount} of ${todo.subTasks.length} completed`}</p>
          </div>
          <div className="h-16 w-16 rounded-full bg-[#a2fff9] shadow-2xl text-center flex content-center justify-center self-center mr-4">
            <span className="control self-center ">{active ? "—" : "+"} </span>
          </div>
        </div>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper bg-blue-200 rounded-xl"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">
          {!todo.subTasks.length && <p className="text-center bg-red-200 py-2 pb-2 mb-2">No Added SubTasks</p>}
          {todo.subTasks.map((subTask, index) => {
            return (
              <div className="subTask subTask_title">
                <Checkbox
                  label={subTask.title}
                  value={subTask.status}
                  api={() => {
                    dispatch(
                      updateSubtask({
                        id: subTask.id,
                        status:
                          subTask.status === taskStatus.COMPLETED
                            ? taskStatus.PENDING
                            : taskStatus.COMPLETED,
                      })
                    );
                  }}
                />
              </div>
            );
          })}
          <div className="inline-block w-full">
            <InputField
              className="w-3/4 px-8"
              type="text"
              value={title}
              placeholder="What are the steps to complete this task?"
              label="Title"
              name="title"
              onChange={handleChange}
            />
            <ButtonCustom
              className="w-1/4  px-8"
              title="Add New Step"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
