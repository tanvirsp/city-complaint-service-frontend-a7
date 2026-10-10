"use client";

import ComplaintsRequestTable from "./staff-assign-service-request-table";
import { Suspense, useState } from "react";
import { StaffParamsWithStatus } from "@/types";

import TableLoading from "@/components/shared/TableLoading";
import StaffAssignServiceRequestTable from "./staff-assign-service-request-table";

const StaffAssignServiceRequestTabs = () => {
  const [page, setPage] = useState(1);

  const queryParams: StaffParamsWithStatus = {
    page: page,
    limit: 2,
  };

  return (
    <section>
      <Suspense fallback={<TableLoading />}>
        <StaffAssignServiceRequestTable
          {...queryParams}
          handlePageChange={setPage}
        />
      </Suspense>
    </section>
  );
};

export default StaffAssignServiceRequestTabs;
