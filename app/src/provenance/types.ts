export type DataBadge = "Observed" | "Derived" | "Scenario";

export interface Provenance {
  source?: string;
  resolution?: string;
  date?: string;
  license?: string;
}

export interface LayerSource {
  id: string;
  name: string;
  badge: DataBadge;
  source?: string;
  provenance?: Provenance;
}

export interface ModelConstant {
  name: string;
  value: number | string;
  unit?: string;
  source?: string;
  badge: DataBadge;
}
