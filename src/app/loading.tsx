import { Loader2 } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6">
      {/* Spinner */}
      <div className="rounded-full border border-border bg-background p-6 shadow-md">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>

      {/* Loading Text */}
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Loading...</h2>

        <p className="text-sm text-muted-foreground">
          Please wait while we prepare your experience.
        </p>
      </div>

      <div className="flex gap-2">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary" />
      </div>
    </div>
  );
}
