import {ChildrenProps} from "@/types/ChildrenProps";

import Header from '@/components/Header';
import Footer from "@/components/Footer";

const Layout = ({children}: ChildrenProps) => {
  return (
    <>
     <Header />
      <div className="mx-auto max-w-7xl py-8 md:py-20 px-4 sm:px-6">
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
