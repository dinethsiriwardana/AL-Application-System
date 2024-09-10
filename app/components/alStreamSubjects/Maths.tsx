"use client";

import React from "react";
import useExStudentStore from "@/app/global/ExistingStudentData";

const Maths: React.FC = () => {
  const alSubjects = useExStudentStore(
    (state) => state.studentDetails.alSubjects
  );
  const setALSubjects = useExStudentStore((state) => state.setALSubjects);

  const handleSubjectChange = (
    index: number,
    subject: string,
    medium: string = "English"
  ) => {
    const newSubjects = [...alSubjects.subject];
    newSubjects[index] = { [`subject${index + 1}`]: subject, medium };
    setALSubjects(alSubjects.stream, newSubjects);
  };

  return (
    <fieldset className="fieldSet">
      <legend>A/L Subject selection</legend>
      <div className="twoCols">
        <div className="inputGroup">
          <label>First Subject</label>
          <select disabled value="Combined Maths">
            <option value="Combined Maths">Combined Maths</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Second Subject</label>
          <select disabled value="Physics">
            <option value="Physics">Physics</option>
          </select>
        </div>
      </div>
      <div className="inputGroup">
        <label>Select Third Subject</label>
        <select
          value={alSubjects.subject[2]?.subject3 || ""}
          onChange={(e) => handleSubjectChange(2, e.target.value)}
        >
          <option value="">Select a subject</option>
          <option value="Chemistry">Chemistry</option>
          <option value="ICT">Information and Communication Technology</option>
        </select>
      </div>
      {alSubjects.subject.map((subj, index) => (
        <div key={index} className="inputGroup">
          <label>Medium for {Object.values(subj)[0]}</label>
          <select
            value={subj.medium}
            onChange={(e) =>
              handleSubjectChange(
                index,
                Object.values(subj)[0] as string,
                e.target.value
              )
            }
          >
            <option value="English">English</option>
            <option value="Sinhala">Sinhala</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>
      ))}
    </fieldset>
  );
};

export default Maths;
