"use client";

import React, { useState } from "react";
import setExistingStudentData from "../global/ExistingStudentData";
import axios from "axios";
import useStudentType from "../global/StudentType";

interface Props {
  callBack: () => void;
}

const IndexNoForm = ({ callBack }: Props) => {
  const setIndexNo = setExistingStudentData((state) => state.setIndexNo);
  const { setStudentType } = useStudentType();
  const [newIndexNo, setNewIndexNo] = useState("");
  // const [studentType, setStudentType] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIndexNo(e.target.value); // Update local state with input value
  };

  const updateIndexNo = async () => {
    setIndexNo(newIndexNo); // Call Zustand's setIndexNo to update store state
    try {
      const studentData = await axios.get(`/api/${newIndexNo}`);
      setStudentType(studentData.data.studentType);
      callBack();
    } catch (error) {}
  };
  return (
    <>
      <div className="form">
        <input
          type="number"
          name="text"
          autoComplete="off"
          required
          value={newIndexNo}
          onChange={handleInputChange}
        />
        <label htmlFor="text" className="label-name">
          <span className="content-name">Enter Index No.</span>
        </label>
      </div>
      <button className="submit-button" onClick={updateIndexNo}>
        <span>Apply Now</span>
      </button>
    </>
  );
};

export default IndexNoForm;
