import create from "zustand";

interface OLState {
  olAttempt: number;
  olResultCorrect: string;
  setOlAttempt: (attempt: number) => void;
  setOlResultCorrect: (correct: string) => void;
}

const useOLPageStore = create<OLState>((set) => ({
  olAttempt: 0,
  olResultCorrect: "true",
  setOlAttempt: (attempt) => set({ olAttempt: attempt }),
  setOlResultCorrect: (correct) => set({ olResultCorrect: correct }),
}));

export default useOLPageStore;
