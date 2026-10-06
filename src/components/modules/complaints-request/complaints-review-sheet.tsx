import { Button } from "@/components/ui/button";
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
import { useGetAllStaff } from "@/hooks/admin.hooks";
import { Complaint, ComplaintStatus } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  selectedComplaint: Complaint | null;
  onClose: () => void;
}

const ComplaintsReviewSheet = ({ selectedComplaint, onClose }: Props) => {
  const [confirmRejection, setConfirmRejection] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [staffId, setStaffId] = useState("");

  const { data } = useGetAllStaff();
  const staffData = data?.data || [];

  const handleReject = () => {
    setConfirmRejection(true);
  };

  const handleClose = () => {
    setConfirmRejection(false);
    setRejectionReason("");
    onClose();
  };

  const handleAcceptComplaint = () => {
    console.log("staffId ", staffId);
    console.log("com Id ", selectedComplaint?.id);
  };

  return (
    <Sheet
      open={!!selectedComplaint}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Complaint Details</SheetTitle>
          <SheetDescription>
            <Button variant={"default"}>{selectedComplaint?.priority}</Button>
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <div className="mb-2">
            <p className="text-lg">{selectedComplaint?.title}</p>
            <p>{selectedComplaint?.description}</p>
          </div>
          <Separator />
          <div className="mt-2">
            <p className="font-bold">Location:</p>
            <p>{selectedComplaint?.location}</p>
          </div>
          <div>
            {selectedComplaint?.beforeImageUrl && (
              <Image
                src={selectedComplaint?.beforeImageUrl}
                width={300}
                height={300}
                alt="Picture of the author"
                className="rounded-md mt-2"
              />
            )}
          </div>
          <div>
            <p className="font-bold mt-2">Choose a Staff:</p>
            <Select onValueChange={(value) => setStaffId(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Assign Staff" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="">-None- </SelectItem>
                  {staffData.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          {confirmRejection ? (
            <div className="flex flex-col gap-3">
              <Textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
              />

              <div className="flex gap-2">
                <Button
                  onClick={handleClose}
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  // onClick={() => handleReviewAction("REJECTED")}
                  variant="destructive"
                  size="lg"
                  className="flex-1"
                  disabled={!rejectionReason}
                >
                  Confirm Rejection
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 justify-center mt-4">
              <Button
                onClick={handleReject}
                size={"lg"}
                variant={"destructive"}
                className="flex-1"
              >
                Reject Complaint
              </Button>
              <Button
                onClick={handleAcceptComplaint}
                size={"lg"}
                variant={"default"}
                className="flex-1"
              >
                Accept Complaint
              </Button>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ComplaintsReviewSheet;
