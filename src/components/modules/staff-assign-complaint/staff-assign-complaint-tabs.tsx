"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComplaintsRequestTable from "./staff-assign-complaint-table";
import { ChangeEvent, Suspense, useState } from "react";
import {
  Complaint,
  ComplaintStatus,
  MyComplaintParams,
  Priority,
  StaffParamsWithStatus,
} from "@/types";

import TableLoading from "@/components/shared/TableLoading";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/debounce.hook";

const StaffAssignComplaintTabs = () => {
  const [tab, setTab] = useState<"ALL" | Priority>("ALL");
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [openSheet, setOpenSheet] = useState(false);

  const debouncedSearch = useDebounce(searchInput);

  const queryParams: StaffParamsWithStatus = {
    page: page,
    limit: 10,
    ...(tab === "ALL" ? {} : { priority: tab }),
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
          onValueChange={(value) => setTab(value as "ALL" | Priority)}
        >
          <TabsList>
            <TabsTrigger value="LOW">Low</TabsTrigger>
            <TabsTrigger value="MEDIUM">Medium</TabsTrigger>
            <TabsTrigger value="HIGH">High</TabsTrigger>
            <TabsTrigger value="ALL">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <Suspense fallback={<TableLoading />}>
        <ComplaintsRequestTable
          {...queryParams}
          handleReview={setSelectedId}
          handlePageChange={setPage}
          setOpenSheet={setOpenSheet}
        />
      </Suspense>
    </section>
  );
};

export default StaffAssignComplaintTabs;
