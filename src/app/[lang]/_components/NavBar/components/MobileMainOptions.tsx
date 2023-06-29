import { DarkBtn } from "../../DarkButton/DarkButton";
import { MenuButton } from "./MenuButton";
interface Props {
  isHome: boolean;
  open: boolean;
  onChange: () => void;
}
export const MobileMainOptions = ({ open, onChange, isHome }: Props) => {
  if (isHome) {
    return <div className="md:hidden">
      <MenuButton onClick={onChange} open={open} />
    </div>
  }
  return (
    <>
    </>
  );
};
