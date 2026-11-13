import type {
  DataBadge,
  LayerSource,
  ModelConstant,
} from "./types";

interface SourceCardProps {
  data: LayerSource | ModelConstant;
}

const badgeStyles: Record<DataBadge, string> = {
  Observed: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Derived: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Scenario: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

function Field({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="text-right text-slate-200">
        {value === undefined || value === null || value === ""
          ? "TBD"
          : value}
      </span>
    </div>
  );
}

export function SourceCard({ data }: SourceCardProps) {
  const isLayer = "provenance" in data || "id" in data;

  const source = isLayer
    ? (data as LayerSource).provenance?.source ?? (data as LayerSource).source ?? "TBD"
    : (data as ModelConstant).source ?? "TBD";

  const resolution = isLayer
    ? (data as LayerSource).provenance?.resolution
    : undefined;

  const date = isLayer
    ? (data as LayerSource).provenance?.date
    : undefined;

  const license = isLayer
    ? (data as LayerSource).provenance?.license
    : undefined;

  const value = !isLayer
    ? `${(data as ModelConstant).value}${(data as ModelConstant).unit ? ` ${(data as ModelConstant).unit}` : ""}`
    : undefined;

  return (
    <article className="rounded-xl border border-slate-700 bg-slate-900 p-4 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-white">{data.name}</h3>
          <p className="mt-1 text-xs text-slate-400">Data provenance</p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeStyles[data.badge]}`}
        >
          {data.badge}
        </span>
      </div>

      <div className="space-y-2">
        <Field label="Source" value={source} />

        {isLayer ? (
          <>
            <Field label="Resolution" value={resolution} />
            <Field label="Date" value={date} />
            <Field label="License" value={license} />
          </>
        ) : (
          <Field label="Value" value={value} />
        )}
      </div>
    </article>
  );
}
