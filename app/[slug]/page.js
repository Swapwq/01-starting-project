import { getOffer, getOffers } from '@/lib/offers';
import classes from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Details ({params}) {
    const offer = getOffer(params.slug);

    if(!offer) {
        return
    }

    return (
        <>
            <header>
                <main>
                   <div className={classes.productInfo}>
                    <h2>
                        {offer.title}
                    </h2>
                    </div> 
                    <div>
                        <Image src={offer.image} width={800} height={800} className={classes.productImage}/>
                    </div>
                    <div>
                        <ul className={classes.price}>
                            <li>
                                1000 V-bucks - 6$
                                </li>
                                <li>
                                2800 V-bucks - 13$
                                </li>
                                <li>
                                5000 V-bucks - 21$
                                </li>
                                <li>
                                13500 V-bucks - 52$
                                </li>
                        </ul>
                    </div>
                    <div className={classes.description}>
                        <h3>Описание товара:</h3>
                        <h4 className={classes.h4margin}>Покупая данную услугу, после полной оплаты <br /> 
                        на ваш аккаунт зайдёт продавец и пополнит <br /> указанную в заказе сумму донат валюты. <br /></h4>
                        <h4 className={classes.notice}>После того, как продавец пополнил ваш аккаунт возрват срдеств не возможен. <br />
                        Если вы купили код, за код возрат средств также не возможен.<br />
                        Перед оплатой подумайте, стоит ли вам покупать данный товар, <br />
                        чтобы потом не у вас не у нас не было проблем.</h4>
                    </div>
                </main>
                <div className={classes.list}>
                    <ul>
                        <li className={classes.buyButton}>
                    <Link href={`/${params.slug}/buy`}>Купить</Link>
                    </li>
                    <li className={classes.cartButton}>
                    <Link href={`/${params.slug}/cart`}>В корзину</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );

}