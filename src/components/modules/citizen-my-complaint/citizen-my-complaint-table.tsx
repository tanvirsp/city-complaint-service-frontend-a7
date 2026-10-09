"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ComplaintsReviewSheet from "./citizen-my-complaint-review-sheet";

import { IComplaintParams, IMyComplaintItem } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/table-pagination";
import EmptyTable from "@/components/shared/EmptyTable";
import { useSuspenseGetAllMyComplaint } from "@/hooks";
import CitizenMyComplaintReviewSheet from "./citizen-my-complaint-review-sheet";

interface Props extends IComplaintParams {
  handleReview: Dispatch<SetStateAction<string>>;
  handlePageChange: Dispatch<SetStateAction<number>>;
  setOpenSheet: Dispatch<SetStateAction<boolean>>;
}

const CitizenMyComplaintTable = ({
  handleReview,
  handlePageChange,
  setOpenSheet,
  ...params
}: Props) => {
  const handleQuickView = (id: string) => {
    handleReview(id);
    setOpenSheet(true);
  };

  const { data } = useSuspenseGetAllMyComplaint(params);

  const allComplaint = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages ?? 0;

  return (
    <>
      <div className="border rounded-lg p-4 ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[100px]">Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allComplaint.length === 0 ? (
              <EmptyTable colSpan={4} title="Complaint" />
            ) : (
              allComplaint.map((complaint) => (
                <TableRow key={complaint.id}>
                  <TableCell>{complaint.title}</TableCell>
                  <TableCell>{complaint.location}</TableCell>
                  <TableCell>{complaint.description}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleQuickView(complaint.id)}>
                      Quick View
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

export default CitizenMyComplaintTable;
