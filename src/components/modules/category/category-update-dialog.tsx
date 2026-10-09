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
import { useGetCategoryById, useUpdateCategory } from "@/hooks/category.hooks";
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

const CategoryUpdateDialog = ({
  openDialog,
  setOpenDialog,
  selectedItem,
}: Props) => {
  const { mutate: updateCategory, isPending } = useUpdateCategory();

  const { data: categoryData } = useGetCategoryById(
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
      const UpdateData = {
        id: selectedItem,
        name: value.name,
      };

      updateCategory(UpdateData, {
        onSuccess: (res) => {
          toast.success("Category Update Successfully");
          setOpenDialog(false);
        },
        onError: (err) => {
          toast.error("Something went wrong");
        },
      });
    },
  });

  useEffect(() => {
    if (categoryData?.data) {
      form.setFieldValue("name", categoryData.data.name);
    }
  }, [categoryData, form]);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <form>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Update Category</DialogTitle>
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

export default CategoryUpdateDialog;
