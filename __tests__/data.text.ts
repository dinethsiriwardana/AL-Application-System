import axios from "axios";
// import { v4 as uuidv4 } from "uuid";

describe("Student API Endpoints", () => {
  const studentId = Math.floor(Math.random() * 1000000);
  const baseUrl = "https://almayurapada.us-cdp2.choreoapps.dev/";
  // process.env.TEST_BASE_URL || "https://almayurapada.us-cdp2.choreoapps.dev/";

  beforeEach(() => {
    // Any setup code can go here
  });

  afterEach(() => {
    // Any cleanup code can go here
  });
  describe("Add All Student Data", () => {
    const testData = {
      olResults: {
        first_attempt: {
          mathematics: "A",
          science: "B",
          english: "C",
          history: "B",
          religion: "S",
          language: "A",
          firstsubname: "first",
          firstsubgrade: "A",
          secondsubname: "second",
          secondsubgrade: "B",
          thirdsubname: "third",
          thirdsubgrade: "F",
        },
      },
      parentInfo: {
        father: {
          name: "John Doe",
          nic_number: "123456789V",
          contact_number: 712345678,
          address: "123, Main Street, Colombo",
          job: "Engineer",
        },
        mother: {
          name: "Jane Doe",
          nic_number: "987654321V",
          contact_number: 776543210,
          address: "123, Main Street, Colombo",
          job: "Teacher",
        },
      },
      alSubjects: {
        stream: "technology",
        subject: [
          {
            subject1: "ET",
            medium: "Sinhala",
          },
          {
            subject2: "SFT",
            medium: "Sinhala",
          },
          {
            subject3: "IT",
            medium: "English",
          },
        ],
      },
      oldSchool: {
        name: "DCC",
        address: "Dambadeniya",
        zonal: "Giriulla",
        divisional: "",
        district: "Kurunegala",
      },
      oldclass: {
        indexno: 0,
        olClass: "",
        olClassTeacher: "",
      },
      olindexno: studentId.toString(),
      personalInfo: {
        fullname: "John",
        name_with_initials: "John Doe",
        birthday: "2006-01-01T00:00:00.000Z",
        age: 19,
        sex: "male",
        nic_number: 123456789,
        address: "123, Main Street, Colombo 05",
        email: "example@email.com",
        contact_number: 1234567890,
        whatsapp_number: 1234567890,
        distance_to_school: 5,
        transport_method: "bus",
        scholarship: "none",
      },
      email: "dinethsiriwardana28@gmail.com",
    };

    it("should add student data", async () => {
      try {
        const response = await axios.post(`${baseUrl}${studentId}`, testData);
        expect(response.status).toBe(200);
        expect(typeof response.data).toBe("object");
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Get Student Details", () => {
    it("should return student details", async () => {
      try {
        const response = await axios.get(`${baseUrl}${studentId}`);
        expect(response.status).toBe(200);
        expect(typeof response.data).toBe("object");
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Get All Students Details", () => {
    it("should return all students", async () => {
      try {
        const response = await axios.get(baseUrl);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data.studentList)).toBe(true);
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Get Student Result", () => {
    it("should return student result", async () => {
      try {
        const response = await axios.get(`${baseUrl}${studentId}/result`);
        expect(response.status).toBe(200);
        expect(typeof response.data).toBe("object");
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });
  describe("Delete Student Data", () => {
    it("should delete student data", async () => {
      try {
        const response = await axios.delete(`${baseUrl}${studentId}`);
        expect(response.status).toBe(200);
        expect(typeof response.data).toBe("object");
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });
});
