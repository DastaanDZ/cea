import { Activity, InterviewExp } from "@prisma/client";
import { create } from "zustand";

interface ActivityStore {
  activities: Activity[];
  twoActivities: Activity[];
  addActivities: () => Promise<void>;
}

export const useActivityStore = create<ActivityStore>((set) => ({
  activities: [],
  twoActivities: [],
  addActivities: async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/activity`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const activities: Activity[] = await res.json(); // Corrected: invoke res.json()

      var sortedTwoActivities = activities.slice(0, 2);

      set({
        activities: activities,
        twoActivities: sortedTwoActivities,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
