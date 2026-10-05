import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/DashboardShell";

import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard roles={["CITIZEN"]}>
      <DashboardShell role="CITIZEN">{children}</DashboardShell>
    </RoleGuard>
  );
}
