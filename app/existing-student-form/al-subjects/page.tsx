"use client";

import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Maths from "@/app/components/alStreamSubjects/Maths";
import Science from "@/app/components/alStreamSubjects/Science";
import Commerce from "@/app/components/alStreamSubjects/Commerce";
import Technology from "@/app/components/alStreamSubjects/Technology";
import Arts from "@/app/components/alStreamSubjects/Arts";
import Stepper from "@/app/components/Stepper";
import useExStudentStore from "@/app/global/ExistingStudentData";

const ALStreamSelectionForm = () => {
  const alSubjects = useExStudentStore(
    (state) => state.studentDetails.alSubjects
  );
  const setALSubjects = useExStudentStore((state) => state.setALSubjects);

  const handleStreamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const stream = event.target.value;
    setALSubjects(stream, []); // Reset subjects when stream changes
  };

  return (
    <>
      <Stepper pageNo={4} />
      <fieldset className="fieldSet">
        <legend>A/L Stream selection</legend>
        <div className="inputGroup">
          <label>Select Your Stream</label>
          <select value={alSubjects.stream} onChange={handleStreamChange}>
            <option value="" disabled>
              Select Your Stream
            </option>
            <option value="maths">Maths Stream</option>
            <option value="science">Science Stream</option>
            <option value="art">Art Stream</option>
            <option value="commerce">Commerce Stream</option>
            <option value="technology">Technology Stream</option>
          </select>
        </div>
      </fieldset>
      {alSubjects.stream === "maths" && <Maths />}
      {alSubjects.stream === "science" && <Science />}
      {alSubjects.stream === "commerce" && <Commerce />}
      {alSubjects.stream === "technology" && <Technology />}
      {alSubjects.stream === "art" && <Arts />}
      <div className="navigateBtns">
        <Link href="/existing-student-form/ol-results" className="backBtn">
          Back
        </Link>
        <Link href="/existing-student-form/parent-info" className="nextBtn">
          Submit
        </Link>
      </div>
    </>
  );
};

export default ALStreamSelectionForm;
