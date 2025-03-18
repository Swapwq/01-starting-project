import classes from './game-selector.module.css';

export default function OfferSelection({ offers }) {

    return (
        <div className={classes.customSelect}>
        <select>
            <option value='none'>   ---- Выберите ----</option>
            {offers.map((offer) => (<option key={offer.id}value={offer.title}>{offer.title}</option>))}
        </select>
        </div>
    );
}