import {
  addNewStaff,
  assignStaffToComplaint,
  assignStaffToRequestService,
  getAdminRequestServiceDetails,
  getAllComplaints,
  getAllRequestSrvices,
  getAllStaff,
  rejectComplaint,
} from "@/api/admin.api";
import { IComplaintParams } from "@/types";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export function useGetAllComplaints(params: IComplaintParams) {
  return useQuery({
    queryKey: ["complaints", params],
    queryFn: () => getAllComplaints(params),
  });
}

export function useSuspenseGetAllComplaints(params: IComplaintParams) {
  return useSuspenseQuery({
    queryKey: ["complaints", params],
    queryFn: () => getAllComplaints(params),
  });
}

export function useGetAllStaff() {
  return useQuery({
    queryKey: ["staff"],
    queryFn: getAllStaff,
  });
}

export function useAssignStaffToComplaint() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: assignStaffToComplaint,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["complaints"] });
    },
  });
}

export function useRejectComplaint() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rejectComplaint,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["complaints"] });
    },
  });
}

export function useGetAllRequestSrvices(params: IComplaintParams) {
  return useQuery({
    queryKey: ["request-services", params],
    queryFn: () => getAllRequestSrvices(params),
  });
}

export function useSuspenseAdminGetAllRequestSrvices(params: IComplaintParams) {
  return useSuspenseQuery({
    queryKey: ["request-services", params],
    queryFn: () => getAllRequestSrvices(params),
  });
}

export function useAdminGetRequestServiceDetails(id: string, enabled: boolean) {
  return useQuery({
    queryKey: ["services-request-by-id", id],
    queryFn: () => getAdminRequestServiceDetails(id),
    enabled: enabled && !!id,
  });
}

export function useAssignStaffToRequestService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: assignStaffToRequestService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["request-services"] });
    },
  });
}

export function useAddNewStaff() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addNewStaff,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
  });
}
