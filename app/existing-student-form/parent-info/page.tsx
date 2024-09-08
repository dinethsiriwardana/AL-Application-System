import React from "react";
import Link from "next/link";
import Stepper from "@/app/components/Stepper";

const page = () => {
  return (
    <>
      <Stepper pageNo={2} />
      <fieldset className="fieldSet">
        <legend>Parents Infomation - (Father)</legend>
        <div className="inputGroup">
          <label>Father&apos;s Full Name</label>
          <input
            type="text"
            placeholder="Amarasinha Mudiyanselage Susantha Chandrasiri"
          />
        </div>
        <div className="inputGroup">
          <label>Father&apos;s NIC Number</label>
          <input type="text" placeholder="123456789V" />
        </div>
        <div className="inputGroup">
          <label>Father&apos;s Address</label>
          <input
            type="text"
            placeholder="Ihala Dalupothagama, Katupotha (60350)"
          />
        </div>
        <div className="inputGroup">
          <label>Father&apos;s Job</label>
          <input type="text" placeholder="Doctor" />
        </div>
      </fieldset>
      <fieldset className="fieldSet">
        <legend>Parents Infomation - (Mother)</legend>
        <div className="inputGroup">
          <label>Mother&apos;s Name</label>
          <input
            type="text"
            placeholder="Galmangodage Chandani Priyanka Herath"
          />
        </div>
        <div className="inputGroup">
          <label>Mother&apos;s NIC Number</label>
          <input type="text" placeholder="123456789V" />
        </div>
        <div className="inputGroup">
          <label>Mother&apos;s Address</label>
          <input
            type="text"
            placeholder="Ihala Dalupothagama, Katupotha (60350)"
          />
        </div>
        <div className="inputGroup">
          <label>Mother&apos;s job</label>
          <input type="text" placeholder="House Wife" />
        </div>
      </fieldset>
      <fieldset className="fieldSet">
        <legend>Parents Infomation - (Guardian)</legend>
        <div className="inputGroup">
          <label>Guardian&apos;s Name:</label>
          <input
            type="text"
            placeholder="Amarasinha Mudiyanselage Susantha Chandrasiri"
          />
        </div>
        <div className="inputGroup">
          <label>Guardian&apos;s NIC Number</label>
          <input type="text" placeholder="123456789V" />
        </div>
        <div className="inputGroup">
          <label>Guardian&apos;s Address</label>
          <input
            type="text"
            placeholder="Ihala Dalupothagama, Katupotha (60350)"
          />
        </div>
        <div className="inputGroup">
          <label>Guardian&apos;s job</label>
          <input type="text" placeholder="Engineer" />
        </div>
      </fieldset>
      <div className="navigateBtns">
        <Link href="/existing-student-form/personal-info" className="backBtn">
          Back
        </Link>
        <Link href="/existing-student-form/ol-results" className="nextBtn">
          Next
        </Link>
      </div>
    </>
  );
};

export default page;

// `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`, `&rdquo;`, `&ldquo`
