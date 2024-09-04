import React from "react";

const page = () => {
  return (
    <>
      <fieldset className="fieldSet">
        <legend>Parents Infomation - (Father)</legend>
        <div className="inputGroup">
          <label>Father&apos;s Name:</label>
          <input
            type="text"
            placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
          />
        </div>
        <div className="inputGroup">
          <label>Father&apos;s NIC Number</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
        <div className="inputGroup">
          <label>Father&apos;s Address</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
        <div className="inputGroup">
          <label>Father&apos;s job</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
      </fieldset>
      <fieldset className="fieldSet">
        <legend>Parents Infomation - (Mother)</legend>
        <div className="inputGroup">
          <label>Mother&apos;s Name:</label>
          <input
            type="text"
            placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
          />
        </div>
        <div className="inputGroup">
          <label>Mother&apos;s NIC Number</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
        <div className="inputGroup">
          <label>Mother&apos;s Address</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
        <div className="inputGroup">
          <label>Mother&apos;s job</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
      </fieldset>
      <fieldset className="fieldSet">
        <legend>Parents Infomation - (Guardian)</legend>
        <div className="inputGroup">
          <label>Guardian&apos;s Name:</label>
          <input
            type="text"
            placeholder="Athawuda Mudiyanselage Dinujaya Sandaruwan Bandara"
          />
        </div>
        <div className="inputGroup">
          <label>Guardian&apos;s NIC Number</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
        <div className="inputGroup">
          <label>Guardian&apos;s Address</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
        <div className="inputGroup">
          <label>Guardian&apos;s job</label>
          <input type="text" placeholder="A.M.D.S. Bandara" />
        </div>
      </fieldset>
    </>
  );
};

export default page;

// `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`, `&rdquo;`, `&ldquo`
