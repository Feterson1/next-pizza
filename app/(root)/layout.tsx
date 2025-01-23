import type { Metadata } from 'next';
import { Header } from '@/shared/components/shared';
import { Suspense } from 'react';
export const metadata: Metadata = {
  title: 'Next Pizza | Главная',
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Загрузка...</div>}>
        <Header />
      </Suspense>
      {children}
      {modal}
    </main>
  );
}
