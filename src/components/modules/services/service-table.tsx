"use client";
import EmptyTable from "@/components/shared/EmptyTable";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllRequestSrvices } from "@/hooks/service.hooks";
import ServiceModal from "./service-add-modal";

const ServiceTable = () => {
  const { data, isLoading } = useGetAllRequestSrvices();

  const services = data?.data || [];
  console.log(services.length);

  return (
    <div className="border rounded-lg p-4 ">
      <div className="mb-3">
        <ServiceModal />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Service Fee</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.length === 0 ? (
            <EmptyTable colSpan={3} title="Service" />
          ) : (
            services.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.serviceFee} Tk</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button>Edit</Button>
                    <Button variant={"destructive"}>Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServiceTable;
