"use client";
import { useForm } from "@tanstack/react-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import {
  useCreateComplaint,
  useCreateServiceRequest,
  useGetAllServices,
} from "@/hooks";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { Spinner } from "../ui/spinner";
import { useRouter } from "next/navigation";

const ServiceRequestForm = () => {
  const [serviceId, setServiceId] = useState("");
  const router = useRouter();
  const { mutate: createService, isPending } = useCreateServiceRequest();

  const { data } = useGetAllServices();
  const services = data?.data || [];

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      address: "",
      contactNumber: "",
    },

    validators: {
      //onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      const data = {
        title: value.title,
        description: value.description,
        address: value.address,
        serviceId,
        contactNumber: value.contactNumber,
      };
      if (!serviceId) {
        toast.error("Please choose a service");
        return;
      }

      createService(data, {
        onSuccess: (res) => {
          if (!res.success) {
            toast.error("Something went wrong");
            return;
          }
          console.log();
          toast.success("Service Requeset sent Success");

          const params = new URLSearchParams({
            serviceRequestId: res.data.id,
          });

          router.push(`/citizen/payment/payment-create?${params.toString()}`);
        },
        onError: (err) => {
          toast.error("Something went wrong");
        },
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field name="title">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    value={field.state.value}
                    autoComplete="off"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="description">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    value={field.state.value}
                    autoComplete="off"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="address">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Address</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    value={field.state.value}
                    autoComplete="off"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="contactNumber">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Contact Number</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    value={field.state.value}
                    autoComplete="off"
                    type="tel"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <div className="grid grid-cols-3 gap-2">
            {services.map((item) => (
              <Button
                asChild
                key={item.id}
                variant={serviceId === item.id ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setServiceId(item.id)}
              >
                <p>{item.name}</p>
              </Button>
            ))}
          </div>

          <Button type="submit">
            {isPending ? (
              <>
                <Spinner /> submitting
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
