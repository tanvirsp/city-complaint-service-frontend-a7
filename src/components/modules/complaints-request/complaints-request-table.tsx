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
import { useGetAllComplaints } from "@/hooks/admin.hooks";

const ComplaintsRequestTable = () => {
  const { data } = useGetAllComplaints();

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
              <TableCell className="">
                <ComplaintsReviewSheet />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComplaintsRequestTable;
