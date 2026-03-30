import React from "react";
import WhatsAppButton from "@/common/WhatsAppButton";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";

const DefaultLayout = ({ children }) => {

  return (
    <>
      <Cursor />
      <WhatsAppButton />
      <ProgressScroll />
      {children}
    </>
  );
};

export default DefaultLayout;
