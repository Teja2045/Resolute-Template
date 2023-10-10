import React from "react";
import HomeComponent from "./components/HomeComponent";
import Image from "next/image";
import AccountDetails from "./components/AccountDetails";

const OverviewPage = () => {
  return (
    <div className="page">
      <AccountDetails />
    </div>
  );
};

export default OverviewPage;
