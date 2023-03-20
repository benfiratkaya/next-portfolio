import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Custom404 = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-blue-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                {t('404.title')}
              </h1>
              <p className="mt-3 text-base text-gray-500">
                {t('404.description')}
              </p>
            </div>
            <div className="mt-8 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href="/" className="button">
                {t('404.button')}
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Custom404;
