"use client";

import React, { useState } from "react";
import Link from "next/link";
import Stepper from "@/app/components/Stepper";

const Page = () => {
  const [olAttempt, setOlAttempt] = useState(1);
  const [olResultsTrue, setOlResultsTrue] = useState("true");
  return (
    <>
      <Stepper pageNo={3} />

      <fieldset className="fieldSet">
        <legend>Get O/L Results</legend>
        <div className="inputGroup">
          <label>Last O/L Attempt</label>
          <select
            onChange={(event) => setOlAttempt(parseInt(event.target.value))}
          >
            <option value={1}>First attempt </option>
            <option value={2}>Second attempt</option>
            <option value={3}>Third attempt</option>
          </select>
        </div>
      </fieldset>
      {olAttempt >= 1 && (
        <fieldset className="fieldSet">
          <legend>O/L Results - First Attempt</legend>
          <div className="inputGroup">
            <label>Index Number</label>
            <input type="number" placeholder="12345" />
          </div>
          <div className="twoCols">
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
          </div>
          <div className="twoCols">
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
          </div>
          <div className="twoCols">
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
          </div>

          <h3 className="bucket-title">Bucket subjects</h3>
          <div className="inputGroup-bucket">
            <div className="left">
              <label className="bucket-subject">Subject Name</label>
              <input type="text" placeholder="Add Subject Name Here" />
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
              <input type="text" placeholder="Add Subject Name Here" />
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
              <input type="text" placeholder="Add Subject Name Here" />
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
      )}

      {olAttempt >= 2 && (
        <fieldset className="fieldSet">
          <legend>O/L Results - Second Attempt</legend>
          <div className="inputGroup">
            <label>Index Number</label>
            <input type="number" placeholder="12345" />
          </div>
          <div className="twoCols">
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
          </div>
          <div className="twoCols">
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
          </div>
          <div className="twoCols">
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
          </div>

          <h3 className="bucket-title">Bucket subjects</h3>
          <div className="inputGroup-bucket">
            <div className="left">
              <label className="bucket-subject">Subject Name</label>
              <input type="text" placeholder="Add Subject Name Here" />
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
              <input type="text" placeholder="Add Subject Name Here" />
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
              <input type="text" placeholder="Add Subject Name Here" />
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
      )}

      {olAttempt >= 3 && (
        <fieldset className="fieldSet">
          <legend>O/L Results - Third Attempt</legend>
          <div className="inputGroup">
            <label>Index Number</label>
            <input type="number" placeholder="12345" />
          </div>
          <div className="twoCols">
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
          </div>
          <div className="twoCols">
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
          </div>
          <div className="twoCols">
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
          </div>

          <h3 className="bucket-title">Bucket subjects</h3>
          <div className="inputGroup-bucket">
            <div className="left">
              <label className="bucket-subject">Subject Name</label>
              <input type="text" placeholder="Add Subject Name Here" />
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
              <input type="text" placeholder="Add Subject Name Here" />
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
              <input type="text" placeholder="Add Subject Name Here" />
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
      )}

      <fieldset className="fieldSet">
        <legend>Change O/L Results</legend>
        <div className="inputGroup">
          <label>This O/L results are:</label>
          <select onChange={(event) => setOlResultsTrue(event.target.value)}>
            <option value="true">Correct</option>
            <option value="false">There are some mistakes</option>
          </select>
        </div>
      </fieldset>
      {olResultsTrue === "false" && (
        <fieldset className="fieldSet">
          <legend>O/L Results - Change</legend>
          <div className="inputGroup">
            <label>Index Number</label>
            <input type="number" placeholder="12345" />
          </div>
          <div className="inputGroup">
            <label>Last O/L Attempt</label>
            <select>
              <option value={1}>First attempt </option>
              <option value={2}>Second attempt</option>
              <option value={3}>Third attempt</option>
            </select>
          </div>
          <div className="twoCols">
            <div className="inputGroup">
              <label>Maths</label>
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Science</label>
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>
          <div className="twoCols">
            <div className="inputGroup">
              <label>English</label>
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>History</label>
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>
          <div className="twoCols">
            <div className="inputGroup">
              <label>Religion</label>
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Sinhala</label>
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>

          <h3 className="bucket-title">Bucket subjects</h3>
          <div className="inputGroup-bucket">
            <div className="left">
              <label className="bucket-subject">Subject Name</label>
              <input type="text" placeholder="Add Subject Name Here" />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select>
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
              <input type="text" placeholder="Add Subject Name Here" />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select>
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
              <input type="text" placeholder="Add Subject Name Here" />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>
        </fieldset>
      )}

      <div className="navigateBtns">
        <Link href="/existing-student-form/parent-info" className="backBtn">
          Back
        </Link>
        <Link href="/existing-student-form/al-subjects" className="nextBtn">
          Next
        </Link>
      </div>
    </>
  );
};

export default Page;
