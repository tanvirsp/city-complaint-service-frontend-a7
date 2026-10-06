"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComplaintsRequestTable from "./complaints-request-table";
import { Suspense, useState } from "react";
import { Complaint, ComplaintStatus, IComplaintParams } from "@/types";
import ComplaintsReviewSheet from "./complaints-review-sheet";

const ComplaintsRequestTabs = () => {
  const [tab, setTab] = useState<"ALL" | ComplaintStatus>("ALL");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null,
  );

  const queryParams: IComplaintParams = {
    page: 1,
    limit: 10,
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
      <Suspense fallback={"Loading"}>
        <ComplaintsRequestTable
          {...queryParams}
          handleReview={setSelectedComplaint}
        />
      </Suspense>

      <ComplaintsReviewSheet
        selectedComplaint={selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
      />
    </section>
  );
};

export default ComplaintsRequestTabs;
