"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Maths from "@/app/components/alStreamSubjects/Maths";
import Science from "@/app/components/alStreamSubjects/Science";
import Commerce from "@/app/components/alStreamSubjects/Commerce";
import Technology from "@/app/components/alStreamSubjects/Technology";
import Arts from "@/app/components/alStreamSubjects/Arts";
import Stepper from "@/app/components/Stepper";
import useExStudentStore from "@/app/global/ExistingStudentData";

const ALStreamSelectionForm = () => {
  const studentDetails = useExStudentStore((state) => state.studentDetails);
  const { alSubjects, setALSubjects } = useExStudentStore((state) => ({
    alSubjects: state.studentDetails.alSubjects,
    setALSubjects: state.setALSubjects,
  }));

  const handleStreamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const stream = event.target.value;
    // Initialize subjects array with three empty subjects when changing stream
    const initialSubjects = [
      { subject: "", medium: "" },
      { subject: "", medium: "" },
      { subject: "", medium: "" },
    ];
    setALSubjects(stream, initialSubjects);
  };

  // Initialize subjects array if it's empty
  useEffect(() => {
    if (alSubjects.stream && alSubjects.subject.length === 0) {
      const initialSubjects = [
        { subject: "", medium: "" },
        { subject: "", medium: "" },
        { subject: "", medium: "" },
      ];
      setALSubjects(alSubjects.stream, initialSubjects);
    }
  }, [alSubjects.stream, alSubjects.subject.length, setALSubjects]);

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
        <Link href="/existing-student-form/all-data" className="backBtn">
          Check Your Information
        </Link>
        {/* <button className="nextBtn" onClick={() => console.log(studentDetails)}>
          Submit
        </button> */}
      </div>
    </>
  );
};

export default ALStreamSelectionForm;
