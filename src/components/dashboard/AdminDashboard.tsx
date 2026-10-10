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
import { useAdminDashboardData } from "@/hooks/dashboard.hooks";

export default function Dashboard() {
  const { data } = useAdminDashboardData();

  const dashboardData = data?.data;

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of your city complaint and service platform.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Total Users */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{dashboardData?.totalUser}</div>
            <p className="text-xs text-muted-foreground">Registered citizens</p>
          </CardContent>
        </Card>

        {/* Total Staff */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
            <UserRoundCog className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardData?.totalStaff}
            </div>
            <p className="text-xs text-muted-foreground">Staff accounts</p>
          </CardContent>
        </Card>

        {/* Total Services */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {dashboardData?.totalServices}
            </CardTitle>
            <BriefcaseBusiness className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Services provided</p>
          </CardContent>
        </Card>

        {/* Total Complaints */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Complaints
            </CardTitle>
            <MessageSquareWarning className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardData?.totalComplaint}
            </div>
            <p className="text-xs text-muted-foreground">
              Complaints submitted
            </p>
          </CardContent>
        </Card>

        {/* Total Service Requests */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Service Requests
            </CardTitle>
            <ClipboardList className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardData?.totalPendingServiceRequest}
            </div>
            <p className="text-xs text-muted-foreground">
              Total service requests
            </p>
          </CardContent>
        </Card>

        {/* Pending Complaints */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Complaints
            </CardTitle>
            <Clock className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardData?.totalPendingComplaintRequest}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting resolution</p>
          </CardContent>
        </Card>

        {/* Pending Service Requests */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Services Request
            </CardTitle>
            <Wrench className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {dashboardData?.totalPendingServiceRequest}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting service</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
