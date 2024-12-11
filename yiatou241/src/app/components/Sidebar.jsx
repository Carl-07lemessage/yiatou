"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React from "react";
import { AdminLink } from "./sidebar/AdminLink";
const Link = [
  {
    id: 1,
    href: "/",
    icon: <Icon icon="solar:widget-5-bold-duotone" />,
    titre: "Dashboard",
  },
  {
    id: 2,
    href: "/produits",
    icon: <Icon icon="solar:t-shirt-bold-duotone" />,
    titre: " Products",
  },
  {
    id: 3,
    href: "# ",
    icon: <Icon icon="solar:clipboard-list-bold-duotone" />,
    titre: " Category",
  },
  {
    id: 4,
    href: "# ",
    icon: <Icon icon="solar:box-bold-duotone" />,
    titre: "Inventory",
  },
  {
    id: 5,
    href: "# ",
    icon: <Icon icon="solar:bag-smile-bold-duotone" />,
    titre: "Orders",
  },
  {
    id: 6,
    href: "# ",
    icon: <Icon icon="solar:card-send-bold-duotone" />,
    titre: "Purchases",
  },
  {
    id: 7,
    href: "# ",
    icon: <Icon icon="solar:confetti-minimalistic-bold-duotone" />,
    titre: " Attributes",
  },
  {
    id: 8,
    href: "# ",
    icon: <Icon icon="solar:bill-list-bold-duotone" />,
    titre: "  Invoices",
  },
  {
    id: 9,
    href: "/parametre",
    icon: <Icon icon="solar:settings-bold-duotone" />,
    titre: "Settings",
  },
];

export { Link };
export default function Sidebar() {


  return (
    <aside className="w-full min-h-screen bg-[#252c33]">
      <div className=" space-y-10">
        <div className="flex p-7 justify-between">
          <a href="index.html" className=" ">
            <Image
              className=""
              src="/logo-light.png"
              alt="Next.js logo"
              width={130}
              height={38}
              priority
            />
          </a>
          <button
            type="button"
            className="button-sm-hover"
            aria-label="Show Full Sidebar"
          >
            <Icon
              icon="solar:double-alt-arrow-right-bold-duotone"
              className="text-3xl"
            />
          </button>
        </div>

        <div className="scrollbar" data-simplebar>
          <ul className="space-y-1" id="navbar-nav">
            <li className="px-7 mb-5 text-[#5b626e]">General</li>

            {/* Dashboard Link */}
            {Link.map((tab) => (
              <AdminLink
                key={tab.id}
                href={tab.href}
                icon={tab.icon}
                titre={tab.titre}
              ></AdminLink>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
