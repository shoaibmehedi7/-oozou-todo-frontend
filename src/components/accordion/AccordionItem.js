import { useRef, useState } from "react";
import { taskStatus } from "../../constants/constants";
import Checkbox from "../common/Checkbox";

const AccordionItem = ({ todo }) => {
  const [active, setActive] = useState(false);

  const contentEl = useRef();

  const completedCount = todo.subTasks.filter(
    (task) => task.status === taskStatus.COMPLETED
  ).length;

  return (
    <div className={`accordion_item ${active ? "active" : ""}`}>
      <button
        className="button"
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className="min-w-full flex flex-col-2 bg-[#14B8A6] rounded-xl my-1">
          <div className="w-full mt-2 p-4 rounded-lg ">
            <Checkbox
              disable={todo.status === taskStatus.COMPLETED}
              label={todo.title}
              value={todo.status === taskStatus.COMPLETED}
            />
            <p>{`${completedCount} of ${todo.subTasks.length} completed`}</p>
          </div>
          <div className="h-16 w-16 rounded-full bg-red-400 text-center flex content-center justify-center self-center mr-4">
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
          {todo.subTasks.map((subTask, index) => {
            return (
              <div className="subTask subTask_title">
                {/* <div className="subTask_title">{subTask.title}</div>
                <div className="subTask_description">{subTask.description}</div> */}
                <Checkbox
                  disable={subTask.status === taskStatus.COMPLETED}
                  label={subTask.title}
                  value={subTask.status === taskStatus.COMPLETED}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
