"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Complaint, IPaymentParams } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/table-pagination";
import EmptyTable from "@/components/shared/EmptyTable";
import { useSuspenseGetMyPaymentHistory } from "@/hooks/payment.hooks";

interface Props extends IPaymentParams {
  handleReview: Dispatch<SetStateAction<Complaint | null>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const PaymentHistoryTable = ({ handleReview, setPage, ...params }: Props) => {
  const { data } = useSuspenseGetMyPaymentHistory(params);

  const allPayment = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages ?? 0;

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
              <TableHead>Transaction Id</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allPayment.length === 0 ? (
              <EmptyTable colSpan={4} title="Request Service" />
            ) : (
              allPayment.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.transactionId}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.provider}</TableCell>
                  <TableCell>
                    <p
                      className={`w-30 text-xs text-center inline-block px-3 py-2 rounded-md ${
                        paymentStatusStyles[item.status] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </p>
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

export default PaymentHistoryTable;
