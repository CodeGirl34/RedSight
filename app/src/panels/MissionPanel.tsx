import { useState } from "react";

import { TurnbackSlider } from "../turnback";
import { SourceCard } from "../provenance";

import type { RouteData } from "../turnback";
import type { LayerSource, ModelConstant } from "../provenance";

interface MissionPanelProps {
  route: RouteData;
  constants: {
    oxygen_reserve_l: number;
    return_margin_fraction: number;
  };
  layers: LayerSource[];
  modelConstants: ModelConstant[];
  onTurnbackChange?: (
    lat: number,
    lon: number,
    index: number,
  ) => void;
}

export function MissionPanel({
  route,
  constants,
  layers,
  modelConstants,
  onTurnbackChange,
}: MissionPanelProps) {
  const [showSources, setShowSources] = useState(false);

  return (
    <aside className="w-full max-w-md space-y-5">
      <TurnbackSlider
        route={route}
        constants={constants}
        onPointChange={onTurnbackChange}
      />

      <button
        type="button"
        onClick={() => setShowSources(!showSources)}
        className="w-full rounded-lg border border-slate-700 p-3 text-sm text-white hover:bg-slate-800"
      >
        {showSources ? "Hide data sources" : "Show data sources"}
      </button>

      {showSources && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Map layer sources</h3>

          {layers.map((layer) => (
            <SourceCard key={layer.id} data={layer} />
          ))}

          <h3 className="text-white font-semibold">Model constants</h3>

          {modelConstants.map((constant) => (
            <SourceCard key={constant.name} data={constant} />
          ))}
        </div>
      )}
    </aside>
  );
}
