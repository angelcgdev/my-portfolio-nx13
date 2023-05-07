import React, { MouseEventHandler, ReactNode } from "react";
import { Loader } from "../Loader";
import styles from "./AsyncButton.module.css";

interface Props<T = any> {
  className?: string;
  isLoading: boolean;
  disabled: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<T> | undefined;
  type?: "submit" | "reset" | "button" | undefined;
}
export const AsyncButton = ({
  className,
  children,
  isLoading,
  type,
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      className={`${styles.wrapper} ${className}`}
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
    >
      {children}
      {isLoading ? <Loader /> : <></>}
    </button>
  );
};
