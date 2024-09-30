import { create } from "zustand";

interface IndexState {
  watchIndexNo: string;
  setWatchIndexNo: (watchIndexNo: string) => void;
}

const useWatchIndexNoStore = create<IndexState>((set) => ({
  watchIndexNo: "",
  setWatchIndexNo: (watchIndexNo) => set({ watchIndexNo }),
}));

export default useWatchIndexNoStore;
