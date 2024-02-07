import { InterviewExp, Resources } from "@prisma/client";
import { create } from "zustand";

interface ResourceStore {
  resources: Resources[];
  addResources: () => Promise<void>;
}

export const useResourceStore = create<ResourceStore>((set) => ({
  resources: [],
  addResources: async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/resource`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: Resources[] = await res.json(); // Corrected: invoke res.json()
      console.log("DATA UPDATED IN ZUSTAND STATE");
      set({
        resources: data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
