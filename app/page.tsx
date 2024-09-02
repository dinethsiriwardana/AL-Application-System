"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import bgImg from "@images/home_bg.jpg";
import schoolBadge from "@images/badge.png";
import DBLoading from "./components/DBLoading";
import DBAnimateJson from "@animations/searchDb.json";
import DBSearchDoneJson from "@animations/DBSearchDone.json";
import IndexNoForm from "./components/IndexNoForm";
import { useState } from "react";
import { LottieFile } from "./interfaces/lotteInterface";
import useStudentType from "./global/StudentType";
import { ToastContainer, toast } from "react-toastify";
import Model from "./components/Model";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [animation, setAnimation] = useState<LottieFile>();
  const [loadingText, setLoadingText] = useState("");
  const { studentType } = useStudentType();
  const router = useRouter();
  const goToNextPage = (type: string) => {
    // router.push("/personal-info");
    setAnimation(DBAnimateJson);
    setLoadingText("Searching in the Database");
    setLoading(true);
    setTimeout(() => {
      setAnimation(DBSearchDoneJson);
      setLoadingText(`Identified the as a ${type}`);
    }, 3000);
    setTimeout(() => {
      setLoading(false);
      router.push("/existing-student-form/personal-info");
    }, 6000);
  };
  return (
    <>
      {loading && animation && (
        <DBLoading title={loadingText} lotteFile={animation} />
      )}
      <Model />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <main className="main">
        <aside className="main__left-and-write">
          <Image
            src={schoolBadge}
            alt="School Badge"
            className="school-badge"
          />
          <h4 className="sub-heading-top">Welcome to</h4>
          <h3 className="main-heading">
            Online Application Portal Of Mayurapada Central College
          </h3>
          <h4 className="sub-heading-bottom">For Advanced-Level Exam 2026</h4>
          <IndexNoForm callBack={goToNextPage} />
          <div className="already-applied">
            Do you already appliy for this?{" "}
            <span className="check-data-btn">CLICK HERE</span> to check your
            submited details
          </div>
        </aside>
        <aside className="main__left-and-write">
          <Image
            src={bgImg}
            alt="background"
            className="bg-image"
            objectFit="cover"
          />
        </aside>

        <footer className="footer">
          Copyright &copy; Mayurapada Central College: All rights resived.
        </footer>
      </main>
    </>
  );
}
