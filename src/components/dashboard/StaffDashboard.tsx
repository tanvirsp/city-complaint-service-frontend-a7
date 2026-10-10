"use client";

import {
  Users,
  UserRoundCog,
  BriefcaseBusiness,
  MessageSquareWarning,
  ClipboardList,
  Clock,
  Wrench,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStaffDashboardData } from "@/hooks/dashboard.hooks";

export default function StaffDashboard() {
  const { data } = useStaffDashboardData();

  const dashboardData = data?.data;

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Staff Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of your city complaint and service platform.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Total Users */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Assign Complaint
            </CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardData?.totalAssignComplaint}
            </div>
            <p className="text-xs text-muted-foreground">Assing complaint</p>
          </CardContent>
        </Card>

        {/* Total Staff */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Assign Service Request
            </CardTitle>
            <UserRoundCog className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardData?.totalAssignService}
            </div>
            <p className="text-xs text-muted-foreground">Service Request</p>
          </CardContent>
        </Card>

        {/* Total Services */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Complate Complaint
            </CardTitle>
            <BriefcaseBusiness className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {" "}
              {dashboardData?.totalCompleteAssignComplaint}
            </div>
            <p className="text-xs text-muted-foreground">
              Total Complate Complaint
            </p>
          </CardContent>
        </Card>

        {/* Total Complaints */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Complete Services
            </CardTitle>
            <MessageSquareWarning className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardData?.totalCompleteAssignService}
            </div>
            <p className="text-xs text-muted-foreground">
              Complete Service Request
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
