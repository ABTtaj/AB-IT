import general from './modules/general.js';
import fr from './modules/fr.js';
import en from './modules/en.js';
import ar from './modules/ar.js';

export const routes = general.concat(fr).concat(en).concat(ar);