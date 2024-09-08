import React from "react";
import { MdFamilyRestroom } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { RiTodoFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Stepper = () => {
  return (
    <div className="stepper">
      <div className="number active">
        <FaUser />
      </div>
      <div className="line "></div>
      <div className="number">
        <MdFamilyRestroom />
      </div>
      <div className="line"></div>
      <div className="number">
        <LuListTodo />
      </div>
      <div className="line"></div>
      <div className="number">
        <FaGraduationCap />
      </div>
      {/* <span className="line"></span> */}
    </div>
  );
};

export default Stepper;
