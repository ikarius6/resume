import { create } from "zustand"

export const useLangStore = create((set) => ({
  isEnglish: false,
  setIsEnglish: (isEnglish) => set({ isEnglish })
}))