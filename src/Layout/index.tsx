import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  ogtitle?: string;
  ogimage?: string;
};

const Layout = ({
  children,
  title,
  description,
  ogimage = undefined,
  ogtitle = undefined,
}: Props) => {
  return (
    <>
      <Header
        title={title}
        description={description}
        ogimage={ogimage}
        ogtitle={ogtitle}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
