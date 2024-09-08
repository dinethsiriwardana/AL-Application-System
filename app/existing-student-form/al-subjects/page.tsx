"use client";

import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Maths from "@/app/components/alStreamSubjects/Maths";

const page = () => {
  return (
    <>
      <fieldset className="fieldSet">
        <legend>A/L Stream selection</legend>
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
      </fieldset>
      {/* <Maths /> */}
      <div className="navigateBtns">
        <Link href="/" className="backBtn">
          Back
        </Link>
        <Link href="/existing-student-form/parent-info" className="nextBtn">
          Submit
        </Link>
      </div>
    </>
  );
};

export default page;
