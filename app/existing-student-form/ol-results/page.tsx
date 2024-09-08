import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="ol-attempts-select">
        <h3>I am using my O/L</h3>
        <select name="">
          <option value="1">First attempt </option>
          <option value="2">Second attempt</option>
          <option value="3">Third attempt</option>
        </select>
        <h3>Results to apply Mayurapada Central College.</h3>
        <h3>The results showing here are</h3>
        <select name="">
          <option value="1">Correct</option>
          <option value="1">Wrong</option>
        </select>
      </div>
      <fieldset className="fieldSet">
        <legend>O/L Results - First Attempt</legend>
        <div className="inputGroup">
          <label>Index Number</label>
          <input type="number" placeholder="12345" />
        </div>
        <div className="inputGroup">
          <label>Maths</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Science</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>English</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>History</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Religion</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Sinhala</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>

        <h3 className="bucket-title">Bucket subjects</h3>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldSet">
        <legend>O/L Results - Second Attempt</legend>
        <div className="inputGroup">
          <label>Index Number</label>
          <input type="number" placeholder="12345" />
        </div>
        <div className="inputGroup">
          <label>Maths</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Science</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>English</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>History</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Religion</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Sinhala</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>

        <h3 className="bucket-title">Bucket subjects</h3>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldSet">
        <legend>O/L Results - Third Attempt</legend>
        <div className="inputGroup">
          <label>Index Number</label>
          <input type="number" placeholder="12345" />
        </div>
        <div className="inputGroup">
          <label>Maths</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Science</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>English</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>History</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Religion</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Sinhala</label>
          <select value="C">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="S">S</option>
            <option value="F">F</option>
          </select>
        </div>

        <h3 className="bucket-title">Bucket subjects</h3>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
        <div className="inputGroup-bucket">
          <div className="left">
            <label className="bucket-subject">Subject Name</label>
            <input
              type="text"
              placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
            />
          </div>
          <div className="right">
            <label className="bucket-subject">Grade</label>
            <select value="C">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="S">S</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
      </fieldset>
      <div className="navigateBtns">
        <Link href="/" className="backBtn">
          Home
        </Link>
        <Link href="/existing-student-form/al-subjects" className="nextBtn">
          Next
        </Link>
      </div>
    </>
  );
};

export default page;
