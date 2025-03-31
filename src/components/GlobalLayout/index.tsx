import style from '@/components/GlobalLayout/GlobalLayout.module.css';
import Header from '@/components/Header';
import { ReactNode } from 'react';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <Header />
      <main>{ children }</main>
    </div>
  )
}