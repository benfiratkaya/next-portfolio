import { Fragment } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


import TextLogo from "@/components/TextLogo";
import {classNames} from "@/helpers/classNames";

const navigation = [
  { name: 'header.blog', href: '/blog' },
  { name: 'header.projects', href: '/projects' },
  { name: 'header.about', href: '/about' },
  { name: 'header.resume', href: '/resume.pdf', target: "_blank" },
];

export default function Header() {
  const router = useRouter();
  const {t} = useTranslation("common");

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              {/*<Logo />*/}
              <TextLogo>
                {process.env.NEXT_PUBLIC_SITE_NAME}
              </TextLogo>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          
          <nav className="hidden space-x-10 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.target || ""}
                className={classNames("text-base font-medium hover:text-gray-900", router.pathname === item.href ? "text-gray-900" : "text-gray-500")}
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>
          
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link href="/contact" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600">
              {t('header.lets-talk')}
            </Link>
          </div>
        </div>
      </div>
      
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          {({ close }) => (
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link href="/" onClick={() => close()}>
                    {/*<Logo />*/}
                    <TextLogo>
                      {process.env.NEXT_PUBLIC_SITE_NAME}
                    </TextLogo>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => close()}
                      target={item.target || ""}
                      className={classNames("text-base font-medium hover:text-gray-700", router.pathname === item.href ? "text-gray-900" : "text-gray-500")}
                    >
                      {t(item.name)}
                    </Link>
                  ))}
                </div>
      
                <div>
                  <Link
                    href="/contact"
                    onClick={() => close()}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600"
                  >
                    {t('header.lets-talk')}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}