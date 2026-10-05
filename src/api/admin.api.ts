import apiClient from "@/lib/apiClient";
import { Complaint, IApiResponse } from "@/types";

export function getAllComplaints() {
  return apiClient<IApiResponse<Complaint[]>>("/admin/all-complaint");
}
