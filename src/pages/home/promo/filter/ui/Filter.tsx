import { FC, RefObject, useState } from "react";
import style from "./Filter.module.scss";
import clsx from "clsx";
import SearchName from "../name/SearchName";
import SearchSelect from "../select/SearchSelect";
import SearchDatePicker from "../picker/SearchDatePicker";
import VueButton from "../vue/VueButton";
import Button from "@/widgets/button/Button";
import Icon from "@/shared/images/sprite/list-solid.svg";
import IconFilter from "@/shared/images/sprite/filter.svg";
import { useIsDeskDevice } from "@/shared/hooks";
import { useClickAway } from "@uidotdev/usehooks";

const Filter: FC = () => {
  const isDesk = useIsDeskDevice();
  const [isMenu, setMenu] = useState(false);

  const ref = useClickAway(() => {
    setMenu(false);
  });

  return (
    <div className={clsx(style.filter)}>
      <div
        className={clsx(
          style.filter__inner,
          isDesk && style["filter__inner--hide"],
          isMenu && style["filter__inner--open"],
        )}
        ref={ref as RefObject<HTMLDivElement>}
      >
        <SearchName />
        <SearchSelect placeholder="Все нейросети" id="all" />
        <SearchSelect placeholder="Все теги" id="tags" />
        <SearchSelect placeholder="Тип файлов" id="files" />
        <SearchDatePicker id="date" />

        {isDesk && (
          <Button
            modifier="secondary"
            label="Закрыть"
            onClick={() => setMenu(false)}
          />
        )}
      </div>

      {isDesk && <VueButton icon={IconFilter} onClick={() => setMenu(true)} />}

      <VueButton icon={Icon} />
      <Button label="Добавить" />
    </div>
  );
};
export default Filter;
