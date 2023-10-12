'use client'

import { usePathname } from 'next/navigation'
import React from "react";
import HomeComponent from "./components/HomeComponent";
import Image from "next/image";
import AccountDetails from "./components/AccountDetails";
import TopNav from "./components/TopNav";

import BalanceOverview from "./components/BalanceOverview";
import StakingPopup1 from './components/StakingPopup1';
import Walletpage from './components/WalletPage';
import DeletePopup from './components/DeletePopup';
import LogoutPopup from './components/LogoutPopup';



const OverviewPage = () => {
  return (
    <div className="page space-y-10">
      <TopNav />
      <AccountDetails />
      <BalanceOverview />
      <StakingPopup1 />
    
      
     
     
      
      <div className="space-y-6">
        <div className="table-title">
          <div className="table-title-content">Asset Information</div>
          <div className="flex">
            <Image src="/tableView.svg" height={32} width={32} alt="table view"></Image>
            <Image src="/chartView.svg" height={32} width={32} alt="chart view"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
