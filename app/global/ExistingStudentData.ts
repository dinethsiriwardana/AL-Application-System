import create from "zustand";

// Define types for the data structure
type Basket = {
  subject: string;
  grade: string;
};

type Attempt = {
  indexNo: string;
  maths: number;
  science: number;
  english: number;
  history: number;
  religion: number;
  sinhala: number;
  baskets: Basket[];
};

type PersonalInfo = {
  fullname: string;
  nameWithInitials: string;
  birthday: string;
  age: number;
  sex: string;
  nicNumber: number;
  address: string;
  email: string;
  contactNumber: number;
  whatsappNumber: number;
  distanceToSchool: number;
  transportMethod: string;
  scholarship: string;
};

type ParentInfo = {
  name: string;
  nicNumber: number;
  contactNumber: number;
  address: string;
  job: string;
};

type ParentData = {
  father: ParentInfo;
  mother: ParentInfo;
  guardian: ParentInfo;
};

type ALSubjects = {
  subject: string;
  grades: Basket[];
};

type State = {
  indexno: string;
  olClass: string;
  olClassTeacher: string;
  personalInfo: PersonalInfo;
  olResults: {
    firstAttempt: Attempt;
    secondAttempt: Attempt;
  };
  parentInfo: ParentData;
  alSubjects: ALSubjects;

  // Setters for updating each field
  setIndexNo: (indexno: string) => void;
  setOlClass: (olClass: string) => void;
  setOlClassTeacher: (olClassTeacher: string) => void;
  setPersonalInfo: (field: keyof PersonalInfo, value: string | number) => void;
  setOlFirstAttempt: (
    field: keyof Attempt,
    value: string | number | Basket[]
  ) => void;
  setOlSecondAttempt: (
    field: keyof Attempt,
    value: string | number | Basket[]
  ) => void;
  setParentInfo: (
    parentType: keyof ParentData,
    field: keyof ParentInfo,
    value: string | number
  ) => void;
  setAlSubjects: (field: keyof ALSubjects, value: string | Basket[]) => void;
};

const setExistingStudentData = create<State>((set) => ({
  // Initial state
  indexno: "",
  olClass: "",
  olClassTeacher: "",
  personalInfo: {
    fullname: "",
    nameWithInitials: "",
    birthday: "",
    age: 0,
    sex: "",
    nicNumber: 0,
    address: "",
    email: "",
    contactNumber: 0,
    whatsappNumber: 0,
    distanceToSchool: 0,
    transportMethod: "",
    scholarship: "",
  },
  olResults: {
    firstAttempt: {
      indexNo: "",
      maths: 0,
      science: 0,
      english: 0,
      history: 0,
      religion: 0,
      sinhala: 0,
      baskets: [],
    },
    secondAttempt: {
      indexNo: "",
      maths: 0,
      science: 0,
      english: 0,
      history: 0,
      religion: 0,
      sinhala: 0,
      baskets: [],
    },
  },
  parentInfo: {
    father: {
      name: "",
      nicNumber: 0,
      contactNumber: 0,
      address: "",
      job: "",
    },
    mother: {
      name: "",
      nicNumber: 0,
      contactNumber: 0,
      address: "",
      job: "",
    },
    guardian: {
      name: "",
      nicNumber: 0,
      contactNumber: 0,
      address: "",
      job: "",
    },
  },
  alSubjects: {
    subject: "",
    grades: [],
  },

  // Setters for updating each field
  setIndexNo: (indexno) => set({ indexno }),
  setOlClass: (olClass) => set({ olClass }),
  setOlClassTeacher: (olClassTeacher) => set({ olClassTeacher }),

  setPersonalInfo: (field, value) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, [field]: value },
    })),

  setOlFirstAttempt: (field, value) =>
    set((state) => ({
      olResults: {
        ...state.olResults,
        firstAttempt: { ...state.olResults.firstAttempt, [field]: value },
      },
    })),

  setOlSecondAttempt: (field, value) =>
    set((state) => ({
      olResults: {
        ...state.olResults,
        secondAttempt: { ...state.olResults.secondAttempt, [field]: value },
      },
    })),

  setParentInfo: (parentType, field, value) =>
    set((state) => ({
      parentInfo: {
        ...state.parentInfo,
        [parentType]: { ...state.parentInfo[parentType], [field]: value },
      },
    })),

  setAlSubjects: (field, value) =>
    set((state) => ({
      alSubjects: { ...state.alSubjects, [field]: value },
    })),
}));

export default setExistingStudentData;
