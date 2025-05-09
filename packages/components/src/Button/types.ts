export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";
export type ButtonSize = "small" | "medium" | "large";

export interface Props {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
}
