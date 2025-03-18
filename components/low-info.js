import Link from 'next/link';
import classes from './low-info.module.css'

export default function LowerInfo() {
    const classs = classes.loweinfo + ' ' + classes.footer
    return (
        <div className={classs}>
            <h2>EPICGAMES.SHOP</h2>
        <div className={classes.text}>
      <p>© EpicGames.Shop, 2025 г.</p>
      <p>
        В нашем магазине аккаунтов вы можете приобрести аккаунт без рисков, у нас есть гарантии. 
        Оптимальные цены, много довольных клиентов.
      </p>
      <p>
        <Link href="#">Пользовательское соглашение</Link>
      </p>
      <p>
        <Link href="https://accsmoll.com">accsmoll.com</Link> - Аренда интернет магазина
      </p>
      </div>
      <div className={classes.footernav}>
        <Link href="#">Главная</Link>
        <Link href="#">О нас</Link>
        <Link href="#">Замена</Link>
        <Link href="#">FAQ</Link>
      </div>
        </div>
    );
}