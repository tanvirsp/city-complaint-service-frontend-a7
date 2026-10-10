import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleX, RotateCcw, Home } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <div className="flex items-center justify-center mt-10 dark:bg-slate-950">
      <Card className="w-full max-w-lg border-red-200 shadow-xl dark:border-red-900">
        <CardContent className="space-y-8 p-8 text-center">
          {/* Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <CircleX className="h-14 w-14 text-red-600" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-red-600">
              Payment Cancelled
            </h1>

            <p className="text-muted-foreground">
              Your payment was not completed. No money has been charged to your
              account.
            </p>
          </div>

          {/* Information */}
          <div className="rounded-lg border bg-muted/30 p-4 text-left">
            <h3 className="mb-2 font-semibold">Possible Reasons</h3>

            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>You closed the payment window.</li>
              <li>The payment session expired.</li>
              <li>You cancelled the payment manually.</li>
              <li>The payment gateway encountered an issue.</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1">
              <Link href="/dashboard/rental-request">
                <RotateCcw className="mr-2 h-4 w-4" />
                Try Again
              </Link>
            </Button>

            <Button variant="outline" asChild className="flex-1">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Footer */}
          <p className="text-xs text-muted-foreground">
            If you continue experiencing payment issues, please contact support.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
