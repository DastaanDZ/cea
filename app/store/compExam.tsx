import { CompetitiveExam } from "@prisma/client";
import { create } from "zustand";

interface CompetitiveExamStore {
  compExam: CompetitiveExam[];
  addCompetitiveExam: () => Promise<void>;
}

export const useCompExamStore = create<CompetitiveExamStore>((set) => ({
  compExam: [],
  addCompetitiveExam: async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/compExam`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: CompetitiveExam[] = await res.json(); // Corrected: invoke res.json()
      console.log("DATA UPDATED IN ZUSTAND STATE");
      set({
        compExam: data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
