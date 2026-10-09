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
import { useDeleteService } from "@/hooks/service.hooks";
import ServiceModal from "./category-add-dialog";
import { toast } from "sonner";
import ServiceUpdateDialog from "./category-update-dialog";
import { useState } from "react";
import { useDeleteCategory, useGetAllCategory } from "@/hooks/category.hooks";
import CategoryAddDialog from "./category-add-dialog";

const CategoryTable = () => {
  const { data, isPending } = useGetAllCategory();
  const { mutate: deletCategory, isPending: deletePending } =
    useDeleteCategory();

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const categories = data?.data || [];

  const handleDelete = (id: string) => {
    const data = { id };
    deletCategory(data, {
      onSuccess: (res) => {
        toast.success("Category Deleted Successfully");
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
        <CategoryAddDialog />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.length === 0 ? (
            <EmptyTable colSpan={2} title="Category" />
          ) : (
            categories.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
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

export default CategoryTable;
