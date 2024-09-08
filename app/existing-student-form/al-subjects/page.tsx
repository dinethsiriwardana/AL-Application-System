"use client";

import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Maths from "@/app/components/alStreamSubjects/Maths";
import Science from "@/app/components/alStreamSubjects/Science";
import Commerce from "@/app/components/alStreamSubjects/Commerce";
import Technology from "@/app/components/alStreamSubjects/Technology";
import Arts from "@/app/components/alStreamSubjects/Arts";
import Stepper from "@/app/components/Stepper";

const Page = () => {
  const [subject, setSubject] = useState("");
  return (
    <>
      <Stepper pageNo={4} />
      <fieldset className="fieldSet">
        <legend>A/L Stream selection</legend>
        <div className="inputGroup">
          <label>Select Your Stream</label>
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option value="maths">Maths Stream</option>
            <option value="science">Science Stream</option>
            <option value="art">Art Stream</option>
            <option value="commerce">Commerce Stream</option>
            <option value="tech">Technology Stream</option>
          </select>
        </div>
      </fieldset>
      {subject == "maths" && <Maths />}
      {subject == "science" && <Science />}
      {subject == "commerce" && <Commerce />}
      {subject == "tech" && <Technology />}
      {subject == "art" && <Arts />}
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

export default Page;
