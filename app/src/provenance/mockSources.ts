
import type {
  LayerSource,
  ModelConstant,
} from "./types";

export const mockLayers: LayerSource[] = [
  {
    id: "hirise",
    name: "HiRISE Imagery",
    badge: "Observed",
    provenance: {
      source: "NASA HiRISE camera",
      resolution: "0.25 m/pixel",
      date: "TBD",
      license: "TBD",
    },
  },
  {
    id: "elevation",
    name: "Elevation Model",
    badge: "Derived",
    provenance: {
      source: "NASA terrain data",
      resolution: "1 m/pixel",
      date: "TBD",
      license: "TBD",
    },
  },
];

export const mockConstants: ModelConstant[] = [
  {
    name: "Oxygen reserve",
    value: 20,
    unit: "L",
    source: "Project constants",
    badge: "Scenario",
  },
];
