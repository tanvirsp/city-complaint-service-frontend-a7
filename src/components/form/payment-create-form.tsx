"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { useGetRequestServiceDetails, useMakePayment } from "@/hooks";

import { MapPin, Phone, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Spinner } from "../ui/spinner";

const PaymentCreateForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const serviceRequestId = searchParams.get("serviceRequestId") || "";
  const { data } = useGetRequestServiceDetails(serviceRequestId, true);
  const serviceDetails = data?.data;

  const { mutateAsync: makePayment, isPending } = useMakePayment();

  if (!searchParams) {
    return <p>Something went wrong</p>;
  }

  const onPayNow = async () => {
    try {
      const response = await makePayment({
        serviceRequestId,
      });

      console.log(response);

      if (response?.data) {
        window.location.href = response.data;
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return (
    <section>
      <Card className="w-full max-w-md mx-auto mt-7 ">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <p className="text-sm text-muted-foreground">Service Request</p>
            <h3 className="mt-1 text-lg font-semibold">
              {serviceDetails?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {serviceDetails?.service?.name}
            </p>
          </div>

          <Badge variant="secondary">{serviceDetails?.status}</Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="size-4 text-muted-foreground" />
            <span>{serviceDetails?.address}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="size-4 text-muted-foreground" />
            <span>{serviceDetails?.contactNumber}</span>
          </div>

          <div className="rounded-lg border bg-muted/40 p-4">
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="mt-1 text-2xl font-bold">
              BDT {Number(serviceDetails?.serviceFee).toLocaleString("en-BD")}
            </p>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full"
            onClick={onPayNow}
            disabled={serviceDetails?.status !== "PENDING"}
          >
            <CreditCard className="mr-2 size-4" />
            {isPending ? (
              <>
                <Spinner /> Payment Processing
              </>
            ) : (
              " Pay Now"
            )}
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default PaymentCreateForm;
