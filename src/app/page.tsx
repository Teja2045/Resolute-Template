'use client'

import { usePathname } from 'next/navigation'
import React from "react";
import HomeComponent from "./components/HomeComponent";
import Image from "next/image";
import AccountDetails from "./components/AccountDetails";
import TopNav from "./components/TopNav";
import Walletpage from './components/WalletPage'

const OverviewPage = () => {
  return (
    <div className="page">
      <TopNav />
      <AccountDetails />
      <Walletpage />
    </div>
  );
};

export default OverviewPage;
