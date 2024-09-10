"use client";

import React, { useState } from "react";
import Link from "next/link";
import Stepper from "@/app/components/Stepper";
import useExStudentStore from "@/app/global/ExistingStudentData";
import useOLPageStore from "@/app/global/OLPageDataStore";

const Page = () => {
  const studentDetails = useExStudentStore((state) => state.studentDetails);
  const setOLResult = useExStudentStore((state) => state.setOLResult);
  const { olAttempt, olResultCorrect, setOlAttempt, setOlResultCorrect } =
    useOLPageStore();
  return (
    <>
      <Stepper pageNo={3} />

      <fieldset className="fieldSet">
        <legend>Get O/L Results</legend>
        <div className="inputGroup">
          <label>Last O/L Attempt</label>
          <select
            onChange={(event) => setOlAttempt(parseInt(event.target.value))}
            defaultValue={0}
          >
            <option value={0} disabled>
              Select your O/L attempt{" "}
            </option>
            <option value={1}>First attempt </option>
            <option value={2}>Second attempt</option>
          </select>
        </div>
      </fieldset>
      {olAttempt >= 1 && (
        <fieldset className="fieldSet">
          <legend>O/L Results - First Attempt</legend>
          <div className="inputGroup">
            <label>Index Number</label>
            <input
              type="number"
              placeholder="12345"
              value={studentDetails.olResults.first_attempt.indexNo}
              onChange={(event) =>
                setOLResult("first_attempt", "indexNo", event.target.value)
              }
            />
          </div>
          <div className="twoCols">
            <div className="inputGroup">
              <label>Maths</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "first_attempt",
                    "mathematics",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.first_attempt.mathematics}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Science</label>
              <select
                onChange={(event) =>
                  setOLResult("first_attempt", "science", event.target.value)
                }
                value={studentDetails.olResults.first_attempt.science}
              >
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
              <select
                onChange={(event) =>
                  setOLResult("first_attempt", "english", event.target.value)
                }
                value={studentDetails.olResults.first_attempt.english}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>History</label>
              <select
                onChange={(event) =>
                  setOLResult("first_attempt", "history", event.target.value)
                }
                value={studentDetails.olResults.first_attempt.history}
              >
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
              <select
                onChange={(event) =>
                  setOLResult("first_attempt", "religion", event.target.value)
                }
                value={studentDetails.olResults.first_attempt.religion}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Sinhala</label>
              <select
                onChange={(event) =>
                  setOLResult("first_attempt", "language", event.target.value)
                }
                value={studentDetails.olResults.first_attempt.language}
              >
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
              <input
                type="text"
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "first_attempt",
                    "firstsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.first_attempt.firstsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "first_attempt",
                    "firstsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.first_attempt.firstsubgrade}
              >
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
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "first_attempt",
                    "secondsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.first_attempt.secondsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "first_attempt",
                    "secondsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.first_attempt.secondsubgrade}
              >
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
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "first_attempt",
                    "thirdsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.first_attempt.thirdsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "first_attempt",
                    "thirdsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.first_attempt.thirdsubgrade}
              >
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
            <input
              type="number"
              placeholder="12345"
              value={studentDetails.olResults.second_attempt.indexNo}
              onChange={(event) =>
                setOLResult("second_attempt", "indexNo", event.target.value)
              }
            />
          </div>
          <div className="twoCols">
            <div className="inputGroup">
              <label>Maths</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "mathematics",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.mathematics}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Science</label>
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "science", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.science}
              >
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
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "english", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.english}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>History</label>
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "history", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.history}
              >
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
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "religion", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.religion}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Sinhala</label>
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "language", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.language}
              >
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
              <input
                type="text"
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "firstsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.firstsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "firstsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.firstsubgrade}
              >
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
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "secondsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.secondsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "secondsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.secondsubgrade}
              >
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
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "thirdsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.thirdsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "thirdsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.thirdsubgrade}
              >
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

      {olAttempt >= 1 && (
        <fieldset className="fieldSet">
          <legend>Change O/L Results</legend>
          <div className="inputGroup">
            <label>This O/L results are:</label>
            <select
              onChange={(event) => setOlResultCorrect(event.target.value)}
              value={olResultCorrect}
            >
              <option value="true">Correct</option>
              <option value="false">There are some mistakes</option>
            </select>
          </div>
        </fieldset>
      )}
      {olResultCorrect === "false" && (
        <fieldset className="fieldSet">
          <legend>O/L Results - Change</legend>
          <div className="inputGroup">
            <label>Index Number</label>
            <input
              type="number"
              placeholder="12345"
              value={studentDetails.olResults.correction.indexNo}
              onChange={(event) =>
                setOLResult("correction", "indexNo", event.target.value)
              }
            />
          </div>
          <div className="inputGroup">
            <label>Last O/L Attempt</label>
            <select
              value={studentDetails.olResults.correction.attempt}
              onChange={(event) =>
                setOLResult("correction", "attempt", event.target.value)
              }
            >
              <option value="first_attempt">First attempt </option>
              <option value="second_attempt">Second attempt</option>
            </select>
          </div>
          <div className="twoCols">
            <div className="inputGroup">
              <label>Maths</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "mathematics",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.mathematics}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Science</label>
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "science", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.science}
              >
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
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "english", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.english}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>History</label>
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "history", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.history}
              >
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
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "religion", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.religion}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="S">S</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="inputGroup">
              <label>Sinhala</label>
              <select
                onChange={(event) =>
                  setOLResult("second_attempt", "language", event.target.value)
                }
                value={studentDetails.olResults.second_attempt.language}
              >
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
              <input
                type="text"
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "firstsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.firstsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "firstsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.firstsubgrade}
              >
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
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "secondsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.secondsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "secondsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.secondsubgrade}
              >
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
                placeholder="Add Subject Name Here"
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "thirdsubname",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.thirdsubname}
              />
            </div>
            <div className="right">
              <label className="bucket-subject">Grade</label>
              <select
                onChange={(event) =>
                  setOLResult(
                    "second_attempt",
                    "thirdsubgrade",
                    event.target.value
                  )
                }
                value={studentDetails.olResults.second_attempt.thirdsubgrade}
              >
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
