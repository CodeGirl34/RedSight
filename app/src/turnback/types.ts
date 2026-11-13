
export interface RoutePoint {
  lat: number;
  lon: number;
}

export interface RouteData {
  coords: RoutePoint[];
  cum: {
    o2_l: number[];
  };
  back: {
    o2_l: number[];
  };
  budget_l: number;
  pnr_index: number;
}

export interface TurnbackConstants {
  oxygen_reserve_l: number;
  return_margin_fraction: number;
}

export interface TurnbackResult {
  index: number;
  point: RoutePoint;
  outboundOxygen: number;
  returnOxygen: number;
  requiredOxygen: number;
  availableOxygen: number;
}
