"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { StaffParamsWithStatus } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/table-pagination";
import EmptyTable from "@/components/shared/EmptyTable";

import {
  useSuspenseGetAllStaffAssignServiceRequest,
  useUpdatServiceRequestStatus,
} from "@/hooks/staff.hooks";
import { toast } from "sonner";

interface Props extends StaffParamsWithStatus {
  handlePageChange: Dispatch<SetStateAction<number>>;
}

const StaffAssignServiceRequestTable = ({
  handlePageChange,
  ...params
}: Props) => {
  const { mutateAsync: changeStatus, isPending } =
    useUpdatServiceRequestStatus();

  const handleChangeStatus = async ({
    status,
    id,
  }: {
    status: string;
    id: string;
  }) => {
    const upData = { status, id };

    try {
      const response = await changeStatus(upData);
      if (response.success) {
        toast.success("Status updated successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const { data } = useSuspenseGetAllStaffAssignServiceRequest(params);

  const allServices = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages ?? 0;

  const statusStyles: Record<string, string> = {
    RESOLVED: "bg-purple-100 text-purple-600",
    ASSIGNED: "bg-blue-100 text-blue-600",
    PENDING: "bg-yellow-100 text-yellow-600",
    REJECTED: "bg-red-100 text-red-600",
    IN_PROGRESS: "bg-green-100 text-green-600",
  };

  return (
    <>
      <div className="border rounded-lg p-4 ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Contact Number</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Choose Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allServices.length === 0 ? (
              <EmptyTable colSpan={5} title="Complaint" />
            ) : (
              allServices.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.contactNumber}</TableCell>
                  <TableCell>
                    <b>{item.serviceFee}</b> BDT
                  </TableCell>
                  <TableCell>
                    <p
                      className={`w-30 text-xs text-center inline-block px-3 py-2 rounded-md ${
                        statusStyles[item.status] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </p>
                  </TableCell>

                  <TableCell className="flex gap-2">
                    {item.status === "ASSIGNED" && (
                      <Button
                        onClick={() =>
                          handleChangeStatus({
                            status: "IN_PROGRESS",
                            id: item.id,
                          })
                        }
                      >
                        IN_PROGRESS
                      </Button>
                    )}
                    {item.status === "IN_PROGRESS" && (
                      <Button
                        onClick={() =>
                          handleChangeStatus({
                            status: "RESOLVED",
                            id: item.id,
                          })
                        }
                      >
                        RESOLVED
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4">
        <TablePagination
          page={params.page ?? 1}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default StaffAssignServiceRequestTable;
