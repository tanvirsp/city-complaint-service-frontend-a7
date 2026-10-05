"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComplaintsRequestTable from "./complaints-request-table";
import { useState } from "react";

const ComplaintsRequestTabs = () => {
  const [tab, setTab] = useState("PENDING");
  return (
    <section>
      <div> </div>
      <Tabs defaultValue={tab} onValueChange={(value) => setTab(value)}>
        <TabsList>
          <TabsTrigger value="PENDING">Pending</TabsTrigger>
          <TabsTrigger value="ASSIGNED">Assigned</TabsTrigger>
          <TabsTrigger value="IN_PROGRESS">In Progress</TabsTrigger>
          <TabsTrigger value="RESOLVED">Resolved</TabsTrigger>
          <TabsTrigger value="REJECTED">Rejected</TabsTrigger>
          <TabsTrigger value="ALL">All</TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
};

export default ComplaintsRequestTabs;
{
  /* <ComplaintsRequestTable /> */
}
