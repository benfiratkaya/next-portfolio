import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ChildrenProps} from "@/types/ChildrenProps";

export default function Layout({children}: ChildrenProps) {
    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    );
}