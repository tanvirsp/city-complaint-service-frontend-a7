"use client";

import Logo from "@/assets/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetMe, useLogout } from "@/hooks";
import { UserRole } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function Header() {
  const [open, setOpen] = useState(false);

  const routes = [
    { name: "Home", url: "/" },
    { name: "About us", url: "/about-us" },
  ];

  const dashboardRoute: Record<UserRole, string> = {
    ADMIN: "/admin",
    STAFF: "/staff",
    CITIZEN: "/citizen",
  };

  const { data, isLoading } = useGetMe();
  const { mutate: logout } = useLogout();
  const queryClient = useQueryClient();

  const role = data?.data?.role as UserRole | undefined;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.success("Logged out successfully");
        queryClient.removeQueries({ queryKey: ["user"] });
        setOpen(false);
      },
      onError: () => {
        toast.error("Something Went Wrong");
      },
    });
  };

  const closeMenu = () => setOpen(false);

  const navLinks = (
    <>
      {routes.map((route) => (
        <Link
          key={route.url}
          href={route.url}
          onClick={closeMenu}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {route.name}
        </Link>
      ))}

      {role && (
        <Link
          href={dashboardRoute[role]}
          onClick={closeMenu}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
      )}
    </>
  );

  const authButton = (
    <>
      {!isLoading && !data && (
        <Button variant="outline" asChild>
          <Link href="/login" onClick={closeMenu}>
            Login
          </Link>
        </Button>
      )}

      {!isLoading && data && (
        <Button
          onClick={handleLogout}
          variant="destructive"
          className="w-full sm:w-auto"
        >
          Logout
        </Button>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Go to homepage">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">{navLinks}</nav>

        {/* Desktop authentication */}
        <div className="hidden items-center md:flex">{authButton}</div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetTitle className="text-left">Navigation</SheetTitle>

              <nav className="mt-8 flex flex-col gap-6">
                {navLinks}

                {!isLoading && (
                  <div className="border-t pt-5">{authButton}</div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
