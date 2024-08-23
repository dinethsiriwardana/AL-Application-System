import React from "react";

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
