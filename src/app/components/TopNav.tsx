import Image from "next/image";
import React from "react";

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="topNav__title">
        <h2>Overview</h2>
      </div>
      <div className="topNav__options">
        <div className="topNav__options__networks">
          <div className="flex items-center gap-2">
            <Image
              src="./all-networks-icon.svg"
              width={24}
              height={24}
              alt="All Networks"
            />
            <div className="topNav__options__networks__currentNetwork">
              All Networks
            </div>
          </div>
          <div>
            <Image src='./down-arrow-icon.svg' width={24} height={24} alt="Select Network" />
          </div>
        </div>
        <div className="topNav__options__logout">
          <Image src="./logout-icon.svg" width={40} height={40} alt="Logout" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
