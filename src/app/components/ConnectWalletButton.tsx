"use client";
import React, { useState } from "react";
import { connectWalletV1 } from "../services/walletService";
import { networks } from "../utils/chainsInfo";
import { Button } from "@mui/material";
import ConnectWalletPage from "./ConnectWalletPage";

export const ConnectWalletButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isConnected, setIsConnected] = useState(false);

  return isConnected ? (
    <>{children}</>
  ) : (
    <div>
      <ConnectWalletPage />
    </div>
  );
};
