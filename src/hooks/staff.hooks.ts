import {
  getStaffAssignComplaints,
  getStaffAssignServiceRequest,
  updateComplaintStatus,
  updateServiceRequestStatus,
} from "@/api/staff.api";
import { StaffParamsWithStatus } from "@/types";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export function useSuspenseGetAllStaffAssignComplaints(
  params: StaffParamsWithStatus,
) {
  return useSuspenseQuery({
    queryKey: ["staff-complaint", params],
    queryFn: () => getStaffAssignComplaints(params),
  });
}

export function useUpdatComplaintStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateComplaintStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff-complaint"] });
    },
  });
}

export function useSuspenseGetAllStaffAssignServiceRequest(
  params: StaffParamsWithStatus,
) {
  return useSuspenseQuery({
    queryKey: ["staff-service-request", params],
    queryFn: () => getStaffAssignServiceRequest(params),
  });
}

export function useUpdatServiceRequestStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateServiceRequestStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff-service-request"] });
    },
  });
}
