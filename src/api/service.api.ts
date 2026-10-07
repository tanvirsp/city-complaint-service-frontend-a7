import apiClient from "@/lib/apiClient";
import { IApiResponseWithOutPagination, ServiceItem } from "@/types";

export function getAllService() {
  return apiClient<IApiResponseWithOutPagination<ServiceItem[]>>("/service");
}
