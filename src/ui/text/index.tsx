import cn from "classnames";
import { FC, PropsWithChildren } from "react";

import styles from "./styles.module.css";

export enum ETextVariant {
  REGULAR = "REGULAR",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  HEAD = "HEAD",
}

export type TTextVariant = keyof typeof ETextVariant;

interface TextProps {
  variant: TTextVariant;
  className?: string;
  style?: React.CSSProperties;
}

export const Text: FC<PropsWithChildren<TextProps>> = (props) => {
  const {
    variant,
    children,
    className = "",
    style
  } = props;
  return (
      <p
          style={style}
          className={cn(
              styles.text,
              {
                [styles.small]: variant === ETextVariant.SMALL,
                [styles.regular]: variant === ETextVariant.REGULAR,
                [styles.medium]: variant === ETextVariant.MEDIUM,
                [styles.head]: variant === ETextVariant.HEAD,
              },
              className
          )}
      >
        {children}
      </p>
  );
};
