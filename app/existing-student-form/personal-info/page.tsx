"use client";

import React from "react";
import Link from "next/link";
import Stepper from "@/app/components/Stepper";

const ExisitingStudent = () => {
  return (
    <>
      <Stepper pageNo={1} />
      <fieldset className="fieldSet">
        <legend>OL Class Information</legend>
        <div className="twoCols">
          <div className="inputGroup">
            <label>OL Class</label>
            <input type="text" placeholder="B" />
          </div>
          <div className="inputGroup">
            <label>OL Class Teacher</label>
            <input type="text" placeholder="Mr. Tiran Jayasooriya" />
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldSet">
        <legend>Personal Information</legend>
        <div className="inputGroup">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Mahaulpathagamalage Priyantha Sampath Mahaulpathagama"
          />
        </div>
        <div className="inputGroup">
          <label>Name With Initials:</label>
          <input type="text" placeholder="M. P. S. Mahaulpathagama" />
        </div>
        <div className="twoCols">
          <div className="inputGroup">
            <label>Birth Day:</label>
            <input type="date" />
          </div>
          <div className="inputGroup">
            <label>Age as on (1-1-2024):</label>
            <input type="text" placeholder="19 years 2 months 16 days " />
          </div>
        </div>
        <div className="inputGroup">
          <label>Gender</label>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>NIC Number</label>
          <input type="number" placeholder="123456789012" />
        </div>
        <div className="inputGroup">
          <label>Address</label>
          <input type="text" placeholder="123 Main St, City, Country" />
        </div>
        <div className="inputGroup">
          <label>Email</label>
          <input type="text" placeholder="mail.example.com" />
        </div>
        <div className="twoCols">
          <div className="inputGroup">
            <label>Contact Number</label>
            <input type="text" placeholder="076 123 4567" />
          </div>
          <div className="inputGroup">
            <label>Whatsapp Number</label>
            <input type="text" placeholder="076 123 4567" />
          </div>
        </div>
        <div className="twoCols">
          <div className="inputGroup">
            <label>Distance To School</label>
            <input type="text" placeholder="15km" />
          </div>
          <div className="inputGroup">
            <label>Transport Method</label>
            <input type="text" placeholder="Bus" />
          </div>
        </div>
        <div className="inputGroup">
          <label>Scholarship</label>
          <select>
            <option value="have">Have</option>
            <option value="not have">Not Have</option>
          </select>
        </div>
      </fieldset>
      <div className="navigateBtns">
        <Link href="/" className="backBtn">
          Home
        </Link>
        <Link href="/existing-student-form/parent-info" className="nextBtn">
          Next
        </Link>
      </div>
    </>
  );
};
export default ExisitingStudent;
