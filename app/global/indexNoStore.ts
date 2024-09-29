import create from "zustand";

interface OLState {
  indexNo: string;
  setIndexNo: (indexNo: string) => void;
}

const indexNoStore = create<OLState>((set) => ({
  indexNo: "",
  setIndexNo: (indexNo) => set({ indexNo }),
}));

export default indexNoStore;
