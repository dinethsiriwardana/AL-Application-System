import Image from "next/image";
import bgImg from "@images/home_bg.jpg";
import schoolBadge from "@images/badge.png";

export default function Home() {
  return (
    <main className="main">
      <aside className="main__left-and-write">
        <Image src={schoolBadge} alt="School Badge" className="school-badge" />
        <h4 className="sub-heading-top">Welcome to</h4>
        <h3 className="main-heading">
          Online Application Portal Of Mayurapada Central College
        </h3>
        <h4 className="sub-heading-bottom">For Advanced-Level Exam 2026</h4>
        <div className="form">
          <input type="text" name="text" autoComplete="off" required />
          <label htmlFor="text" className="label-name">
            <span className="content-name">Enter Index No.</span>
          </label>
        </div>
        <button className="submit-button">
          <span>Apply Now</span>
        </button>

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
  );
}
