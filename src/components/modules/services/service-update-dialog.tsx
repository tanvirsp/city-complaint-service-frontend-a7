import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import {
  useCreateNewService,
  useGetServicesById,
  useUpdateService,
} from "@/hooks/service.hooks";
import { useForm } from "@tanstack/react-form";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "sonner";

interface Props {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  selectedItem: string;
}

const ServiceUpdateDialog = ({
  openDialog,
  setOpenDialog,
  selectedItem,
}: Props) => {
  const { mutate: updateService, isPending } = useUpdateService();

  const { data: serviceData, isPending: servicePending } = useGetServicesById(
    selectedItem,
    openDialog && !!selectedItem,
  );

  const form = useForm({
    defaultValues: {
      name: "",
      serviceFee: "",
    },

    validators: {
      //onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      const serviceData = {
        serviceId: selectedItem,
        name: value.name,
        serviceFee: Number(value.serviceFee),
      };

      updateService(serviceData, {
        onSuccess: (res) => {
          toast.success("Service Update Successfully");
          setOpenDialog(false);
        },
        onError: (err) => {
          toast.error("Something went wrong");
        },
      });
    },
  });

  useEffect(() => {
    if (serviceData?.data) {
      form.setFieldValue("name", serviceData.data.name);
      form.setFieldValue("serviceFee", String(serviceData.data.serviceFee));
    }
  }, [serviceData, form]);

  if (servicePending) {
    return <p>Loading...</p>;
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <form>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Update Paid Service</DialogTitle>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field name="name">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Service Name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        value={field.state.value}
                        autoComplete="off"
                        aria-invalid={isInvalid}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              <form.Field name="serviceFee">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Service Fee</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        value={field.state.value}
                        autoComplete="off"
                        aria-invalid={isInvalid}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="destructive">Cancel</Button>
                </DialogClose>
                <Button type="submit">
                  {isPending ? "Updating ..." : "Update Service"}
                </Button>
              </DialogFooter>
            </FieldGroup>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ServiceUpdateDialog;
