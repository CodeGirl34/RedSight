
import type {
  RouteData,
  TurnbackConstants,
  TurnbackResult,
} from "./types";

export function calculateTurnback(
  route: RouteData,
  userBudget: number,
  constants: TurnbackConstants
): TurnbackResult {
  const length = Math.min(
    route.coords.length,
    route.cum.o2_l.length,
    route.back.o2_l.length
  );

  if (length === 0) {
    throw new Error("Route contains no usable points.");
  }

  const reserve = Math.max(0, constants.oxygen_reserve_l);
  const margin = Math.max(0, constants.return_margin_fraction);

  const availableOxygen = Math.max(0, userBudget - reserve);

  let selectedIndex = 0;

  for (let i = 0; i < length; i++) {
    const outbound = route.cum.o2_l[i];
    const returnOxygen = route.back.o2_l[i];

    const requiredOxygen =
      outbound + returnOxygen * (1 + margin);

    if (
      Number.isFinite(requiredOxygen) &&
      requiredOxygen <= availableOxygen
    ) {
      selectedIndex = i;
    }
  }

  const outboundOxygen = route.cum.o2_l[selectedIndex];
  const returnOxygen = route.back.o2_l[selectedIndex];

  return {
    index: selectedIndex,
    point: route.coords[selectedIndex],
    outboundOxygen,
    returnOxygen,
    requiredOxygen:
      outboundOxygen + returnOxygen * (1 + margin),
    availableOxygen,
  };
}
