import {
  createComplaint,
  createServiceRequest,
  getComplaintDetails,
  getMyComplaint,
  getMyRequestServices,
  getRequestServicDetails,
  makePayment,
} from "@/api/citizen.api";
import { MyComplaintParams } from "@/types/citizen.type";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export function useGetAllMyComplaint(params: MyComplaintParams) {
  return useQuery({
    queryKey: ["my-complaint", params],
    queryFn: () => getMyComplaint(params),
  });
}

export function useSuspenseGetAllMyComplaint(params: MyComplaintParams) {
  return useSuspenseQuery({
    queryKey: ["my-complaint", params],
    queryFn: () => getMyComplaint(params),
  });
}

export function useGetComplaintDetails(id: string, enabled: boolean) {
  return useQuery({
    queryKey: ["services-by-id", id],
    queryFn: () => getComplaintDetails(id),
    enabled: enabled && !!id,
  });
}

export function useCreateComplaint() {
  return useMutation({
    mutationFn: createComplaint,
  });
}

// Request Servies hooks

export function useGetAllMyRequestServices(params: MyComplaintParams) {
  return useQuery({
    queryKey: ["my-request-service", params],
    queryFn: () => getMyRequestServices(params),
  });
}

export function useSuspenseGetAllMyRequestServices(params: MyComplaintParams) {
  return useSuspenseQuery({
    queryKey: ["my-request-service", params],
    queryFn: () => getMyRequestServices(params),
  });
}

export function useGetRequestServiceDetails(id: string, enabled: boolean) {
  return useQuery({
    queryKey: ["services-request-by-id", id],
    queryFn: () => getRequestServicDetails(id),
    enabled: enabled && !!id,
  });
}

export function useCreateServiceRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createServiceRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-request-service"] });
    },
  });
}

export function useMakePayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: makePayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-payment"] });
    },
  });
}
