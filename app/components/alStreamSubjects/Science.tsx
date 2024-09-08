import React from "react";

const Science = () => {
  return (
    <fieldset className="fieldSet">
      <legend>A/L Subject selection</legend>
      <div className="twoCols">
        <div className="inputGroup">
          <label>First Subject</label>
          <select disabled>
            <option value="female">Biological Science</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Second Subject</label>
          <select disabled>
            <option value="female">Chemistry</option>
          </select>
        </div>
      </div>
      <div className="inputGroup">
        <label>Select First Subject</label>
        <select>
          <option value="female">Physics</option>
          <option value="other">Agricultural Science</option>
        </select>
      </div>
    </fieldset>
  );
};

export default Science;
