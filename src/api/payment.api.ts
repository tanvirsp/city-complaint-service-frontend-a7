import apiClient from "@/lib/apiClient";
import {
  IApiResponse,
  IApiResponseWithOutPagination,
  IPaymentDetails,
  IPaymentParams,
} from "@/types";

export function getPaymentDetails(id: string) {
  return apiClient<IApiResponseWithOutPagination<IPaymentDetails>>(
    `/payment/${id}`,
  );
}

export function getMyPaymentHistory(params: IPaymentParams) {
  return apiClient<IApiResponse<IPaymentDetails[]>>("/payment/my", {
    params,
  });
}
