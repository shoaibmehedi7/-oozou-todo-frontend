import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodo } from "../store/todo/api/todoApi";

function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  return (
    <div>
      <div>application loaded successfully</div>
    </div>
  );
}

export default Landing;
