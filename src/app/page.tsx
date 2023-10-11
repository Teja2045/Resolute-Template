'use client'

import { usePathname } from 'next/navigation'
import React from "react";
import HomeComponent from "./components/HomeComponent";
import Image from "next/image";
import AccountDetails from "./components/AccountDetails";
import TopNav from "./components/TopNav";

import BalanceOverview from "./components/BalanceOverview";

const OverviewPage = () => {
  return (
    <div className="page space-y-10">
      <TopNav />
      <AccountDetails />
      <BalanceOverview />
    </div>
  );
};

export default OverviewPage;
