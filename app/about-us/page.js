import classes from './page.module.css'

export default function AboutUs() {
    return (<>
    <main>
        <h1 className={classes.margin}>
            О нас:
        </h1>
        <h2 className={classes.marginsecond}>
            SWAPWQ'S SHOP - <br/> это магазин донат валюты в различных играх
        </h2>
        <div>
            <ul className={classes.list}>
                <li >
                    <h3 className={classes.text}>
                        У нас вы можете безопасно приобрести коды для<br/> самостоятельного пополениния без входи на ваш аккаунт, или <br/>услугу пополениния донат валюты со входом на ваш аккаунт.
                    </h3>
                </li>
                <li className={classes.text}>
                    <h3 >
                    Вы можете без всяких переживаний купить код или услугу <br/> пополениния, так как в нашем магазине присутствуют отзывы от реальных <br/>покупателей. Подробнее прочитать эти отзывы можно в нашей группе в Telegram.
                    </h3>
                </li>
                <li > 
                    <h3 className={classes.text}>
                        Наш магазин проходил множество
                        проверок на платформах YouTube/TikTok/Instagram <br/>// Нет, я просто текст взял с другого сайта XD
                    </h3>
                </li>
            </ul>
            
        </div>
    </main>
    </>);
}