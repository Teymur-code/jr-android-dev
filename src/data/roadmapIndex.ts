import { Month } from "./types";
import { MONTH_DATA } from "./months";
import { WEEKS_1_10 } from "./weeks1_10";
import { WEEKS_11_20 } from "./weeks11_20";

export const getFullRoadmap = (): Month[] => {
  const allWeeks = [...WEEKS_1_10, ...WEEKS_11_20];
  
  return MONTH_DATA.map((month) => {
    // Each month contains exactly 4 weeks (e.g. Month 1: Weeks 1-4, Month 2: Weeks 5-8, etc.)
    const startWeekIdx = (month.id - 1) * 4;
    const endWeekIdx = startWeekIdx + 4;
    const monthWeeks = allWeeks.slice(startWeekIdx, endWeekIdx);
    
    return {
      ...month,
      weeks: monthWeeks
    };
  });
};

export * from "./types";
export * from "./months";
export * from "./weeks1_10";
export * from "./weeks11_20";
export { MONTH_DATA };
