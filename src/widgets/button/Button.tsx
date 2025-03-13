import clsx from "clsx";
import { FC } from "react";
import style from "./Button.module.scss";

interface IButton {
  type?: "button" | "submit";
  label: string;
  onClick?: () => void;
  modifier?: undefined | "secondary";
}

const Button: FC<IButton> = ({ type = "button", label, onClick, modifier }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(style.button, style[`button--${modifier}`])}
    >
      {label}
    </button>
  );
};
export default Button;
