import { Badge } from "@/components/ui/badge";
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
import { useGetComplaintDetails, useGetRequestServiceDetails } from "@/hooks";
import {
  useAdminGetRequestServiceDetails,
  useAssignStaffToComplaint,
  useGetAllStaff,
  useRejectComplaint,
} from "@/hooks/admin.hooks";
import { Complaint, ComplaintStatus } from "@/types";
import { CalendarDays, CreditCard, MapPin, Phone, Receipt } from "lucide-react";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

interface Props {
  selectedComplaint: string;
  openSheet: boolean;
  setOpenSheet: Dispatch<SetStateAction<boolean>>;
}

const AdminServiceReviewSheet = ({
  selectedComplaint,
  openSheet,
  setOpenSheet,
}: Props) => {
  const { data } = useAdminGetRequestServiceDetails(
    selectedComplaint,
    openSheet && !!selectedComplaint,
  );

  const serviceRequestData = data?.data;
  const payment = serviceRequestData?.payment;
  const service = serviceRequestData?.service;

  const formatDate = (date: string) =>
    new Date(date).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatAmount = (amount: string | number, currency = "BDT") =>
    new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(Number(amount));

  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader>
          <div className="flex items-center justify-between gap-3 pr-6">
            <SheetTitle className="text-xl">Service Details</SheetTitle>

            <Badge
              variant={
                serviceRequestData?.status === "PENDING"
                  ? "secondary"
                  : "default"
              }
            >
              {serviceRequestData?.status}
            </Badge>
          </div>

          <SheetDescription>
            Review the service request and its payment details.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 px-4 pb-6">
          {/* Service Information */}
          <section className="space-y-4">
            <h3 className="font-semibold text-base">Service Information</h3>

            <div>
              <p className="text-sm text-muted-foreground">Subject</p>
              <p className="font-medium">{serviceRequestData?.title}</p>
            </div>

            {serviceRequestData?.description && (
              <div>
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="text-sm">{serviceRequestData?.description}</p>
              </div>
            )}

            {service && (
              <div>
                <p className="text-sm text-muted-foreground">Service Type</p>
                <p className="font-medium">{service.name}</p>
              </div>
            )}

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{serviceRequestData?.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Contact Number</p>
                <p className="font-medium">
                  {serviceRequestData?.contactNumber}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 size-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Requested On</p>
                <p className="font-medium">
                  {serviceRequestData?.createdAt &&
                    formatDate(serviceRequestData?.createdAt)}
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Fee Information */}
          <section className="space-y-3">
            <h3 className="font-semibold text-base">Fee Information</h3>

            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Service Fee</p>
                  <p className="mt-1 text-xl font-bold">
                    {serviceRequestData?.createdAt &&
                      formatAmount(serviceRequestData?.serviceFee)}
                  </p>
                </div>

                <CreditCard className="size-6 text-muted-foreground" />
              </div>
            </div>
          </section>

          {/* Payment Information */}
          {payment && (
            <>
              <Separator />

              <section className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-base">
                    Payment Information
                  </h3>

                  <Badge
                    variant={
                      payment.status === "PAID" ? "default" : "secondary"
                    }
                  >
                    {payment.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Amount Paid</p>
                    <p className="font-semibold">
                      {formatAmount(payment.amount, payment.currency)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Currency</p>
                    <p className="font-medium">{payment.currency}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Payment Provider
                    </p>
                    <p className="font-medium">{payment.provider}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Payment Method
                    </p>
                    <p className="font-medium">{payment.paymentMethod}</p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-3">
                  <div className="flex items-start gap-3">
                    <Receipt className="mt-0.5 size-4 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">
                        Transaction ID
                      </p>
                      <p className="break-all font-mono text-sm">
                        {payment.transactionId}
                      </p>
                    </div>
                  </div>
                </div>

                {payment.paidAt && (
                  <div>
                    <p className="text-sm text-muted-foreground">Paid On</p>
                    <p className="font-medium">{formatDate(payment.paidAt)}</p>
                  </div>
                )}
              </section>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AdminServiceReviewSheet;
