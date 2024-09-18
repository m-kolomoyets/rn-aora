import { z } from "zod";
import { emailSchema, passwordSchema } from "@/schemas";

export const signInFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
