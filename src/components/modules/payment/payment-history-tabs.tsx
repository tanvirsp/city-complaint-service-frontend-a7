"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, Suspense, useState } from "react";
import {
  Complaint,
  ComplaintStatus,
  IComplaintParams,
  IPaymentParams,
  PaymentStatus,
} from "@/types";
import ServiceReviewSheet from "./payment-details-sheet";
import TableLoading from "@/components/shared/TableLoading";
import PaymentHistoryTable from "./payment-history-table";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/debounce.hook";

const PaymentHistoryTabs = () => {
  const [tab, setTab] = useState<"ALL" | PaymentStatus>("ALL");
  const [page, setPage] = useState(1);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null,
  );

  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput);

  const queryParams: IPaymentParams = {
    page: page,
    limit: 2,
    ...(tab === "ALL" ? {} : { status: tab }),
    ...(debouncedSearch ? { searchTerm: debouncedSearch } : {}),
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setPage(1);
  };

  return (
    <section>
      <div className="flex justify-between my-5">
        <div>
          <Input
            onChange={(e) => handleSearch(e)}
            type="search"
            placeholder="Search Title"
          />
        </div>
        <Tabs
          defaultValue={tab}
          onValueChange={(value) => setTab(value as "ALL" | PaymentStatus)}
        >
          <TabsList>
            <TabsTrigger value="UNPAID">Unpaid</TabsTrigger>
            <TabsTrigger value="PAID">Paid</TabsTrigger>
            <TabsTrigger value="FAILED">Failed</TabsTrigger>
            <TabsTrigger value="CANCELLED">Cancelled</TabsTrigger>
            <TabsTrigger value="REFUNDED">Refunded</TabsTrigger>
            <TabsTrigger value="ALL">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Suspense fallback={<TableLoading />}>
        <PaymentHistoryTable
          {...queryParams}
          handleReview={setSelectedComplaint}
          setPage={setPage}
        />
      </Suspense>

      <ServiceReviewSheet
        selectedComplaint={selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
      />
    </section>
  );
};

export default PaymentHistoryTabs;
