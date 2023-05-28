"use client";
import { InputGroup } from "../../../InputGroup";
import { useContact } from "../hooks/useContact";
import { AsyncButton } from "../../../AsynButton/AsyncButton";
import { CommonProps } from "../../Welcome";

export const Form = ({ dictionary }: CommonProps) => {
  const { formik, isSending, sended } = useContact({ dictionary });
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={formik.handleSubmit}
      noValidate={true}
    >
      <InputGroup
        type="text"
        label={dictionary.contact.form.name.label + ":"}
        error={formik.errors.name}
        id="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <InputGroup
        type="text"
        label={dictionary.contact.form.subject.label + ":"}
        error={formik.errors.subjet}
        id="subjet"
        onChange={formik.handleChange}
        value={formik.values.subjet}
      />
      <InputGroup
        type="email"
        label={dictionary.contact.form.email.label + ":"}
        id="email"
        error={formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <InputGroup
        label={dictionary.contact.form.message.label + ":"}
        id="message"
        imputClass="resize-none"
        error={formik.errors.message}
        onChange={formik.handleChange}
        value={formik.values.message}
        isTextArea
        autoComplete="off"
      />
      <AsyncButton
        className="button primary w-min"
        disabled={sended}
        type="submit"
        isLoading={isSending}
      >
        {dictionary.contact.form["btn-send"]}
      </AsyncButton>
    </form>
  );
};
