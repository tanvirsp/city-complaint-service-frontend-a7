import apiClient from "@/lib/apiClient";
import {
  Complaint,
  IApiResponse,
  IApiResponseWithOutPagination,
  IAssignStaffToComplaint,
  IComplaintParams,
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
    method: "POST",
    body: payload,
  });
}
