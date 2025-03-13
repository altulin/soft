import { FC } from "react";
import style from "./VueButton.module.scss";
import clsx from "clsx";
import { SpriteSVG } from "@/shared/ui";

const VueButton: FC<{ icon: string; onClick?: () => void }> = ({
  icon,
  onClick,
}) => {
  return (
    <button onClick={onClick} type="button" className={clsx(style.button)}>
      <SpriteSVG icon={icon} className={clsx(style.button__icon)} />
    </button>
  );
};
export default VueButton;
