import React from "react";
import Image from "next/image";
import AccountDetails from "./components/AccountDetails";
import TopNav from "./components/TopNav";
import BalanceOverview from "./components/BalanceOverview";
import AssetsTable from "./components/AssetsTable";

const OverviewPage = () => {
  return (
    <div className="page space-y-10">
      <TopNav />
      <AccountDetails />
      <BalanceOverview />
      <AssetsTable />
    </div>
  );
};

export default OverviewPage;
