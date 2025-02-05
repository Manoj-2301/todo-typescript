"use client";
import React from "react";
import "./style.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { TaskType } from "./Component1/Add";

const Task = ({ tasks, setTasks,clickToPop , isPopOpen, onEdit}) => {

  const Delete = (id: TaskType) => {
    setTasks(tasks.filter((task: { id: TaskType; }) => task.id !== id));
  };

  const toggleHandle = (id:number) => {
    setTasks(
      tasks.map((task: TaskType) =>
        task.id === id ? { ...task, strike: !task.strike } : task
      )
    );
  }; 

  return (
    <div className="task_content">
      {tasks.map((task) => (
        <div key={task.id} className="task_box">
          <div className="task_add">
            <input
              type="checkbox"
              className="check"
              checked={task.strike || false}
              onChange={() => toggleHandle(task.id)}
            />
            <p className={`strip ${task.strike ? "strike" : ""}`}>
              {task.task}
            </p>
            {task.emoji && <p className="fav_icon">{task.emoji}</p>}
            {task.extra && <p className="type">{task.extra}</p>}
          </div>
          <div className="task_time">
            <p className="time">
              <IoTimeOutline />
              {task.start} - {task.end}
            </p>
            <button className="dot_btn" onClick={() => clickToPop(task.id)}>
              <BsThreeDotsVertical />
            </button>

            {isPopOpen === task.id && (
              <div className="edit_pop">
                <p className="edit" onClick={() => onEdit(task)} >Edit</p>
                <p className="delete" onClick={() => Delete(task.id)}>Delete</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
