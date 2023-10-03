"use client";
import { Button } from "@mui/material";
import { MyButton } from "./components/MyButton";
import { useTestContext } from "./provider/TestProvider";
import TestClientComponent from "./components/TestClientComponent";
import TestServerComponent from "./components/TestServerComponent";
import { ConnectWalletButton } from "./components/ConnectWalletButton";

export default function Home() {
  const { userId, setUserId, data, setData } = useTestContext();
  console.log("user: ", userId, ", data: ", data);
  return (
    <>
      Test!
      <TestClientComponent />
      <TestServerComponent />
    
    </>
  );
}
