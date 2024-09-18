import { z } from "zod";
import { emailSchema, passwordSchema, requiredStringSchema } from "@/schemas";

export const signUpFormSchema = z.object({
  username: requiredStringSchema,
  email: emailSchema,
  password: passwordSchema,
});
