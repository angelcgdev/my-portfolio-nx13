"use client";
import { ToastContainer } from "react-toastify";

export const Toaster = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar
      closeOnClick={false}
    />
  );
};
