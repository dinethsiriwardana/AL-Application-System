import create from "zustand";

// Define types for our data structure
type StudentType = "Existing Student" | "New Student";

type OLResult = {
  mathematics: string;
  science: string;
  english: string;
  history: string;
  religion: string;
  language: string;
  firstsubname: string;
  firstsubgrade: string;
  secondsubname: string;
  secondsubgrade: string;
  thirdsubname: string;
  thirdsubgrade: string;
};

type ParentInfo = {
  name: string;
  nic_number: string;
  contact_number: number;
  address: string;
  job: string;
};

type ALSubject = {
  subject: string;
  medium: string;
};

type StudentState = {
  studentType: StudentType;
  studentDetails: {
    _id: string;
    olResults: {
      first_attempt: OLResult;
    };
    parentInfo: {
      father: ParentInfo;
      mother: ParentInfo;
    };
    alSubjects: {
      stream: string;
      subject: ALSubject[];
    };
    oldSchool: {
      name: string;
      address: string;
      zonal: string;
      divisional: string;
      district: string;
    };
    oldclass: {
      indexno: number;
      olClass: string;
      olClassTeacher: string;
    };
    olindexno: string;
    personalInfo: {
      fullname: string;
      name_with_initials: string;
      birthday: string;
      age: number;
      sex: string;
      nic_number: number;
      address: string;
      email: string;
      contact_number: number;
      whatsapp_number: number;
      distance_to_school: number;
      transport_method: string;
      scholarship: string;
    };
    email: string;
  };
};

type StudentActions = {
  setStudentType: (type: StudentType) => void;
  setOLResult: (
    attempt: "first_attempt",
    subject: keyof OLResult,
    grade: string
  ) => void;
  setParentInfo: (
    parent: "father" | "mother",
    field: keyof ParentInfo,
    value: string | number
  ) => void;
  setALSubjects: (stream: string, subjects: ALSubject[]) => void;
  setPersonalInfo: (
    field: keyof StudentState["studentDetails"]["personalInfo"],
    value: string | number
  ) => void;
  setOldSchool: (
    field: keyof StudentState["studentDetails"]["oldSchool"],
    value: string
  ) => void;
  setOldClass: (
    field: keyof StudentState["studentDetails"]["oldclass"],
    value: string | number
  ) => void;
  setOLIndexNo: (indexNo: string) => void;
  setEmail: (email: string) => void;
};

// Create the store
const useExStudentStore = create<StudentState & StudentActions>((set) => ({
  studentType: "Existing Student",
  studentDetails: {
    _id: "",
    olResults: {
      first_attempt: {
        mathematics: "",
        science: "",
        english: "",
        history: "",
        religion: "",
        language: "",
        firstsubname: "",
        firstsubgrade: "",
        secondsubname: "",
        secondsubgrade: "",
        thirdsubname: "",
        thirdsubgrade: "",
      },
    },
    parentInfo: {
      father: {
        name: "",
        nic_number: "",
        contact_number: 0,
        address: "",
        job: "",
      },
      mother: {
        name: "",
        nic_number: "",
        contact_number: 0,
        address: "",
        job: "",
      },
    },
    alSubjects: {
      stream: "",
      subject: [],
    },
    oldSchool: {
      name: "",
      address: "",
      zonal: "",
      divisional: "",
      district: "",
    },
    oldclass: {
      indexno: 0,
      olClass: "",
      olClassTeacher: "",
    },
    olindexno: "",
    personalInfo: {
      fullname: "",
      name_with_initials: "",
      birthday: "",
      age: 0,
      sex: "",
      nic_number: 0,
      address: "",
      email: "",
      contact_number: 0,
      whatsapp_number: 0,
      distance_to_school: 0,
      transport_method: "",
      scholarship: "",
    },
    email: "",
  },

  // Actions
  setStudentType: (type) => set({ studentType: type }),
  setOLResult: (attempt, subject, grade) =>
    set((state) => ({
      studentDetails: {
        ...state.studentDetails,
        olResults: {
          ...state.studentDetails.olResults,
          [attempt]: {
            ...state.studentDetails.olResults[attempt],
            [subject]: grade,
          },
        },
      },
    })),
  setParentInfo: (parent, field, value) =>
    set((state) => ({
      studentDetails: {
        ...state.studentDetails,
        parentInfo: {
          ...state.studentDetails.parentInfo,
          [parent]: {
            ...state.studentDetails.parentInfo[parent],
            [field]: value,
          },
        },
      },
    })),
  setALSubjects: (stream, subjects) =>
    set((state) => ({
      studentDetails: {
        ...state.studentDetails,
        alSubjects: {
          stream,
          subject: subjects,
        },
      },
    })),
  setPersonalInfo: (field, value) =>
    set((state) => ({
      studentDetails: {
        ...state.studentDetails,
        personalInfo: {
          ...state.studentDetails.personalInfo,
          [field]: value,
        },
      },
    })),
  setOldSchool: (field, value) =>
    set((state) => ({
      studentDetails: {
        ...state.studentDetails,
        oldSchool: {
          ...state.studentDetails.oldSchool,
          [field]: value,
        },
      },
    })),
  setOldClass: (field, value) =>
    set((state) => ({
      studentDetails: {
        ...state.studentDetails,
        oldclass: {
          ...state.studentDetails.oldclass,
          [field]: value,
        },
      },
    })),
  setOLIndexNo: (indexNo) =>
    set((state) => ({
      studentDetails: {
        ...state.studentDetails,
        olindexno: indexNo,
      },
    })),
  setEmail: (email) =>
    set((state) => ({
      studentDetails: {
        ...state.studentDetails,
        email,
      },
    })),
}));

export default useExStudentStore;
