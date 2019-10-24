import general from './modules/general.js';
import fr from './modules/fr.js';
import en from './modules/en.js';
import ma from './modules/ma.js';

export const routes = general.concat(fr).concat(en).concat(ma);