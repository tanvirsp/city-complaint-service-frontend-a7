import { getAllService } from "@/api/service.api";
import { useQuery } from "@tanstack/react-query";

export function useGetAllRequestSrvices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getAllService,
  });
}
