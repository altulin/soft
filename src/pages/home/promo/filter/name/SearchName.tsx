import clsx from "clsx";
import { FC } from "react";
import styleForm from "@/widgets/form/style/Form.module.scss";
import { SpriteSVG } from "@/shared/ui";
import Icon from "@/shared/images/sprite/search.svg";
import style from "./SearchName.module.scss";

const SearchName: FC = () => {
  return (
    <div
      className={clsx(
        style.search,
        styleForm.container,
        styleForm["container--filter"],
      )}
    >
      <SpriteSVG icon={Icon} className={clsx(style.search__icon)} />
      <label htmlFor="search_name" className={clsx(styleForm.label)}>
        <input
          className={clsx(styleForm.input, style.search__input)}
          type="text"
          placeholder="Поиск медиа файлов по названию или ID"
        />
      </label>
    </div>
  );
};
export default SearchName;
