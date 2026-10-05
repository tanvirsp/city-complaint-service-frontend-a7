import { getAllComplaints } from "@/api/admin.api";
import { useQuery } from "@tanstack/react-query";

export function useGetAllComplaints() {
  return useQuery({
    queryKey: ["complaints"],
    queryFn: getAllComplaints,
  });
}
