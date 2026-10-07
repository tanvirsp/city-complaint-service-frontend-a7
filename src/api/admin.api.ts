import apiClient from "@/lib/apiClient";
import {
  Complaint,
  IApiResponse,
  IApiResponseWithOutPagination,
  IAssignStaffToComplaint,
  IComplaintParams,
  IRejectComplaint,
} from "@/types";
import { IStaffData } from "@/types/staff.type";

export function getAllComplaints(params: IComplaintParams) {
  return apiClient<IApiResponse<Complaint[]>>("/admin/all-complaint", {
    params,
  });
}

export function getAllStaff() {
  return apiClient<IApiResponseWithOutPagination<IStaffData[]>>("/admin/staff");
}

export function assignStaffToComplaint(payload: IAssignStaffToComplaint) {
  return apiClient("/admin/complaint/assign-staff", {
    method: "PATCH",
    body: payload,
  });
}

export function rejectComplaint(payload: IRejectComplaint) {
  return apiClient("/admin/complaint/reject", {
    method: "PATCH",
    body: payload,
  });
}

export function getAllRequestSrvices(params: IComplaintParams) {
  return apiClient<IApiResponse<Complaint[]>>("/admin/all-service-request", {
    params,
  });
}
