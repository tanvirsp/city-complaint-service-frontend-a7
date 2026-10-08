import {
  createNewService,
  deleteService,
  getAllService,
  getServiceById,
  updateService,
} from "@/api/service.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAllServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getAllService,
  });
}

export function useCreateNewService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewService,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
}

export function useUpdateService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateService,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
}

export function useDeleteService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
}

export function useGetServicesById(serviceId: string, enabled: boolean) {
  return useQuery({
    queryKey: ["services-by-id", serviceId],
    queryFn: () => getServiceById(serviceId),
    enabled: enabled && !!serviceId,
  });
}
