import { Fragment, useState } from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {useDetectClickOutside} from "react-detect-click-outside";
import { Transition } from "@headlessui/react";

import  { ChevronUpDownIcon } from "@heroicons/react/24/solid";

import { languages } from "@/data/languages";
import {classNames} from "@/helpers/classNames";

const LanguageMenu = () => {
  const { lang } = useTranslation();
  const { asPath } = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(lang);
  const ref = useDetectClickOutside({
    onTriggered: () => setOpen(false),
  });

  const handleSelect = (code: string) => {
    setOpen(false);
    setSelected(code);
    localStorage.setItem("lang", code);
  };
  
  return (
    <div ref={ref}>
      <div className="relative">
        <div
          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer select-none"
          onClick={() => setOpen(!open)}
        >
          <span className="block truncate">
            {languages[selected as keyof typeof languages]}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </div>
      
        <Transition
          show={open}
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute bottom-12 z-10 mb-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {Object.entries(languages).map(([code, language]) => (
              <Link href={asPath} locale={code} key={code}>
                <div
                  className={classNames(
                    selected === code
                      ? "text-white bg-blue-500"
                      : "text-gray-900 hover:bg-gray-50",
                    "cursor-pointer select-none relative py-2 pl-3 pr-9"
                  )}
                  onClick={() => handleSelect(code)}
                >
                  <span
                    className={classNames(
                      selected === code ? "font-semibold" : "font-normal",
                      "block truncate"
                    )}
                  >
                    {language}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default LanguageMenu;
