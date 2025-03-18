import { getOffers } from '@/lib/offers';
import classes from './offergrid.module.css'
import OfferItem from './offers';

export default function OfferGrid({ offers }) {
    return (
        <ul className={classes.meals}>
            {offers.map((offer) => ( <li key={offer.id}>
                <OfferItem {...offer} />
            </li>))}
        </ul>
    );
}