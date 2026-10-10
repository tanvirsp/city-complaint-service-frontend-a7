"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IComplaintParams } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/table-pagination";
import EmptyTable from "@/components/shared/EmptyTable";
import { useSuspenseAdminGetAllRequestSrvices } from "@/hooks";
import AdminAssignStaffDialog from "./admin-assign-staff-dialog";

interface Props extends IComplaintParams {
  handleReview: Dispatch<SetStateAction<string>>;
  handlePageChange: Dispatch<SetStateAction<number>>;
  setOpenSheet: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

const AdminServiceRequestTable = ({
  handleReview,
  handlePageChange,
  setOpenSheet,
  setOpenDialog,
  ...params
}: Props) => {
  const handleQuickView = (id: string) => {
    handleReview(id);
    setOpenSheet(true);
  };

  const handleAssignStaff = (id: string) => {
    setOpenDialog(true);
    handleReview(id);
  };

  const { data } = useSuspenseAdminGetAllRequestSrvices(params);

  const allServices = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages ?? 0;

  const statusStyles: Record<string, string> = {
    RESOLVED: "bg-green-100 text-green-600",
    ASSIGNED: "bg-blue-100 text-blue-600",
    PENDING: "bg-yellow-100 text-yellow-600",
    REJECTED: "bg-red-100 text-red-600",
  };

  const paymentStatusStyles: Record<string, string> = {
    PAID: "bg-green-100 text-green-600",
    UNPAID: "bg-blue-100 text-blue-600",
    REFUNDED: "bg-yellow-100 text-yellow-600",
    FAILED: "bg-red-100 text-red-600",
    CANCELLED: "bg-red-100 text-red-400",
  };

  return (
    <>
      <div className="border rounded-lg p-4 ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[100px]">Title</TableHead>

              <TableHead>Address</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Service Status</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allServices.length === 0 ? (
              <EmptyTable colSpan={6} title="Complaint" />
            ) : (
              allServices.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.contactNumber}</TableCell>
                  <TableCell>
                    <p
                      className={`w-30 text-xs text-center inline-block px-3 py-2 rounded-md ${
                        statusStyles[item.status] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p
                      className={`w-30 text-xs text-center inline-block px-3 py-2 rounded-md ${
                        paymentStatusStyles[item.paymentStatus] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.paymentStatus}
                    </p>
                  </TableCell>

                  <TableCell className="flex gap-2">
                    <Button onClick={() => handleQuickView(item.id)}>
                      Quick View
                    </Button>
                    <Button
                      variant={"outline"}
                      onClick={() => handleAssignStaff(item.id)}
                    >
                      Assing Staff
                    </Button>
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

export default AdminServiceRequestTable;
