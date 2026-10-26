import { useState } from "react";
import { MapPin, Plane } from "lucide-react";
import mapImg from "@/assets/world-map.jpg";
import { MAP_ORIGIN, REGIONS } from "./data";
import { Reveal } from "./Reveal";

/** Global reach: stylised world map with animated shipping lines and hover tooltips. */
export function GlobalReach() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="reach" className="scroll-mt-24 bg-ivory py-20 sm:py-28" aria-label="Global reach">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Global Reach</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-forest sm:text-5xl">
            From Indian farms to the world's shelves
          </h2>
          <p className="mt-4 text-muted-foreground">
            Regular consignments by sea and air, complete export documentation, and a team that keeps
            you informed at every port.
          </p>
        </Reveal>

        <Reveal delay={150} className="relative mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-card shadow-luxe">
            <img
              src={mapImg}
              alt="World map showing Nutvana's export destinations from India"
              loading="lazy"
              width={1920}
              height={768}
              className="w-full object-cover"
            />

            {/* SVG route lines from India */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {REGIONS.map((r) => {
                const mx = (MAP_ORIGIN.x + r.x) / 2;
                const my = Math.min(MAP_ORIGIN.y, r.y) - 7;
                return (
                  <path
                    key={r.name}
                    d={`M ${MAP_ORIGIN.x} ${MAP_ORIGIN.y} Q ${mx} ${my} ${r.x} ${r.y}`}
                    fill="none"
                    stroke="oklch(0.66 0.13 78)"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                    className="map-line"
                    opacity={hover && hover !== r.name ? 0.25 : 0.9}
                  />
                );
              })}
              {REGIONS.map((r) => (
                <circle
                  key={`dot-${r.name}`}
                  cx={r.x}
                  cy={r.y}
                  r="0.7"
                  fill="oklch(0.79 0.14 85)"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {/* Origin marker */}
            <div
              className="absolute z-10"
              style={{ left: `${MAP_ORIGIN.x}%`, top: `${MAP_ORIGIN.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span className="marker-pulse absolute h-5 w-5 rounded-full bg-gold/60" />
                <MapPin className="h-5 w-5 text-gold drop-shadow" aria-hidden="true" />
              </span>
              <span className="absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-light shadow-luxe">
                India · Anant Overseas
              </span>
            </div>

            {/* Destination markers with tooltips */}
            {REGIONS.map((r) => (
              <button
                key={r.name}
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
                onMouseEnter={() => setHover(r.name)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(r.name)}
                onBlur={() => setHover(null)}
                aria-label={`${r.name}: ${r.note}`}
              >
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="marker-pulse absolute h-4 w-4 rounded-full bg-gold/50" />
                  <span className="h-2.5 w-2.5 rounded-full gold-grad shadow-gold" />
                </span>
                {hover === r.name && (
                  <span
                    role="tooltip"
                    className="absolute bottom-6 left-1/2 z-20 w-44 -translate-x-1/2 rounded-xl bg-forest px-3 py-2 text-center shadow-luxe"
                  >
                    <span className="block text-xs font-bold uppercase tracking-wider text-gold-light">{r.name}</span>
                    <span className="mt-0.5 block text-[11px] leading-snug text-ivory/80">{r.note}</span>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Destination chips */}
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {REGIONS.map((r) => (
              <li
                key={r.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-forest"
              >
                <Plane className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                {r.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
