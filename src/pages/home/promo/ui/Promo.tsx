import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { Filter } from "../filter";

const Promo: FC = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <div className={clsx(style.promo__bar)}></div>
        <div className={clsx(style.promo__content)}>
          <Filter />
        </div>
      </div>
    </section>
  );
};
export default Promo;
