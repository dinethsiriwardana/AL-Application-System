"use client";

import useExStudentStore from "@/app/global/ExistingStudentData";
import React from "react";

const AllData = () => {
  const studentDetails = useExStudentStore((state) => state.studentDetails);
  console.log(studentDetails);
  return (
    <div className="allDataTable">
      <h2>O/L Class Infomation</h2>
      <table>
        <thead>
          <tr>
            <th>Feild</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>O/L Class</td>
            <td>{studentDetails.oldclass.olClass}</td>
          </tr>
          <tr>
            <td>O/L Class Teacher</td>
            <td>{studentDetails.oldclass.olClassTeacher}</td>
          </tr>
        </tbody>
      </table>
      <h2>Personal Information</h2>
      <table>
        <thead>
          <tr>
            <th>Feild</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{studentDetails.personalInfo.fullname}</td>
          </tr>
          <tr>
            <td>Name With Initials</td>
            <td>{studentDetails.personalInfo.name_with_initials}</td>
          </tr>
          <tr>
            <td>Birth Day</td>
            <td>{studentDetails.personalInfo.birthday}</td>
          </tr>
          <tr>
            <td>Age as on (1-1-2024)</td>
            <td>{studentDetails.personalInfo.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{studentDetails.personalInfo.sex}</td>
          </tr>
          <tr>
            <td>NIC Number</td>
            <td>{studentDetails.personalInfo.nic_number}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{studentDetails.personalInfo.address}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{studentDetails.email}</td>
          </tr>
          <tr>
            <td>Contact Number</td>
            <td>{studentDetails.personalInfo.contact_number}</td>
          </tr>
          <tr>
            <td>Whatsapp Number</td>
            <td>{studentDetails.personalInfo.whatsapp_number}</td>
          </tr>
          <tr>
            <td>Distance To School</td>
            <td>{studentDetails.personalInfo.distance_to_school}</td>
          </tr>
          <tr>
            <td>Transport Method</td>
            <td>{studentDetails.personalInfo.transport_method}</td>
          </tr>
          <tr>
            <td>Scholarship</td>
            <td>{studentDetails.personalInfo.scholarship}</td>
          </tr>
          <tr>
            <td>Additional Victories</td>
            <td>{studentDetails.personalInfo.victories}</td>
          </tr>
        </tbody>
      </table>

      <h2>Parents Information - (Father)</h2>
      <table>
        <thead>
          <tr>
            <th>Feild</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Father&apos;s Full Name</td>
            <td>{studentDetails.parentInfo.father.name}</td>
          </tr>
          <tr>
            <td>Father&apos;s NIC Number</td>
            <td>{studentDetails.parentInfo.father.nic_number}</td>
          </tr>
          <tr>
            <td>Father&apos;s Address</td>
            <td>{studentDetails.parentInfo.father.address}</td>
          </tr>
          <tr>
            <td>Father&apos;s Contact No.</td>
            <td>{studentDetails.parentInfo.father.contact_number}</td>
          </tr>
          <tr>
            <td>Father&apos;s Job</td>
            <td>{studentDetails.parentInfo.father.job}</td>
          </tr>
        </tbody>
      </table>
      <h2>Parents Information - (Mother)</h2>
      <table>
        <thead>
          <tr>
            <th>Feild</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mother&apos;s Name</td>
            <td>{studentDetails.parentInfo.mother.name}</td>
          </tr>
          <tr>
            <td>Mother&apos;s NIC Number</td>
            <td>{studentDetails.parentInfo.mother.nic_number}</td>
          </tr>
          <tr>
            <td>Mother&apos;s Address</td>
            <td>{studentDetails.parentInfo.mother.address}</td>
          </tr>
          <tr>
            <td>Mother&apos;s Contact No.</td>
            <td>{studentDetails.parentInfo.mother.contact_number}</td>
          </tr>
          <tr>
            <td>Mother&apos;s job</td>
            <td>{studentDetails.parentInfo.mother.job}</td>
          </tr>
        </tbody>
      </table>
      <h2>Parents Information - (Guardian)</h2>
      <table>
        <thead>
          <tr>
            <th>Feild</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Guardian&apos;s Name</td>
            <td>{studentDetails.parentInfo.guardian.name}</td>
          </tr>
          <tr>
            <td>Guardian&apos;s NIC Number</td>
            <td>{studentDetails.parentInfo.guardian.nic_number}</td>
          </tr>
          <tr>
            <td>Guardian&apos;s Address</td>
            <td>{studentDetails.parentInfo.guardian.address}</td>
          </tr>
          <tr>
            <td>Guardian&apos;s Contact No.</td>
            <td>{studentDetails.parentInfo.guardian.contact_number}</td>
          </tr>
          <tr>
            <td>Guardian&apos;s job</td>
            <td>{studentDetails.parentInfo.guardian.job}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllData;

{
  /* <h2></h2>
      <table>
        <thead>
          <tr>
            <th>Feild</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{studentDetails}</td>
          </tr>
        </tbody>
      </table> */
}
