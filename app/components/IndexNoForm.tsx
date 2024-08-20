"use client";

import React from "react";

const IndexNoForm = () => {
  return (
    <>
      <div className="form">
        <input type="text" name="text" autoComplete="off" required />
        <label htmlFor="text" className="label-name">
          <span className="content-name">Enter Index No.</span>
        </label>
      </div>
      <button className="submit-button">
        <span>Apply Now</span>
      </button>
    </>
  );
};

export default IndexNoForm;
