import React, { useState } from "react";

const Arts = () => {
  const [classType, setClassType] = useState("");
  console.log(classType);
  return (
    <fieldset className="fieldSet">
      <legend>A/L Subject selection</legend>

      <div className="inputGroup">
        <label>Select Your Class</label>
        <select onChange={(event) => setClassType(event.target.value)}>
          <option value="one">Social Sciences Subjects</option>
          <option value="two">Languages ​​and Other Subjects</option>
          <option value="three">Aesthetics Subjects</option>
        </select>
        {classType === "one" && (
          <>
            <div className="inputGroup">
              <label>Select First Subject</label>
              <select>
                <option value="female">Communication and Media Studies</option>
                <option value="female">Economics</option>
                <option value="female">Geography</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Select Second Subject</label>
              <select>
                <option value="female">History</option>
                <option value="female">Political Science</option>
                <option value="female">Home Science</option>
                <option value="female">Agricultural Science</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Select Third Subject</label>
              <select>
                <option value="female">Sinhala Literature</option>
                <option value="female">Logic</option>
                <option value="female">Home Science</option>
                <option value="female">Buddhist Civilization</option>
                <option value="female">
                  Information and Communication Technology
                </option>
                <option value="female">Economics</option>
              </select>
            </div>
          </>
        )}
        {classType === "two" && (
          <>
            <div className="inputGroup">
              <label>Select First Subject</label>
              <select>
                <option value="female">Chinese language</option>
                <option value="female">Korean language</option>
                <option value="female">French language</option>
                <option value="female">Hindi language</option>
                <option value="female">Japanese language</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Select Second Subject</label>
              <select>
                <option value="female">Political Science</option>
                <option value="female">Communication and Media Studies</option>
                <option value="female">English Literature </option>
                <option value="female">Buddhist Civilization</option>
                <option value="female">Agricultural Science</option>
                <option value="female">Geography</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Select Third Subject</label>
              <select>
                <option value="female">Sinhala Literature</option>
                <option value="female">
                  Information and Communication Technology
                </option>
                <option value="female">Logic</option>
                <option value="female">Home Science</option>
              </select>
            </div>
          </>
        )}
        {classType === "three" && (
          <>
            <div className="inputGroup">
              <label>Select First Subject</label>
              <select>
                <option value="female">Communication and Media Studies</option>
                <option value="female">Geography</option>
                <option value="female">Political Science</option>
                <option value="female">
                  Information and Communication Technology
                </option>
                <option value="female">Drama & Theatre</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Select Second Subject</label>
              <select>
                <option value="female">History</option>
                <option value="female">Sinhala Literature</option>
                <option value="female">Home Science</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Select Third Subject</label>
              <select>
                <option value="female">Arts & Drawing</option>
                <option value="female">Dancing</option>
                <option value="female">Music</option>
              </select>
            </div>
          </>
        )}
      </div>
    </fieldset>
  );
};

export default Arts;
