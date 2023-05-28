import React, { ReactNode } from "react";
import styles from "./Section.module.css";

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className={`${styles["title"]}`}>{children}</h2>;
};
