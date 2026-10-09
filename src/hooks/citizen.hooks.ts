import {
  createComplaint,
  getComplaintDetails,
  getMyComplaint,
} from "@/api/citizen.api";
import { MyComplaintParams } from "@/types/citizen.type";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";

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

// export function useCreateNewService() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: createNewService,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ["services"] });
//     },
//   });
// }

// export function useUpdateService() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: updateService,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ["services"] });
//     },
//   });
// }

// export function useDeleteService() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: deleteService,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ["services"] });
//     },
//   });
// }

// export function useGetServicesById(serviceId: string, enabled: boolean) {
//   return useQuery({
//     queryKey: ["services-by-id", serviceId],
//     queryFn: () => getServiceById(serviceId),
//     enabled: enabled && !!serviceId,
//   });
// }
