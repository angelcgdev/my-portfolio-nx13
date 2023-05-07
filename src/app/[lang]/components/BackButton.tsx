"use client";
import Link from "next/link";
import { MouseEvent } from "react";
import { CommonProps } from "./sections";

export const BackButton = ({ dictionary }: CommonProps) => {
  const handleBackAction = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    history.back();
  };
  return (
    <Link
      href="/"
      onClick={handleBackAction}
      className="dark:text-slate-300 dark:hover:text-white dark:active:text-white text-slate-600 hover:text-black active:text-black"
    >
      ← {dictionary["back-button"]}
    </Link>
  );
};
