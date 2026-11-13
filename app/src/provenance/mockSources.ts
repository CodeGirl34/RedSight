import type {
  LayerSource,
  ModelConstant,
} from "./types";

export const mockLayers: LayerSource[] = [
  {
    id: "hirise",
    name: "HiRISE imagery",
    badge: "Observed",
    source: "NASA/JPL Mars Trek + ArcGIS mapping tutorial workflow",
    provenance: {
      source: "NASA HiRISE / Mars Reconnaissance Orbiter",
      resolution: "0.25 m/pixel",
      date: "Operational image set; tutorial workflow shared in the StoryMap",
      license: "NASA / public mission data",
    },
  },
  {
    id: "elevation",
    name: "Surface elevation model",
    badge: "Derived",
    source: "USGS Astrogeology + NASA HiRISE DEM pipeline",
    provenance: {
      source: "MOLA/HRSC blend and HiRISE stereo-derived DEM workflow",
      resolution: "1 m/pixel local DEM; ~200 m global context",
      date: "Mapping tutorial references long-lived public products",
      license: "Publicly released mission data",
    },
  },
  {
    id: "slope",
    name: "Slope and terrain risk layer",
    badge: "Derived",
    source: "Derived from local DEM with mission planning assumptions",
    provenance: {
      source: "RedSight offline processing from NASA terrain data",
      resolution: "Planning grid at ~5–10 m/pixel",
      date: "Mock planning layer for prototype UI",
      license: "Team prototype / not flight product",
    },
  },
  {
    id: "weather",
    name: "Local weather context",
    badge: "Observed",
    source: "Curiosity REMS / Mars rover instrument records",
    provenance: {
      source: "Curiosity REMS station and rover-local measurements",
      resolution: "Point measurement, hourly windows",
      date: "Mission data used for context only",
      license: "Public mission data",
    },
  },
];

export const mockConstants: ModelConstant[] = [
  {
    name: "Oxygen reserve",
    value: 20,
    unit: "L",
    source: "Project constants file + crew reserve assumption",
    badge: "Scenario",
  },
  {
    name: "Return margin",
    value: 1.2,
    unit: "×",
    source: "Team choice for modeled walk-back margin",
    badge: "Scenario",
  },
  {
    name: "Walk speed",
    value: 1.6,
    unit: "km/h",
    source: "Planning assumption from Mars EVA analog literature",
    badge: "Scenario",
  },
];
