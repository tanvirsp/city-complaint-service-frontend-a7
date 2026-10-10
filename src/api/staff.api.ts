import apiClient from "@/lib/apiClient";
import {
  IApiResponse,
  IStaffComplaintItem,
  IStaffServiceRequestItem,
  MyComplaintParams,
  StaffParamsWithStatus,
} from "@/types";

export function getStaffAssignComplaints(params: StaffParamsWithStatus) {
  return apiClient<IApiResponse<IStaffComplaintItem[]>>(
    "/staff/assign/complaint",
    {
      params,
    },
  );
}

export function updateComplaintStatus(payload: { id: string; status: string }) {
  return apiClient("/complaint/update-status", {
    method: "PATCH",
    body: payload,
  });
}

export function getStaffAssignServiceRequest(params: MyComplaintParams) {
  return apiClient<IApiResponse<IStaffServiceRequestItem[]>>(
    "/staff/assign/service-request",
    {
      params,
    },
  );
}

export function updateServiceRequestStatus(payload: {
  id: string;
  status: string;
}) {
  return apiClient("/service-request/update-status", {
    method: "PATCH",
    body: payload,
  });
}
