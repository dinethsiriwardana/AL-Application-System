import React from "react";
import { MdFamilyRestroom } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

interface Props {
  pageNo: number;
}

const Stepper = ({ pageNo }: Props) => {
  return (
    <div className="stepper">
      <div className={pageNo >= 1 ? "number active" : "number"}>
        <FaUser />
      </div>

      <div className={pageNo >= 2 ? "line active" : "line"}></div>
      <div className={pageNo >= 2 ? "number active" : "number"}>
        <MdFamilyRestroom />
      </div>

      <div className={pageNo >= 3 ? "line active" : "line"}></div>
      <div className={pageNo >= 3 ? "number active" : "number"}>
        <LuListTodo />
      </div>

      <div className={pageNo >= 4 ? "line active" : "line"}></div>
      <div className={pageNo === 4 ? "number active" : "number"}>
        <FaGraduationCap />
      </div>
    </div>
  );
};

export default Stepper;
