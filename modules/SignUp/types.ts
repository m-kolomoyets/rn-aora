import { z } from "zod";
import { signUpFormSchema } from "./schemas";

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
