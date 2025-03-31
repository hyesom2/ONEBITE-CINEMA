import style from '@/components/Header/Header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <h1 className={style.title}>
      <Link href="/">onebite cinema</Link>
    </h1>
  );
}

export default Header;