import {
  getAdminDashboardData,
  getCitizenDashboardData,
  getStaffDashboardData,
} from "@/api/dashboard.api";
import { useQuery } from "@tanstack/react-query";

export function useAdminDashboardData() {
  return useQuery({
    queryKey: ["admin-data"],
    queryFn: getAdminDashboardData,
  });
}

export function useStaffDashboardData() {
  return useQuery({
    queryKey: ["staff-data"],
    queryFn: getStaffDashboardData,
  });
}

export function useCitizenDashboardData() {
  return useQuery({
    queryKey: ["citizen-data"],
    queryFn: getCitizenDashboardData,
  });
}
