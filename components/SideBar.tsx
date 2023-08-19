"use client"; //pass server component to client component

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";

interface SidebarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ];
  }, [pathName]);

  return (
    <div className="flex h-full">
      <div
        className="hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2"
      >
        <Box>sidebar nav</Box>
        <Box className="overflow-y-auto h-full">Song Library</Box>
      </div>
    </div>
  );
};

export default SideBar;
