"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetAllStaff } from "@/hooks";
import EmptyTable from "@/components/shared/EmptyTable";

const StaffTable = () => {
  const { data } = useGetAllStaff();
  const allStaff = data?.data || [];

  return (
    <div className="border rounded-lg p-4 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Service Category</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allStaff.length === 0 ? (
            <EmptyTable colSpan={4} title="Complaint" />
          ) : (
            allStaff.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.contactNumber}</TableCell>
                <TableCell>{item.category.name}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default StaffTable;
