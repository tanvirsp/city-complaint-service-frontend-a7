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
import { useDeleteService, useGetAllServices } from "@/hooks/service.hooks";
import ServiceModal from "./service-add-modal";
import { toast } from "sonner";
import ServiceUpdateDialog from "./service-update-dialog";
import { useState } from "react";

const ServiceTable = () => {
  const { data, isPending } = useGetAllServices();
  const { mutate: deletService, isPending: deletePending } = useDeleteService();

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const services = data?.data || [];

  const handleDelete = (id: string) => {
    const data = { serviceId: id };
    deletService(data, {
      onSuccess: (res) => {
        toast.success("Service Deleted Successfully");
      },
      onError: (err) => {
        toast.error("Something went wrong");
      },
    });
  };

  const handleEdit = (item: string) => {
    setOpenDialog(true);
    setSelectedItem(item);
  };

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
                    <Button onClick={() => handleEdit(item.id)}>Edit</Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant={"destructive"}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <ServiceUpdateDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default ServiceTable;
