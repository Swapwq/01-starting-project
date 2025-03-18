const sql = require('better-sqlite3');
const db = sql('offers.db');

const dummyOffers = [
  {
    title: 'Fortnite - V-bucks',
    slug: 'fortnite',
    image: '/images/fortnite.jpg',
    price: 'peredumal, potom sdelay',
  },
  {
    title: 'Pubg Mobile - UC',
    slug: 'pubg-mobile',
    image: '/images/pubg.jpg',
    price: 'peredumal, potom sdelay',
  },
  {
    title: 'Brawl Stars - Gems',
    slug: 'brawl-stars',
    image: '/images/brawl.jpg',
    price: 'peredumal, potom sdelay',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS offers (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       price TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO offers VALUES (
         null,
         @slug,
         @title,
         @image,
         @price
      )
   `);

  for (const offer of dummyOffers) {
    stmt.run(offer);
  }
}

initData();