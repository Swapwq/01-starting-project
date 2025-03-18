'use server';

import Link from 'next/link';
import classes from './nav-bar.module.css';

export async function Navbar() {
  return (<>
    <nav className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <span>SWAPWQ'S</span>
        <span>SHOP</span>
      </div>

      <ul className={classes.navbar__menu}>
        <li><Link href="/" >Главная</Link></li>
        <li><Link href="/about-us">О нас</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
      </ul>
      <div className={classes.navbar__social}>
        <button variant="ghost" size="icon" >
          <span >YT</span>
        </button>
        <button variant="ghost" size="icon">
          <Link href='https://t.me/swapwq_w'>TG</Link>
        </button>
      </div>
      <div className={classes.navbar__actions}>
        <button type='button' >
          <Link href='/cart'>Корзина</Link>
        </button>
        <button type='button'>
          <Link href='/admin-panel'>Админ Панель</Link>
        </button>
      </div>
    </nav>
  </>
  );
}