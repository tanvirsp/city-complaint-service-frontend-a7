import apiClient from "@/lib/apiClient";
import {
  IApiResponseWithOutPagination,
  IUpdateService,
  ServiceItem,
} from "@/types";

export function getAllService() {
  return apiClient<IApiResponseWithOutPagination<ServiceItem[]>>("/service");
}

export function createNewService(payload: {
  name: string;
  serviceFee: number;
}) {
  return apiClient("/service", { method: "POST", body: payload });
}

export function updateService(payload: IUpdateService) {
  return apiClient("/service", { method: "PATCH", body: payload });
}

export function deleteService(payload: { serviceId: string }) {
  return apiClient("/service", { method: "DELETE", body: payload });
}

export function getServiceById(serviceId: string) {
  return apiClient<IApiResponseWithOutPagination<ServiceItem>>(
    `/service/service-by-id/${serviceId}`,
  );
}
