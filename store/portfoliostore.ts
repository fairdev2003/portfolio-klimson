import { create } from "zustand";
import { persist } from "zustand/middleware";

type PortfolioStore = {
  sectionName: string;
};

type PortfolioStoreActions = {
    setSectionName: (sectionName: string) => void;
}

export const useStore = create<PortfolioStore & PortfolioStoreActions>()(
  persist(
    (set) => ({
      sectionName: "about",
      setSectionName: (sectionName: string) => set({ sectionName }),
    }),
    {
      name: "porttfolio-store",
    }
  )
);
