import Link from 'next/link';
import Image from 'next/image';

import classes from './offers.module.css';

export default function OfferItem({ title, slug, image}) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
        </div>
      </header>
      <div className={classes.content}>
        <div className={classes.actions}>
          <Link href={`/${slug}`}>Детали</Link>
        </div>
      </div>
    </article>
  );
}