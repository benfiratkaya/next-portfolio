import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import moment from "moment";
import "moment/locale/tr";

function formatDate(date: string, lang: string): string {
  let format = "MMMM D, YYYY";
  switch (lang) {
    case "tr":
      format = "D MMMM YYYY";
      break;
  }
  return moment(date).locale(lang).format(format).toString();
}

export function useDate(date: string): [string, (date: string) => void] {
  const { lang } = useTranslation();
  const [dateValue, setDateValue] = useState(formatDate(date, lang));

  useEffect(() => {
    setDateValue(formatDate(date, lang));
  }, [date, lang]);

  return [dateValue, setDateValue];
}
