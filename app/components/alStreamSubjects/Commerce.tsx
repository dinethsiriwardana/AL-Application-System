import React from "react";
import useExStudentStore from "@/app/global/ExistingStudentData";

const Commerce: React.FC = () => {
  const { alSubjects, setALSubjects } = useExStudentStore((state) => ({
    alSubjects: state.studentDetails.alSubjects,
    setALSubjects: state.setALSubjects,
  }));

  const handleSubjectChange = (index: number, value: string) => {
    const newSubjects = [...alSubjects.subject];
    newSubjects[index] = { ...newSubjects[index], subject: value };
    setALSubjects("commerce", newSubjects);
  };

  const handleMediumChange = (index: number, value: string) => {
    const newSubjects = [...alSubjects.subject];
    newSubjects[index] = { ...newSubjects[index], medium: value };
    setALSubjects("commerce", newSubjects);
  };

  return (
    <fieldset className="fieldSet">
      <legend>A/L Subject selection</legend>
      <div className="twoCols">
        <div className="inputGroup">
          <label>First Subject</label>
          <select
            value={alSubjects.subject[0]?.subject || "Economics"}
            onChange={(e) => handleSubjectChange(0, e.target.value)}
          >
            <option value="Economics">Economics</option>
          </select>
          <select
            value={alSubjects.subject[0]?.medium || ""}
            onChange={(e) => handleMediumChange(0, e.target.value)}
          >
            <option value="">Select Medium</option>
            <option value="Sinhala">Sinhala</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Second Subject</label>
          <select
            value={alSubjects.subject[1]?.subject || "Accounting"}
            onChange={(e) => handleSubjectChange(1, e.target.value)}
          >
            <option value="Accounting">Accounting</option>
          </select>
          <select
            value={alSubjects.subject[1]?.medium || ""}
            onChange={(e) => handleMediumChange(1, e.target.value)}
          >
            <option value="">Select Medium</option>
            <option value="Sinhala">Sinhala</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>
      </div>
      <div className="inputGroup">
        <label>Third Subject</label>
        <select
          value={alSubjects.subject[2]?.subject || ""}
          onChange={(e) => handleSubjectChange(2, e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Business Studies">Business Studies</option>
          <option value="Information and Communication Technology">
            Information and Communication Technology
          </option>
        </select>
        <select
          value={alSubjects.subject[2]?.medium || ""}
          onChange={(e) => handleMediumChange(2, e.target.value)}
        >
          <option value="">Select Medium</option>
          <option value="Sinhala">Sinhala</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
        </select>
      </div>
    </fieldset>
  );
};

export default Commerce;
