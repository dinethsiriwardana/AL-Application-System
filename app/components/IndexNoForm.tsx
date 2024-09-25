"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import setExistingStudentData from "../global/ExistingStudentData";
import useStudentType from "../global/StudentType";
import useExStudentStore from "../global/ExistingStudentData";

interface Props {
  callBack: (type: string) => void;
}

const IndexNoForm = ({ callBack }: Props) => {
  // const { setStudentType } = useStudentType();
  const [newIndexNo, setNewIndexNo] = useState("");
  // const [studentType, setStudentType] = useState("");
  const { setOLResult, setPersonalInfo } = useExStudentStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIndexNo(e.target.value); // Update local state with input value
  };

  const updateIndexNo = async () => {
    try {
      const studentData = await axios.get(`/api/${newIndexNo}`);
      console.log(newIndexNo);
      // console.log(studentData.data.studentType);
      if (studentData.data.studentType == "ExistingStudent") {
        try {
          const olResult = await axios.get(`/api/${newIndexNo}/result`);
          // console.log(olResult.data.studentdetails[0]);
          console.log(olResult.data.studentdetails[0].name);

          const OlData = olResult.data.studentdetails[0];

          setPersonalInfo("fullname", OlData.name);

          const attmpt = "first_attempt";

          setOLResult(attmpt, "indexNo", OlData.indexno);
          setOLResult(attmpt, "mathematics", OlData);
          setOLResult(attmpt, "science", OlData.science);
          setOLResult(attmpt, "english", OlData.english);
          setOLResult(attmpt, "history", OlData.history);
          setOLResult(attmpt, "religion", OlData.religion);
          setOLResult(attmpt, "language", OlData.language);
          setOLResult(attmpt, "firstsubname", OlData.firstsubname);
          setOLResult(attmpt, "firstsubgrade", OlData.firstsubgrade);
          setOLResult(attmpt, "secondsubname", OlData.secondsubname);
          setOLResult(attmpt, "secondsubgrade", OlData.secondsubgrade);
          setOLResult(attmpt, "thirdsubname", OlData.thirdsubname);
          setOLResult(attmpt, "thirdsubgrade", OlData.thirdsubgrade);
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }

        // setOLResult("first_attempt", "indexNo", newIndexNo);
        callBack("Existing Student");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <div className="form">
        <input
          type="number"
          name="text"
          autoComplete="off"
          required
          value={newIndexNo}
          onChange={handleInputChange}
        />
        <label htmlFor="text" className="label-name">
          <span className="content-name">Enter Index No.</span>
        </label>
      </div>
      <button className="submit-button" onClick={updateIndexNo}>
        <span>Apply Now</span>
      </button>
    </>
  );
};

export default IndexNoForm;
