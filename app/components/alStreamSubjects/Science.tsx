import React from "react";
import useExStudentStore from "@/app/global/ExistingStudentData";

const Science: React.FC = () => {
  const { alSubjects, setALSubjects } = useExStudentStore((state) => ({
    alSubjects: state.studentDetails.alSubjects,
    setALSubjects: state.setALSubjects,
  }));

  const handleSubjectChange = (
    index: number,
    subject: string,
    medium: string = "English"
  ) => {
    const newSubjects = [...alSubjects.subject];
    newSubjects[index] = { subject, medium };
    setALSubjects("science", newSubjects);
  };

  React.useEffect(() => {
    // Initialize subjects if they're not set
    if (alSubjects.subject.length === 0) {
      setALSubjects("science", [
        { subject: "Biology", medium: "Sinhala" },
        { subject: "Chemistry", medium: "Sinhala" },
        { subject: "", medium: "Sinhala" },
      ]);
    }
  }, [alSubjects.subject, setALSubjects]);

  return (
    <fieldset className="fieldSet">
      <legend>A/L Subject selection</legend>
      <div className="twoCols">
        <div className="inputGroup">
          <label>First Subject</label>
          <select disabled value="Biology">
            <option value="Biology">Biology</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Second Subject</label>
          <select disabled value="Chemistry">
            <option value="Chemistry">Chemistry</option>
          </select>
        </div>
      </div>
      <div className="inputGroup">
        <label>Select Third Subject</label>
        <select
          value={alSubjects.subject[2]?.subject || ""}
          onChange={(e) => handleSubjectChange(2, e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Select a subject
          </option>
          <option value="Physics">Physics</option>
          <option value="Agricultural Science">Agricultural Science</option>
        </select>
      </div>
    </fieldset>
  );
};

export default Science;
