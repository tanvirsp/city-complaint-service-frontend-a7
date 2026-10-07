"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense, useState } from "react";
import { Complaint, ComplaintStatus, IComplaintParams } from "@/types";
import ServiceRequestTable from "./service-request-table";
import ServiceReviewSheet from "./service-request-sheet";
import TableLoading from "@/components/shared/TableLoading";

const ServicesRequestTabs = () => {
  const [tab, setTab] = useState<"ALL" | ComplaintStatus>("ALL");
  const [page, setPage] = useState(1);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null,
  );

  const queryParams: IComplaintParams = {
    page: page,
    limit: 2,
    ...(tab === "ALL" ? {} : { status: tab }),
  };

  return (
    <section>
      <Tabs
        defaultValue={tab}
        onValueChange={(value) => setTab(value as "ALL" | ComplaintStatus)}
      >
        <TabsList>
          <TabsTrigger value="PENDING">Pending</TabsTrigger>
          <TabsTrigger value="ASSIGNED">Assigned</TabsTrigger>
          <TabsTrigger value="IN_PROGRESS">In Progress</TabsTrigger>
          <TabsTrigger value="RESOLVED">Resolved</TabsTrigger>
          <TabsTrigger value="REJECTED">Rejected</TabsTrigger>
          <TabsTrigger value="ALL">All</TabsTrigger>
        </TabsList>
      </Tabs>
      <Suspense fallback={<TableLoading />}>
        <ServiceRequestTable
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

export default ServicesRequestTabs;
