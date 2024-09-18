import { z } from "zod";
import { signInFormSchema } from "./schemas";

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
