"use client";

import { useGetPaymentDetails } from "@/hooks/payment.hooks";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId") || "";

  const { data } = useGetPaymentDetails(paymentId);

  const { amount, transactionId, paymentMethod, createdAt } = data?.data || {};

  console.log(data);

  return (
    <div className="flex flex-col">
      <main className="flex flex-col items-center justify-center grow text-center p-4 md:p-6">
        <Image src="/images/check.png" alt="ok" width={50} height={50} />
        <h1 className="mt-4 text-2xl font-semibold">Payment Successful</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Thank you for takeing our service!
        </p>
        <div className="mt-6 border rounded-lg p-4 w-full max-w-md">
          <div className="flex justify-between text-sm">
            <span>Amount Paid:</span>
            <span className="font-medium">Tk {amount}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Date & Time:</span>
            <span className="font-medium">
              {formatDate(createdAt as string)}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Transaction ID:</span>
            <span className="font-medium">{transactionId}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Payment Method</span>
            <span className="font-medium">{paymentMethod}</span>
          </div>
        </div>
        <Link
          href="/citizen/my-payment-history"
          className="mt-6 inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          prefetch={false}
        >
          Return to Homepage
        </Link>
      </main>
      <footer className="flex items-center justify-center h-14 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2026 City Complaing and Service. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default PaymentSuccess;
