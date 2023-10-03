import Image from "next/image";
import React from "react";

const menuItems = [
  {
    name: "Overview",
    icon: "/overview-icon.svg",
  },
  {
    name: "Transfers",
    icon: "/transfers-icon.svg",
  },
  {
    name: "Governance",
    icon: "/gov-icon.svg",
  },
  {
    name: "Staking",
    icon: "/staking-icon.svg",
  },
  {
    name: "Multisig",
    icon: "/multisig-icon.svg",
  },
  {
    name: "Authz",
    icon: "/authz-icon.svg",
  },
  {
    name: "Feegrant",
    icon: "/feegrant-icon.svg",
  },
  {
    name: "Groups",
    icon: "/groups-icon.svg",
  },
];

const PermanentSidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar__menu">
          <Image
            src="/vitwit-logo.png"
            width={184}
            height={52}
            alt="Vitwit Logo"
          />
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <MenuItem key={index} itemName={item.name} icon={item.icon} selected={item.name==="Overview"?true:false} />
            ))}
          </div>
        </div>
        <div className="sidebar__footer">
          
        </div>
      </div>
    </div>
  );
};

export default PermanentSidebar;

const MenuItem = ({
  itemName,
  icon,
  selected,
}: {
  itemName: string;
  icon: any;
  selected: boolean;
}) => {
  return (
    <div className={`sidebar__menu__item ${selected ? "sidebar__menu__item-selected" : ""}`}>
      <Image src={icon} width={24} height={24} alt={itemName} />
      <div className="ml-2">{itemName}</div>
    </div>
  );
};
