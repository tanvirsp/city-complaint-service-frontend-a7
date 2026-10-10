import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Construction,
  House,
  ShieldCheck,
  Wrench,
  Menu,
  Users,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const services = [
  {
    title: "Report a Complaint",
    description:
      "Report broken roads, drainage issues, waste and other community problems.",
    icon: Construction,
    color: "bg-emerald-100 text-emerald-700",
    href: "/citizen/complaints",
  },
  {
    title: "Home Repair",
    description:
      "Request professional help for plumbing, electrical and home repairs.",
    icon: House,
    color: "bg-blue-100 text-blue-700",
    href: "/citizen/services",
  },
  {
    title: "Technical Services",
    description:
      "Get assistance with AC repair and other technical maintenance services.",
    icon: Wrench,
    color: "bg-violet-100 text-violet-700",
    href: "/citizen/services",
  },
  {
    title: "Track Your Requests",
    description:
      "View complaint status and follow the progress of your service requests.",
    icon: ClipboardList,
    color: "bg-amber-100 text-amber-700",
    href: "/citizen/dashboard",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit a Request",
    description: "Describe your issue or choose the service you need.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Get Assigned",
    description:
      "Your request is reviewed and assigned to the appropriate staff.",
    icon: Users,
  },
  {
    number: "03",
    title: "Track Progress",
    description: "Follow updates until your complaint or service is completed.",
    icon: CheckCircle2,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Section 1: Hero */}
      <section className="overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div>
            <Badge className="border-0 bg-emerald-100 px-4 py-2 text-emerald-700 hover:bg-emerald-100">
              <ShieldCheck className="mr-2 size-4" />
              Building a Better Community
            </Badge>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your City.
              <br />
              Your Voice.
              <br />
              <span className="text-emerald-600">Better Services.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Report community problems, request reliable home services and
              track your requests — all in one convenient platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Link href="/citizen/complaints">
                  Report a Complaint
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="/citizen/services">Request a Service</Link>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="size-5 text-emerald-600" />
              Simple, transparent and accessible to everyone
            </div>
          </div>

          {/* Hero visual — no external image required */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-8 top-8 size-32 rounded-full bg-emerald-200/60 blur-3xl" />
            <div className="absolute -right-6 bottom-6 size-32 rounded-full bg-blue-200/70 blur-3xl" />

            <div className="relative rounded-3xl border border-white bg-white/90 p-5 shadow-2xl shadow-emerald-900/10 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Welcome to your city</p>
                  <h2 className="mt-1 text-xl font-bold">How can we help?</h2>
                </div>

                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <House className="size-7" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <Link href="/citizen/complaints">
                  <Card className="transition hover:border-emerald-300 hover:shadow-md">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                        <Construction className="size-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Report an Issue</h3>
                        <p className="mt-1 text-sm text-slate-500">
                          Roads, drainage and waste
                        </p>
                      </div>
                      <ArrowRight className="size-5 text-emerald-600" />
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/citizen/services">
                  <Card className="transition hover:border-blue-300 hover:shadow-md">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                        <Wrench className="size-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Request a Service</h3>
                        <p className="mt-1 text-sm text-slate-500">
                          Home repair and maintenance
                        </p>
                      </div>
                      <ArrowRight className="size-5 text-blue-600" />
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
                <div className="rounded-full bg-white p-2 text-emerald-600">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-800">
                    Every request matters
                  </p>
                  <p className="mt-1 text-xs text-emerald-700">
                    Track your requests from one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Services */}
      <section id="services" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need, In One Place
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              From reporting city problems to requesting home services, we make
              it easier to get the help you need.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  className="group border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex rounded-2xl p-3 ${service.color}`}
                    >
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold">{service.title}</h3>

                    <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>

                    <Button
                      asChild
                      variant="link"
                      className="mt-3 h-auto p-0 text-emerald-700"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section id="how-it-works" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Three Simple Steps
            </h2>
            <p className="mt-4 text-slate-600">
              Getting help should be easy. Here is how our platform works.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  {index < steps.length - 1 && (
                    <div className="absolute left-[65%] top-8 hidden h-px w-[70%] border-t-2 border-dashed border-emerald-200 md:block" />
                  )}

                  <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon className="size-7" />
                  </div>

                  <p className="mt-4 text-xs font-bold tracking-widest text-emerald-600">
                    STEP {step.number}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: CTA and Footer */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-700 px-6 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
              Let's Make a Difference
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Better City Starts With You.
            </h2>
            <p className="mt-4 leading-7 text-emerald-50">
              Raise your voice, report a problem or request a service. Together,
              we can build a better community.
            </p>
          </div>

          <div className="mt-8 flex shrink-0 flex-wrap gap-3 lg:mt-0">
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-800 hover:bg-emerald-50"
            >
              <Link href="/register">Join Our Community</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about-us">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Link href="/" className="font-bold text-emerald-700">
            City Complaint &amp; Service
          </Link>

          <p>
            © {new Date().getFullYear()} City Complaint &amp; Service. All
            rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/about-us" className="hover:text-emerald-700">
              About Us
            </Link>
            <Link href="/login" className="hover:text-emerald-700">
              Login
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
