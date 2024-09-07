"use client";

import React from "react";
import Stepper from "awesome-react-stepper";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="wrapper">
        <div className="exisitingStudents">
          <h1 className="mainTitle">Apply as an Existing Student</h1>
          {children}
          <div className="footerGap"></div>
        </div>
      </main>
    </>
  );
};

export default Layout;
