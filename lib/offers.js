
import sql from 'better-sqlite3';

const db = sql('offers.db');

export async function getOffers () {
    return db.prepare('SELECT * FROM offers').all();
}

export function getOffer(slug) {
    return db.prepare('SELECT * FROM offers WHERE slug = ?').get(slug);
}