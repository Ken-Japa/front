import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div className="border-t border-b border-infoContrastText">{children}</div>
            <Footer />
        </>
    );
}