"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ComplaintsReviewSheet from "./complaints-review-sheet";
import {
  useGetAllComplaints,
  useSuspenseGetAllComplaints,
} from "@/hooks/admin.hooks";
import { IComplaintParams } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

interface Props extends IComplaintParams {
  handleReview: any;
}

const ComplaintsRequestTable = ({ handleReview, ...params }: Props) => {
  const { data } = useSuspenseGetAllComplaints(params);

  const allComplaint = data?.data?.data || [];

  return (
    <div className="border rounded-lg p-4 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allComplaint.map((complaint) => (
            <TableRow key={complaint.id}>
              <TableCell>{complaint.title}</TableCell>
              <TableCell>{complaint.location}</TableCell>
              <TableCell>{complaint.category.name}</TableCell>
              <TableCell>
                <Button onClick={() => handleReview(complaint)}>
                  Quick View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComplaintsRequestTable;
