import Link from "next/link";
import { CommonProps } from "../sections";

export const Footer = ({ dictionary }: CommonProps) => {
  return (
    <footer className="py-6 mb-4 relative">
      <h1 className="text-sm text-bold">
        {dictionary.footer.by + " "}
        <Link
          href="http://www.luiscarodev.com"
          className="underline underline-offset-1"
        >
          LuisCaroDev
        </Link>
      </h1>
    </footer>
  );
};
