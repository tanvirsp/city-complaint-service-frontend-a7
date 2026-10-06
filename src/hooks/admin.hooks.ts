import {
  assignStaffToComplaint,
  getAllComplaints,
  getAllStaff,
} from "@/api/admin.api";
import { IComplaintParams } from "@/types";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";

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
  return useMutation({
    mutationFn: assignStaffToComplaint,
  });
}
