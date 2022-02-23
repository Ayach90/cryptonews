import { AppBar, Container } from "@mui/material";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
  ogtitle?: string;
  ogimage?: string;
};

const Header = ({
  title,
  description,
  ogtitle = undefined,
  ogimage = undefined,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogtitle} />
        <meta property="og:image" content={ogimage} />
      </Head>
      <AppBar position="static"></AppBar>
    </>
  );
};

export default Header;
