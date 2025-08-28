'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

export default function ConditionalHeader() {
  const pathname = usePathname();

  const hideHeaderPaths = ['/Login', '/signup'];
  const shouldHideHeader = hideHeaderPaths.includes(pathname.toLowerCase());

  if (shouldHideHeader) {
    return null;
  }

  return <Header />  ;
}
