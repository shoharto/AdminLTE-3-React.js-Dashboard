import React from "react";
import {
  AppHeader,
  AppSidebar,
  AppContent,
  AppFooter,
} from "../components/index";
const DefaultLayout = () => {
  return (
    <>
      <AppHeader />
      <AppSidebar />
      <AppContent />
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
