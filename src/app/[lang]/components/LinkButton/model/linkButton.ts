import { typeSection } from "@/models/section.model";
import { ReactNode } from "react";

export interface LinkButtonProps {
  children?: ReactNode;
  className?: string;
  href: typeSection;
  afterNavigate?: Function;
}
