import z from "zod";

export const serviceRequestCreateZodSchema = z.object({
  title: z.string("Not a String").min(5, " Must Minimum 5 Characters Long."),
  description: z
    .string("Not A String!!!!!")
    .min(5, " Must Minimum 5 Characters Long."),
  address: z
    .string("Not A String!!!!!")
    .min(5, " Must Minimum 5 Characters Long."),
  contactNumber: z
    .string("Not A String!!!!!")
    .min(11, " Enter a valid number."),
});
