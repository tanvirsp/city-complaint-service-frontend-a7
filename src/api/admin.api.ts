import apiClient from "@/lib/apiClient";
import {
  Complaint,
  IApiResponse,
  IApiResponseWithOutPagination,
  IAssignStaffToComplaint,
  IAssignStaffToRequestService,
  IComplaintParams,
  IMyComplaintItem,
  IRejectComplaint,
  IRequestServiceDetails,
} from "@/types";
import { IServiceRequestItem, IStaffPayload } from "@/types/admin.type";
import { IStaffData } from "@/types/staff.type";

export function getAllComplaints(params: IComplaintParams) {
  return apiClient<IApiResponse<Complaint[]>>("/admin/all-complaint", {
    params,
  });
}

export function getAllStaff() {
  return apiClient<IApiResponseWithOutPagination<IStaffData[]>>("/admin/staff");
}

export function addNewStaff(payload: IStaffPayload) {
  return apiClient("/admin/add-new-staff", {
    method: "POST",
    body: payload,
  });
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

export function getComplaintDetails(id: string) {
  return apiClient<IApiResponseWithOutPagination<IMyComplaintItem>>(
    `/complaint/complaint-details/${id}`,
  );
}

export function getAllRequestSrvices(params: IComplaintParams) {
  return apiClient<IApiResponse<IServiceRequestItem[]>>(
    "/admin/all-service-request",
    {
      params,
    },
  );
}

export function getAdminRequestServiceDetails(id: string) {
  return apiClient<IApiResponseWithOutPagination<IRequestServiceDetails>>(
    `/admin/service-request/details/${id}`,
  );
}

export function assignStaffToRequestService(
  payload: IAssignStaffToRequestService,
) {
  return apiClient("/admin/service-request/assign-staff", {
    method: "PATCH",
    body: payload,
  });
}
