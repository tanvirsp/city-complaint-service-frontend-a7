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
import { Complaint, IComplaintParams } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/table-pagination";
import EmptyTable from "@/components/shared/EmptyTable";

interface Props extends IComplaintParams {
  handleReview: Dispatch<SetStateAction<Complaint | null>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const ComplaintsRequestTable = ({
  handleReview,
  setPage,
  ...params
}: Props) => {
  const { data } = useSuspenseGetAllComplaints(params);

  const allComplaint = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages ?? 0;

  console.log(data?.data?.meta);

  return (
    <>
      <div className="border rounded-lg p-4 ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[100px]">Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Category</TableHead>
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
                  <TableCell>{complaint.category.name}</TableCell>
                  <TableCell>{complaint.status}</TableCell>
                  <TableCell>
                    {complaint.status === "PENDING" ? (
                      <Button onClick={() => handleReview(complaint)}>
                        Quick View
                      </Button>
                    ) : (
                      <Button disabled variant={"outline"}>
                        Review Done
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
          handlePageChange={setPage}
        />
      </div>
    </>
  );
};

export default ComplaintsRequestTable;
