"use client";
import React, { useState } from "react";
import { connectWalletV1 } from "../services/walletService";
import { networks } from "../utils/chainsInfo";
import Image from "next/image";

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
      <div className="connectWallet">
        <div className="connectWallet__header">
          <Image
            src="/vitwit-logo.png"
            width={184}
            height={51}
            alt="Vitwit-Logo"
          />
        </div>
        <div className="resolute__title">
          <h1>Res</h1>
          <Image src="/o.png" width={348} height={200} alt="Resolute" />
          <h1>lute</h1>
        </div>
        <div className="resolute__title__caption">
          <h2>Interchain Interface</h2>
        </div>
        <button>khgjh</button>
        <div>
          <button
            className="connectWallet__btn"
            onClick={() =>{
              connectWalletV1({
                mainnets: networks,
                testnets: [],
                setIsConnected,
              })
            }
             
            }
          >
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
};
