"use client";

import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const page = () => {
  return (
    <>
      <fieldset className="fieldSet">
        <legend>A/L Subject selection</legend>
        <div className="inputGroup">
          <label>Select Your Stream</label>
          <select>
            <option value="female">Maths Stream</option>
            <option value="other">Science Stream</option>
            <option value="male">Art Stream</option>
            <option value="other">Commerce Stream</option>
            <option value="other">Technology Stream</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Select First Subject</label>
          <select>
            <option value="female">Maths Stream</option>
            <option value="other">Science Stream</option>
            <option value="male">Art Stream</option>
            <option value="other">Commerce Stream</option>
            <option value="other">Technology Stream</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Select Second Subject</label>
          <select>
            <option value="female">Maths Stream</option>
            <option value="other">Science Stream</option>
            <option value="male">Art Stream</option>
            <option value="other">Commerce Stream</option>
            <option value="other">Technology Stream</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Select Third Subject</label>
          <select>
            <option value="female">Maths Stream</option>
            <option value="other">Science Stream</option>
            <option value="male">Art Stream</option>
            <option value="other">Commerce Stream</option>
            <option value="other">Technology Stream</option>
          </select>
        </div>
        <div className="navBtnTwo">
          <button className="backBtn">
            <FaChevronLeft />
            Go Back
          </button>
          <button className="nextBtn">Submit</button>
        </div>
      </fieldset>
    </>
  );
};

export default page;
