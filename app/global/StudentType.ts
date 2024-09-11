import { create } from "zustand";

// Define the store with explicit types
interface StudentState {
  studentType: string;
  setStudentType: (newType: string) => void;
}

const useStudentType = create<StudentState>((set) => ({
  studentType: "",
  setStudentType: (newType) => set({ studentType: newType }),
}));

export default useStudentType;
