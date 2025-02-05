"use client";
import {useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import Form from "../Component2/form";
import { FaRegFileLines } from "react-icons/fa6";
import "./style.scss";
import Task from "../Task";
import React from "react";

export interface TaskType{
  map: any;
  strike: boolean;
  id: number;
  task: string;
  start: string;
  end: string;
  emoji: string;
  extra: string;
}


export interface AddProps {
  setTasks: (tasks: TaskType[])=>void;
  tasks: TaskType[];
  updateValue: TaskType;
  setIsFormOpen:any;
  setIsPopOpen:any;
  }

const Add = ({ setTasks, tasks }: AddProps) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isPopOpen, setIsPopOpen] = useState<string | null | boolean | number>(null);
  const [updateValue, setUpdateValue] = useState<TaskType | null>(null);

  // Function to open form for creating a new task
  const clickToOpen = () => {
    setUpdateValue(null);
    setIsFormOpen(true);
  };

  // Function to open form for editing a task
  const onEdit = (task: TaskType) => {
    setUpdateValue(task);
  };

  // Function to toggle pop-up
  const clickToPop = (id: number) => {
    setIsPopOpen((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (updateValue) {
      setIsFormOpen(true);
    } else {
      setIsFormOpen(false);
    }
  }, [updateValue]);

  return (
    <div>
      {/* Task component where tasks are mapped */}
      <Task tasks={tasks} setTasks={setTasks} clickToPop={clickToPop} isPopOpen={isPopOpen} onEdit={onEdit} />

      {/* Button to create a new task */}
      <div className="add_task">
        <div className="add_title" onClick={clickToOpen}>
          <p>
            <FaPlus />
          </p>
          <p>Create new Task</p>
        </div>
        <div className="icons">
          <div className="command-icon">
            <Image src="/command1.png" alt="command icon" width={16} height={16} />
          </div>
          <div className="command-ico">N</div>
        </div>
      </div>
      <div className="last_icon">
        <FaRegFileLines />
      </div>

      {/* Form component */}
      {isFormOpen && (
        <div className="form">
          <Form
            setTasks={setTasks}
            tasks={tasks}
            setIsFormOpen={setIsFormOpen}
            updateValue={updateValue}
            setIsPopOpen={setIsPopOpen}
           />
        </div>
      )}
    </div>
  );
};

export default Add;
