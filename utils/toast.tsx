import { toast as nativeToast } from "@backpackapp-io/react-native-toast";
import type { ToastVariant } from "@/components/Toast/types";
import { ONE_SECOND } from "@/constants";
import Toast from "@/components/Toast";

export type ToastOptions = {
  variant?: ToastVariant;
};

export const toast = (message: string, options?: ToastOptions) => {
  nativeToast(message, {
    customToast(toast) {
      return (
        <Toast
          style={{
            width: toast.width,
          }}
          variant={options?.variant}
          message={toast.message?.toString() ?? ""}
        />
      );
    },
    duration: 5 * ONE_SECOND,
  });
};
