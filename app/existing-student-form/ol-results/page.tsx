import React from "react";

const page = () => {
  return (
    <>
      <div className="ol-attempts-select">
        <h3>This is my,</h3>
        <select name="">
          <option value="1">First attempt </option>
          <option value="2">Second attempt</option>
          <option value="3">Third attempt</option>
        </select>
        <h3>for O/L</h3>
      </div>
      <fieldset className="fieldSet">
        <legend>O/L Results - First Attempt</legend>
      </fieldset>
      <fieldset className="fieldSet">
        <legend>O/L Results - Second Attempt</legend>
      </fieldset>
    </>
  );
};

export default page;
