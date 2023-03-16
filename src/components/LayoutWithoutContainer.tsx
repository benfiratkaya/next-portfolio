import {ChildrenProps} from "@/types/ChildrenProps";

import Header from '@/components/Header';
import Footer from "@/components/Footer";

const LayoutWithoutContainer = ({children}: ChildrenProps) => {
  return (
    <>
     <Header />
      {children}
      <Footer/>
    </>
  );
};

export default LayoutWithoutContainer;
