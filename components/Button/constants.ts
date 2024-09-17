import type { ObjValues } from "@/types";
import type { ButtonVariant } from "./types";
import { COLORS } from "@/constants/colors";

export const BUTTON_LOADER_COLORS: Record<
  ButtonVariant,
  ObjValues<typeof COLORS>
> = {
  primary: COLORS.black,
};
