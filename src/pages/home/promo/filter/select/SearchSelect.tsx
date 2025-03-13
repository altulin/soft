import { FC } from "react";
import Icon from "@/shared/images/sprite/arr_select.svg";
import styleForm from "@/widgets/form/style/Form.module.scss";
import style from "./SearchSelect.module.scss";
import clsx from "clsx";
import { SpriteSVG } from "@/shared/ui";
import { getClasses } from "@/widgets/form/ui/components/select/data";
import Select from "react-select";

interface ISearchSelect {
  placeholder: string;
  id: string;
}

const SearchSelect: FC<ISearchSelect> = ({ id, placeholder }) => {
  return (
    <div
      className={clsx(
        style.select,

        styleForm.container,
        styleForm["container--filter"],
        style[`select--${id}`],
      )}
    >
      <label htmlFor={id} className={clsx(styleForm.label)}>
        <Select
          inputId={id}
          defaultMenuIsOpen={false}
          // options={options}
          placeholder={placeholder}
          className={clsx(styleForm.select)}
          classNames={{
            ...getClasses(),
          }}
          name={id}
          // onChange={(val: any) => onChange(val?.value)}
          // value={(options && options.find((el) => el.value === value)) || ""}
          components={{
            DropdownIndicator: () => (
              <SpriteSVG icon={Icon} className={clsx(style.select__icon)} />
            ),
          }}
          noOptionsMessage={() => "Данные не загрузились"}
        />
      </label>
    </div>
  );
};
export default SearchSelect;
