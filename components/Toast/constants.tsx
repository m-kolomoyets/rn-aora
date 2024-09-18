import type { SvgProps } from "react-native-svg";
import type { ToastVariant } from "./types";
import InfoCircleIcon from "@/components/Icons/components/InfoCircleIcon";
import AlertCircleIcon from "@/components/Icons/components/AlertCircleIcon";
import CheckCircleIcon from "@/components/Icons/components/CheckCircleIcon";
import { ObjValues } from "@/types";
import { COLORS } from "@/constants/colors";

export const TOAST_ICONS: Record<ToastVariant, React.FC<SvgProps>> = {
  info: InfoCircleIcon,
  success: CheckCircleIcon,
  error: AlertCircleIcon,
  warning: AlertCircleIcon,
};

export const TOAST_ICON_COLOR: Record<
  ToastVariant,
  ObjValues<typeof COLORS>
> = {
  info: COLORS.blue300,
  success: COLORS.green300,
  error: COLORS.red300,
  warning: COLORS.yellow300,
};
