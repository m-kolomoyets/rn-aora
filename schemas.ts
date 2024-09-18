import { z } from "zod";

export const requiredStringSchema = z
  .string({
    required_error: "This field is required",
  })
  .trim()
  .min(1, "This field is required");

export const emailSchema = z
  .string({
    required_error: "Email is required",
  })
  .trim()
  .email("Invalid email address");

export const passwordSchema = z
  .string({
    required_error: "Password is required",
  })
  .trim()
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must be at most 20 characters long");
