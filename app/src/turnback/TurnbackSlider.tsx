import { useMemo, useState } from "react";
import { calculateTurnback } from "./turnback";
import type {
  RouteData,
  TurnbackConstants,
} from "./types";

interface TurnbackSliderProps {
  route: RouteData;
  constants: TurnbackConstants;
  onPointChange?: (
    lat: number,
    lon: number,
    index: number,
  ) => void;
  onResultChange?: (
    result: ReturnType<typeof calculateTurnback>,
  ) => void;
}

export function TurnbackSlider({
  route,
  constants,
  onPointChange,
  onResultChange,
}: TurnbackSliderProps) {
  const [budget, setBudget] = useState(route.budget_l);

  const result = useMemo(
    () => calculateTurnback(route, budget, constants),
    [route, budget, constants],
  );

  function handleChange(value: number) {
    setBudget(value);

    const next = calculateTurnback(route, value, constants);

    onPointChange?.(next.point.lat, next.point.lon, next.index);
    onResultChange?.(next);
  }

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold">Turn-back budget</h3>

        <span className="font-mono text-orange-400">
          {budget.toFixed(1)} L
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={route.budget_l}
        step={0.1}
        value={budget}
        onChange={(event) => handleChange(Number(event.target.value))}
        className="w-full cursor-pointer accent-orange-500"
        aria-label="Available oxygen budget"
      />

      <div className="flex justify-between text-xs text-slate-400">
        <span>Lower budget</span>
        <span>Higher budget</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-800 p-3">
          <p className="text-xs text-slate-400">Turn-back point</p>
          <p className="text-xl font-semibold text-white">
            {result.index + 1} / {route.coords.length}
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-3">
          <p className="text-xs text-slate-400">Modeled oxygen requirement</p>
          <p className="text-xl font-semibold text-white">
            {result.requiredOxygen.toFixed(1)} L
          </p>
        </div>
      </div>

      <div className="text-xs text-slate-400">
        Modeled estimate only. The turn-back point is calculated from the selected
        oxygen budget, reserve, and return margin.
      </div>
    </section>
  );
}
