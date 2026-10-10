import apiClient from "@/lib/apiClient";
import {
  IApiResponse,
  IApiResponseWithOutPagination,
  ICreateComplaint,
} from "@/types";
import {
  IMyComplaintItem,
  IMyRequestServiceItem,
  IRequestServiceDetails,
  IServiceRequestPayload,
  MyComplaintParams,
} from "@/types/citizen.type";

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

// Service Request API
export function getMyRequestServices(params: MyComplaintParams) {
  return apiClient<IApiResponse<IMyRequestServiceItem[]>>(
    "/service-request/my",
    {
      params,
    },
  );
}

export function getRequestServicDetails(id: string) {
  return apiClient<IApiResponseWithOutPagination<IRequestServiceDetails>>(
    `/service-request/details/${id}`,
  );
}

export function createServiceRequest(payload: IServiceRequestPayload) {
  return apiClient("/service-request", {
    method: "POST",
    body: payload,
  });
}

export function makePayment(payload: { serviceRequestId: string }) {
  return apiClient("/payment/create", {
    method: "POST",
    body: payload,
  });
}
