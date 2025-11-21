"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/utils/classNames";
import { DesktopMenuBar } from "./DesktopMenuBar";
import { MobileMenuDialog } from "./MobileMenuModal";

const pagesWithColoredBg = ["/"];

export function MarketingHeader() {
  const pathname = usePathname();
  const isColored = pagesWithColoredBg.includes(pathname);

  return (
    <div className={cn(isColored && "bg-[#000619]")}>
      <header
        className={cn(
          "fixed top-0 flex w-full items-center bg-[#000619] md:py-6 py-4 xl:px-[2rem] [@media(min-width:1555px)]:px-[6.25rem] px-[1.5rem]  overflow-hidden",
          isColored &&
            "bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566]"
        )}
      >
        <div className="flex w-full justify-between relative z-10">
          <div className="flex items-center gap-4 lg:gap-10 xl:gap-[5.625rem]">
            <Link href="/">
              <span className="sr-only">Go home</span>
              <p className="text-[#FFD60A] font-bold text-[1.25rem] sm:text-[1.5rem] tracking-wide">
                Adeyemi.O
              </p>
            </Link>
          </div>

          <DesktopMenuBar isColored={isColored} />

          <div className="flex items-center gap-6 md:hidden">
            <MobileMenuDialog />
          </div>
        </div>
      </header>
    </div>
  );
}
