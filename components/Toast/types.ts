import type { WithStyle } from "@/types";

export type ToastVariant = "success" | "error" | "warning" | "info";

export type ToastProps = WithStyle<{
  message: string;
  variant?: ToastVariant;
}>;
