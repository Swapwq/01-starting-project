
import OfferSelection from '@/components/game-selector'
import classes from './page.module.css'
import { getOffers } from '@/lib/offers';
import PriceSelector from '@/components/price-selector';


export default function BuyPage () {
    const classs = classes.main + ' ' + classes.container
    async function Offers() {
        const offers = await getOffers();
    
        return(<OfferSelection offers={offers}/>)
    }
    return (
        <>
        <main className={classs}>
          <form className={classes.form}>
          <h1 className={classes.h22}>Оформление заказа</h1>
            <div className={classes.row}>
              <p>
                <label htmlFor="login">Логин/почта</label>
                <input type="text" id="login" name="login" required />
              </p>
              <p>
                <label htmlFor="password">Пароль</label>
                <input type="text" id="password" name="password" required />
              </p>
            </div>
            <label htmlFor='game'>Игра</label>
            <Offers/>
            <p>
              <label htmlFor="soc">Соц. сеть для связи с вами</label>
              <input type="text" id="soc" name="soc" required />
            </p>
              <h2 className={classes.h2}>
                Временно оплата происходит в личных сообщениях с продавцом, в скором времени оплату можно будет производить на сайте, по-этому объязательно оставьте вашу соц. сеть TG/DS.
              </h2>
            <p className={classes.actions}>
            </p>
          </form>
        </main>
      </>
    )
}