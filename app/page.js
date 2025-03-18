import OfferGrid from '@/components/offergid';
import { getOffers } from '@/lib/offers';

export default function Navbarrr() {

  async function Offers() {
    const offers = await getOffers();

    return(<OfferGrid offers={offers}/>)
  }

  return (<>
      <main>
        <Offers />
      </main>
      </>);
}