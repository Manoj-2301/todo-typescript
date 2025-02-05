"use client"
import "./style.scss";
import { FaChevronDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Add from "../Component/Component1/Add";
import { useState } from "react";

const CenterNav = () => {
  const[tasks, setTasks] =useState([
    {
      id:1,
      task: "Jogging",
      emoji: "🏃",
      extra:"",
      start: "06:00",
      end: "07:30",
      strike:false,
    },
    {
      id:2,
      task: "Walking",
      emoji: "💪",
      extra:"",
      start: "06:00",
      end: "07:30",
      strike:false,
    },{
      id:3,
      task: "Cardio",
      emoji: "🫀",
      extra:"",
      start: "06:00",
      end: "07:30",
      strike:false,
    }
  ])

  console.log(tasks)

  return (
    <div className="main_content">
      <div>
        <div className="top_main">
          <div className="main-para">
            <p className="main_para_one">
              Good Morning, Sullivan! <span className="main_hand"> 👋</span>
            </p>
            <p className="main_para_two">Today,Tue 04 Feb 2025</p>
          </div>
          <div className="main_cta">
            <div className="btn">
              <FaChevronDown className="chevi" />
              <p>Today</p>
            </div>
            <div className="btn_one">
            <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
      <Add setTasks={setTasks} tasks={tasks}/>
    </div>
  );
};

export default CenterNav;
