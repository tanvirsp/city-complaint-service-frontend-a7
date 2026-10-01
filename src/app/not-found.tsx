import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0A0E17] px-6 py-24 text-slate-200">
      {/* Ambient grid + vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0E17_75%)]" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-14 md:flex-row md:items-center md:justify-between">
        {/* Radar scope */}
        <div className="relative h-64 w-64 shrink-0 md:h-72 md:w-72">
          {/* outer ring */}
          <div className="absolute inset-0 rounded-full border border-slate-700/60" />
          {/* mid rings */}
          <div className="absolute inset-[16%] rounded-full border border-slate-700/40" />
          <div className="absolute inset-[34%] rounded-full border border-slate-700/30" />
          {/* crosshair */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-700/30" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-slate-700/30" />

          {/* rotating sweep */}
          <div className="absolute inset-0 animate-[spin_4s_linear_infinite] rounded-full overflow-hidden">
            <div
              className="h-full w-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(245,165,36,0.35) 0deg, rgba(245,165,36,0) 60deg)",
              }}
            />
          </div>

          {/* lost blip */}
          <div className="absolute left-[28%] top-[62%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/60" />
            <span className="relative block h-2.5 w-2.5 rounded-full bg-amber-400/40" />
          </div>

          {/* center dot */}
          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-500" />
        </div>

        {/* Copy */}
        <div className="flex max-w-md flex-col items-center gap-6 text-center md:items-start md:text-left">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-amber-400/80">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            NO CONTACT — ERR 404
          </div>

          <h1 className="font-serif text-6xl font-medium leading-none text-slate-50 md:text-7xl">
            NOT FOUND
          </h1>

          <p className="text-balance text-base leading-relaxed text-slate-400">
            The page you were tracking dropped off our grid. It may have changed
            course, been retired, or never filed a flight plan here at all.
          </p>

          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <Link
              href="/"
              className="rounded-md bg-amber-400 px-5 py-2.5 text-sm font-medium text-[#0A0E17] transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Return to base
            </Link>
            <a
              href="javascript:history.back()"
              className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              Go back
            </a>
          </div>

          <p className="mt-4 font-mono text-[11px] tracking-widest text-slate-600">
            LAST KNOWN ROUTE: /404 · STATUS: OFF COURSE
          </p>
        </div>
      </div>
    </main>
  );
}
