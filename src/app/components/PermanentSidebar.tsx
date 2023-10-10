"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  {
    name: "Overview",
    icon: "/overview-icon.svg",
    link : '/'
  },
  {
    name: "Transfers",
    icon: "/transfers-icon.svg",
    link : '/a'
  },
  {
    name: "Governance",
    icon: "/gov-icon.svg",
    link : '/b'
  },
  {
    name: "Staking",
    icon: "/staking-icon.svg",
    link : '/staking'
  },
  {
    name: "Multisig",
    icon: "/multisig-icon.svg",
    link : '/d'
  },
  {
    name: "Authz",
    icon: "/authz-icon.svg",
    link : '/e'
  },
  {
    name: "Feegrant",
    icon: "/feegrant-icon.svg",
    link : '/f'
  },
  {
    name: "Groups",
    icon: "/groups-icon.svg",
    link : '/g'
  },
];

const PermanentSidebar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex">
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
              <MenuItem
                pathname={pathname}
                key={index}
                itemName={item.name}
                icon={item.icon}
                selected={false}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <div className="sidebar__footer"></div>
      </div>
      {}
      <div className="flex flex-col items-center overflow-y-scroll no-scrollbar h-screen w-screen text-white">
        {children}
      </div>
    </div>
  );
};

export default PermanentSidebar;

const MenuItem = ({
  pathname,
  itemName,
  icon,
  selected,
  link
}: {
  pathname: string;
  itemName: string;
  icon: any;
  selected: boolean;
  link: string;
}) => {
  return (
    <Link
      className={`sidebar__menu__item ${
        pathname===link ? "sidebar__menu__item-selected" : ""
      }`}
      href={link}
    >
      <Image src={icon} width={24} height={24} alt={itemName} />
      <div className="ml-2">{itemName}</div>
    </Link>
  );
};
