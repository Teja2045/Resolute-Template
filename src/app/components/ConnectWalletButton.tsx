'use client'
import React, { useState } from "react";
import { connectWalletV1 } from "../services/walletService";
import { networks } from "../utils/chainsInfo";
import { Button } from "@mui/material";

export const ConnectWalletButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isConnected, setIsConnected] = useState(false);

  return isConnected ? (
    <>{children}</>
  ) : (
    <Button
      onClick={() =>
        connectWalletV1({ mainnets: networks, testnets: [], setIsConnected })
      }
    >
      connect wallet
    </Button>
  );
};
