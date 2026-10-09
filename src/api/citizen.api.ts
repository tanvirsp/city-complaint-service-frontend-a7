import apiClient from "@/lib/apiClient";
import {
  IApiResponse,
  IApiResponseWithOutPagination,
  ICreateComplaint,
} from "@/types";
import { IMyComplaintItem, MyComplaintParams } from "@/types/citizen.type";

export function getMyComplaint(params: MyComplaintParams) {
  return apiClient<IApiResponse<IMyComplaintItem[]>>(
    "/complaint/my-complaint",
    {
      params,
    },
  );
}

export function getComplaintDetails(id: string) {
  return apiClient<IApiResponseWithOutPagination<IMyComplaintItem>>(
    `/complaint/complaint-details/${id}`,
  );
}

export function createComplaint(payload: ICreateComplaint) {
  const formData = new FormData();

  formData.append("data", JSON.stringify(payload.data));
  formData.append("complaintImage", payload.complaintImage);

  return apiClient("/complaint/add-complaint", {
    method: "POST",
    body: formData,
  });
}
