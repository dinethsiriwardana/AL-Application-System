import React from "react";
import useExStudentStore from "@/app/global/ExistingStudentData";

const Maths: React.FC = () => {
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
    setALSubjects("maths", newSubjects);
  };

  React.useEffect(() => {
    // Initialize subjects if they're not set
    if (alSubjects.subject.length === 0) {
      setALSubjects("maths", [
        { subject: "Combined Maths", medium: "English" },
        { subject: "Physics", medium: "English" },
        { subject: "", medium: "English" },
      ]);
    }
  }, [alSubjects.subject, setALSubjects]);

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
          value={alSubjects.subject[2]?.subject || ""}
          onChange={(e) => handleSubjectChange(2, e.target.value)}
        >
          <option value="">Select a subject</option>
          <option value="Chemistry">Chemistry</option>
          <option value="ICT">Information and Communication Technology</option>
        </select>
      </div>
      {alSubjects.subject.map((subj, index) => (
        <div key={index} className="inputGroup">
          <label>Medium for {subj.subject}</label>
          <select
            value={subj.medium}
            onChange={(e) =>
              handleSubjectChange(index, subj.subject, e.target.value)
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
