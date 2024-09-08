import React from "react";

const Technology = () => {
  return (
    <fieldset className="fieldSet">
      <legend>A/L Subject selection</legend>
      <div className="inputGroup">
        <label>First Subject</label>
        <select disabled>
          <option value="female">Science For Technology</option>
        </select>
      </div>
      <div className="twoCols">
        <div className="inputGroup">
          <label>Second Subject</label>
          <select>
            <option value="female">Engineering Technology</option>
            <option value="female">Bio System Technology</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Third Subject</label>
          <select>
            <option value="female">
              Information and Communication Technology
            </option>
            <option value="female">Agricultural Technology</option>
            <option value="female">Geography</option>
            <option value="female">Economics</option>
            <option value="female">Mathematics</option>
            <option value="female">Communication and Media Studies</option>
            <option value="female">Drawing</option>
            {/* Is this really drawing? */}
          </select>
        </div>
      </div>
    </fieldset>
  );
};

export default Technology;
