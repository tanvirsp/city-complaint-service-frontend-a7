import apiClient from "@/lib/apiClient";
import { IApiResponseWithOutPagination } from "@/types";
import {
  IAdminData,
  ICitizenDashboardData,
  IStaffDashboardData,
} from "@/types/dashboard.type";

export function getAdminDashboardData() {
  return apiClient<IApiResponseWithOutPagination<IAdminData>>(
    "/admin/dashboard",
  );
}

export function getStaffDashboardData() {
  return apiClient<IApiResponseWithOutPagination<IStaffDashboardData>>(
    "/staff/dashboard",
  );
}
export function getCitizenDashboardData() {
  return apiClient<IApiResponseWithOutPagination<ICitizenDashboardData>>(
    "/user/dashboard",
  );
}
