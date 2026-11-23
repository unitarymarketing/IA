'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import LuanChatWidget from './LuanChatWidget';

export default function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLinksPage = pathname === '/links' || pathname?.startsWith('/links/');

  if (isLinksPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <LuanChatWidget />
      <CookieBanner />
      <Footer />
    </>
  );
}
