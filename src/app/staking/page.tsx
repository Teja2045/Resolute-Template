import React from "react";
import StakingCards from "../components/StakingCards";
import StakedAmount from "../components/StakedAmount";

const page = () => {
  return (
    <div className="page space-y-10">
      <StakedAmount />
      <div className="topNav__title">
        <h2>My Delegation</h2>
      </div>
      <StakingCards />
    </div>
  );
};

export default page;
