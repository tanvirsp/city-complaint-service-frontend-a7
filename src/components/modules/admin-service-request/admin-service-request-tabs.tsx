"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, Suspense, useState } from "react";
import { ComplaintStatus, MyComplaintParams } from "@/types";
import TableLoading from "@/components/shared/TableLoading";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/debounce.hook";
import CitizenMyServicesTable from "./admin-service-request-table";
import AdminServiceReviewSheet from "./admin-service-request-sheet";
import AdminAssignStaffDialog from "./admin-assign-staff-dialog";

const AdminServiceRequestTabs = () => {
  const [tab, setTab] = useState<"ALL" | ComplaintStatus>("ALL");
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [openSheet, setOpenSheet] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const debouncedSearch = useDebounce(searchInput);

  const queryParams: MyComplaintParams = {
    page: page,
    limit: 10,
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
      </div>
      <Suspense fallback={<TableLoading />}>
        <CitizenMyServicesTable
          {...queryParams}
          handleReview={setSelectedId}
          handlePageChange={setPage}
          setOpenSheet={setOpenSheet}
          setOpenDialog={setOpenDialog}
        />
      </Suspense>

      <AdminServiceReviewSheet
        openSheet={openSheet}
        setOpenSheet={setOpenSheet}
        selectedComplaint={selectedId}
      />

      <AdminAssignStaffDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        serviceRequestId={selectedId}
      />
    </section>
  );
};

export default AdminServiceRequestTabs;
