"use client";
import { useContext, useState } from "react";
import { form } from "../models/form.model";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { formErrors } from "../models/formError.model";
import { CommonProps } from "../../Welcome";

const initialValues: form = {
  name: "",
  email: "",
  subjet: "",
  message: "",
};
interface Validate extends CommonProps {
  values: form;
}

export function useContact({ dictionary }: CommonProps) {
  const [sended, setSended] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (values: form) => {
    setIsSending(true);
    try {
      const request = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const statusCode = request.status;
      if (statusCode === 200) {
        formik.resetForm();
        setSended(true);
        toast.success(dictionary.contact.form.notification.success);
      } else {
        toast.error(dictionary.contact.form.notification.error);
      }
    } finally {
      setIsSending(false);
    }
  };
  const validate = (values: form) => {
    const errors: formErrors = {};
    const { name, subjet, email, message } = values;
    if (!name.trim()) {
      errors.name = dictionary.contact.form.name.error_empty;
    }
    if (!subjet.trim()) {
      errors.subjet = dictionary.contact.form.subject.error_empty;
    }

    if (!email.trim()) {
      errors.email = dictionary.contact.form.email.error_empty;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = dictionary.contact.form.email.error_invalid;
    }

    if (!message.trim()) {
      errors.message = dictionary.contact.form.message.error_empty;
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return { formik, isSending, sended };
}
