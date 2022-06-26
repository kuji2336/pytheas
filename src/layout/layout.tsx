import React from "react";
import { Header } from "../components/global/header";
const Layout = ({ children }:{children:React.ReactNode}) => {
  return (
    <>
      <Header/>
      <div>{children}</div>
    </>
  );
};

export default Layout;
