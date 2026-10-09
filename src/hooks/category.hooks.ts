import {
  createNewCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
} from "@/api/category.api";
import {
  createNewService,
  deleteService,
  getAllService,
  getServiceById,
  updateService,
} from "@/api/service.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAllCategory() {
  return useQuery({
    queryKey: ["category"],
    queryFn: getAllCategory,
  });
}

export function useCreateNewCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });
}

export function useGetCategoryById(id: string, enabled: boolean) {
  return useQuery({
    queryKey: ["categiry-by-id", id],
    queryFn: () => getCategoryById(id),
    enabled: enabled && !!id,
  });
}
