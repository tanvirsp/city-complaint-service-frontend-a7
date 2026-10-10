import z from "zod";

export const complaintCreateZodSchema = z.object({
  title: z.string("Not a String").min(5, " Must Minimum 5 Characters Long."),
  description: z
    .string("Not A String!!!!!")
    .min(5, " Must Minimum 5 Characters Long."),
  location: z
    .string("Not A String!!!!!")
    .min(5, " Must Minimum 5 Characters Long."),
  categoryId: z.string("Not A String!!!!!"),
  complaintImage: z.file("Upload an Image"),
});
