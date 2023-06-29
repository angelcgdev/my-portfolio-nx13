import { CommonProps } from "../sections";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { DarkBtn } from "../DarkButton/DarkButton";

export const Footer = ({ dictionary }: CommonProps) => {
  return (
    <footer className="py-6 mb-4 relative border-t-2 border-borderc">
      <div className="grid gap-4">
        <div className="flex flex-row justify-between gap-2">
          <h2 className="font-bold">LuisCaroDev</h2>
          <LocaleSwitcher />
        </div>
        <div className="flex flex-row justify-between gap-2 items-center">
          <p className="text-sm font-light">
            © 2023 Luis Caro.
          </p>
          <DarkBtn />
        </div>
      </div>
    </footer>
  );
};
