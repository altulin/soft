import { FC, useState } from "react";
import IconStart from "@/shared/images/sprite/swap_right.svg";
import IconEnd from "@/shared/images/sprite/calendar_regular.svg";
import styleForm from "@/widgets/form/style/Form.module.scss";
import style from "./SearchDatePicker.module.scss";
import clsx from "clsx";
import { SpriteSVG } from "@/shared/ui";
import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

interface ISearchDatePicker {
  id: string;
}

const SearchDatePicker: FC<ISearchDatePicker> = ({ id }) => {
  registerLocale("ru", ru);

  // const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
  //   null,
  //   null,
  // ]);
  // const [startDate, endDate] = dateRange;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div
      className={clsx(
        styleForm.container,
        styleForm["container--filter"],
        style.picker,
      )}
    >
      <div className={clsx(styleForm.label, style.picker__label)}>
        <span className={clsx(styleForm.label__text, style.picker__text)}>
          Период
        </span>
      </div>

      <>
        <DatePicker
          locale="ru"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Дата с"
          className={clsx(
            styleForm.datepicker,
            style.picker__datepicker,
            style["picker__datepicker--start"],
          )}
          wrapperClassName={clsx(
            styleForm.datepicker__wrapper,
            style.picker__wrapper,
            style["picker__wrapper--start"],
          )}
          dateFormat={"dd.MM.yyyy"}
          showIcon={true}
          timeIntervals={60}
          showTimeCaption={false}
          icon={
            <SpriteSVG icon={IconStart} className={clsx(style.picker__icon)} />
          }
          id={`${id}-start`}
        />

        <DatePicker
          locale="ru"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          placeholderText="Дата по"
          className={clsx(
            styleForm.datepicker,
            style.picker__datepicker,
            style["picker__datepicker--end"],
          )}
          wrapperClassName={clsx(
            styleForm.datepicker__wrapper,
            style.picker__wrapper,
            style["picker__wrapper--end"],
          )}
          dateFormat={"dd.MM.yyyy"}
          showIcon={true}
          timeIntervals={60}
          showTimeCaption={false}
          icon={
            <SpriteSVG icon={IconEnd} className={clsx(style.picker__icon)} />
          }
          id={`${id}-end`}
        />
      </>
    </div>
  );
};
export default SearchDatePicker;
