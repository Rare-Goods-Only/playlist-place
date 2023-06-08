/** @format */

import { cva, VariantProps } from "cva";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "../ButtonOrLink";
import styles from "./button.module.css";

const buttonStyles = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
      tertiary: styles.tertiary,
      tertiaryFilled: styles.tertiaryFilled,
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ intent, ...props }: Props) {
  return <ButtonOrLink className={buttonStyles({ intent })} {...props} />;
}
