import { DarkBtn } from "../../DarkButton/DarkButton";
import { MenuButton } from "./MenuButton";
interface Props {
  isHome: boolean;
  open: boolean;
  onChange: () => void;
}
export const MobileMainOptions = ({ open, onChange, isHome }: Props) => {
  return (
    <ul className="flex flex-row gap-2">
      <li>
        <DarkBtn />
      </li>
      {isHome ? (
        <li className="md:hidden">
          <MenuButton onClick={onChange} open={open} />
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
};
