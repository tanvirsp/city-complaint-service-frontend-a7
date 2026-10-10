"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useAssignStaffToRequestService, useGetAllStaff } from "@/hooks";

import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

interface Props {
  serviceRequestId: string;
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

const AdminAssignStaffDialog = ({
  serviceRequestId,
  openDialog,
  setOpenDialog,
}: Props) => {
  const [staffId, setStaffId] = useState("");

  const { data } = useGetAllStaff();

  const staffList = data?.data || [];

  const { mutateAsync: assignStaff, isPending } =
    useAssignStaffToRequestService();

  const handleAssign = async () => {
    try {
      const response = await assignStaff({
        serviceRequestId,
        staffId,
      });

      if (response?.success) {
        toast.success("Staff assign successfully");
        setOpenDialog(false);
      }
    } catch (error) {
      toast.success("Fail to assign");
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Assign a Staff</DialogTitle>
        </DialogHeader>

        <div>
          <p className="font-bold mt-2">Choose a Staff:</p>
          <Select onValueChange={(value) => setStaffId(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Assign Staff" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">-None- </SelectItem>
                {staffList.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Cancel</Button>
          </DialogClose>
          <Button onClick={handleAssign}>
            {isPending ? (
              <>
                <Spinner /> Assigning
              </>
            ) : (
              "Assign this staff"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminAssignStaffDialog;
