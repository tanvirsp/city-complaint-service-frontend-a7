import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useGetComplaintDetails } from "@/hooks";
import {
  useAssignStaffToComplaint,
  useGetAllStaff,
  useRejectComplaint,
} from "@/hooks/admin.hooks";
import { Complaint, ComplaintStatus } from "@/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

interface Props {
  selectedComplaint: string;
  openSheet: boolean;
  setOpenSheet: Dispatch<SetStateAction<boolean>>;
}

const CitizenMyComplaintReviewSheet = ({
  selectedComplaint,
  openSheet,
  setOpenSheet,
}: Props) => {
  const { data } = useGetComplaintDetails(
    selectedComplaint,
    openSheet && !!selectedComplaint,
  );

  const compliantData = data?.data;

  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Complaint Details</SheetTitle>
          <SheetDescription>
            <Button variant={"default"}>{compliantData?.status}</Button>
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <div className="mb-3">
            <p>Subject</p>
            <p>{compliantData?.title}</p>
          </div>
          <div className="mb-3">
            <p>Details</p>
            <p>{compliantData?.description}</p>
          </div>
          <div className="mb-3">
            <p>Location</p>
            <p>{compliantData?.location}</p>
          </div>

          <div>
            {compliantData?.beforeImageUrl && (
              <Image
                src={compliantData?.beforeImageUrl}
                width={300}
                height={300}
                alt="Picture of the author"
                className="rounded-md mt-2"
              />
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CitizenMyComplaintReviewSheet;
