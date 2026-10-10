import { getMyPaymentHistory, getPaymentDetails } from "@/api/payment.api";
import { IPaymentParams } from "@/types";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export function useGetPaymentDetails(id: string) {
  return useQuery({
    queryKey: ["payment-details", id],
    queryFn: () => getPaymentDetails(id),
  });
}

export function useSuspenseGetMyPaymentHistory(params: IPaymentParams) {
  return useSuspenseQuery({
    queryKey: ["my-payment-history", params],
    queryFn: () => getMyPaymentHistory(params),
  });
}
