"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React from "react";

export default function Sidebar() {
//   const pathname = usePathname();

//   const isActive = (prefix) => {
//     return pathname.startsWith(prefix);
//   };

  return (
    <aside className="w-full h-full bg-[#252c33]">
      <div className="p-7 space-y-10">
        <div className="flex justify-between">
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
          <ul className="space-y-5" id="navbar-nav">
            <li className="text-[#5b626e]">General</li>

            {/* Dashboard Link */}
            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="/parametre"
              >
                <span className="text-2xl transition-colors duration-300">
                  <Icon icon="solar:widget-5-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">
                  Dashboard
                </span>
              </a>
            </li>

            {/* Other Links */}
            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="#sidebarProducts"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarProducts"
              >
                <span className="text-2xl">
                  <Icon icon="solar:t-shirt-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">Products</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="#sidebarCategory"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarCategory"
              >
                <span className="text-2xl">
                  <Icon icon="solar:clipboard-list-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">Category</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="#sidebarInventory"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarInventory"
              >
                <span className="text-2xl">
                  <Icon icon="solar:box-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">
                  Inventory
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="#sidebarOrders"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarOrders"
              >
                <span className="text-2xl">
                  <Icon icon="solar:bag-smile-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">Orders</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="#sidebarPurchases"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarPurchases"
              >
                <span className="text-2xl">
                  <Icon icon="solar:card-send-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">
                  Purchases
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="#sidebarAttributes"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarAttributes"
              >
                <span className="text-2xl">
                  <Icon icon="solar:confetti-minimalistic-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">
                  Attributes
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="#sidebarInvoice"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarInvoice"
              >
                <span className="text-2xl">
                  <Icon icon="solar:bill-list-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">Invoices</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`flex items-center gap-4 text-[#5b626e] hover:text-white `}
                href="settings.html"
              >
                <span className="text-2xl">
                  <Icon icon="solar:settings-bold-duotone" />
                </span>
                <span className="transition-colors duration-300">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
