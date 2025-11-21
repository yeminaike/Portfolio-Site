'use client';
import * as React from 'react';
import { cn } from '@/utils/classNames';

interface DesktopMenuLinkProps {
  link: string;
  text: string;
  disabled: boolean;
  isExternal: boolean;
}

export function DesktopMenuLink({
  text,
  link,
  disabled,
  isExternal,
}: DesktopMenuLinkProps) {
  const baseClass =
    'inline-block text-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 md:px-[1rem] lg:px-[2.125rem] py-[0.625rem] xl:text-base';

  if (isExternal) {
    return (
      <a
        className={cn(baseClass)}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  if (disabled) {
    return (
      <button
        disabled
        className="inline-block cursor-not-allowed bg-[#fafafa] text-sm opacity-50 xl:text-base"
      >
        {text}
      </button>
    );
  }

  // INTERNAL SCROLL LINKS (anchor links)
  return (
    <a href={link} className={cn(baseClass)}>
      {text}
    </a>
  );
}

// ---------------------
// Updated Links (no routing, only scrolling)
// ---------------------
export const linkGroups = [
  {
    link: '#hero',
    text: 'Home',
    disabled: false,
    isExternal: false,
  },
  {
    link: '#about',
    text: 'About',
    disabled: false,
    isExternal: false,
  },

  {
    link: '#contact',
    text: 'Contact',
    disabled: false,
    isExternal: false,
  },
  {
    link: '#skills',
    text: 'Skills',
    disabled: false,
    isExternal: false,
  },
  {
    link: '#project',
    text: 'Project',
    disabled: false,
    isExternal: false,
  },
  {
    link: '#experience',
    text: 'Experience',
    disabled: false,
    isExternal: false,
  },
];

interface DesktopMenuBarProps {
  isColored: boolean;
}

export function DesktopMenuBar({ isColored }: DesktopMenuBarProps) {
  return (
    <nav className="hidden md:block">
      <ul
        className={cn(
          'flex items-center rounded-[0.5rem] bg-[#fff]/5 transition-all duration-300 ease-in-out text-[#ffff]',
          isColored && 'bg-[#FFF]/5'
        )}
      >
        {linkGroups.map(({ link, text, disabled, isExternal }) => (
          <li key={link}>
            <DesktopMenuLink
              disabled={disabled}
              isExternal={isExternal}
              link={link}
              text={text}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
