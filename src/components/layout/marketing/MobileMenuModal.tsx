'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { cn } from '@/utils/classNames';
import { linkGroups } from './DesktopMenuBar';

import { DrawerClose } from '@/components/core/Drawer';
import DrawerMenu from '@/components/core/DrawerMenu';
import { Button } from '@/components/core/Button';

export function MobileMenuDialog() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DrawerMenu
      open={isOpen}
      onOpenChange={setIsOpen} // controlled
      trigger={
        <Button
          className={cn(
            "md:hidden text-[#F9F9F9] border border-[#FFD60A] px-[1.8125rem] py-[0.5rem] rounded-[10px]",
            "font-display"
          )}
          onClick={() => setIsOpen(true)}
        >
          Menu
        </Button>
      }
      contentClass="bg-[#000619]/95 border-main"
    >
      <div className="text-white p-5 pb-0 gap-5">
        <header className="flex items-center justify-between">
          <h6 className="font-semibold text-lg">Menu Content</h6>
          <DrawerClose
            className={cn(
              "bg-white/10 h-8 w-8 rounded-full text-white/50 rotate-12 text-lg hover:text-white",
              "font-display"
            )}
            onClick={() => setIsOpen(false)} // close button
          >
            X
          </DrawerClose>
        </header>

        <ul className={cn("font-display flex flex-col gap-8 font-normal mt-10")}>
          {linkGroups.map((link, index) => {
            const isActive = pathname === link.link;

            return (
              <li
                key={index}
                className={cn(
                  "border-b-[0.15px] border-b-white/30 p-2",
                  isActive && "text-[#2E6CE7] font-semibold"
                )}
              >
                <Link
                  href={link.link}
                  onClick={() => setIsOpen(false)} // <-- close modal on click
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </DrawerMenu>
  );
}
