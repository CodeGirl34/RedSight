
import type { RouteData } from "./types";

export const mockRoute: RouteData = {
  coords: Array.from({ length: 40 }, (_, i) => ({
    lat: -5.0 + i * 0.001,
    lon: 137.0 + i * 0.001,
  })),

  cum: {
    o2_l: Array.from(
      { length: 40 },
      (_, i) => i * (80 / 39)
    ),
  },

  back: {
    o2_l: Array.from(
      { length: 40 },
      (_, i) => 80 - i * (80 / 39)
    ),
  },

  budget_l: 288.8,
  pnr_index: 20,
};
