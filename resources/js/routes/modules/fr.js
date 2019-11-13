import WebSiteCreation from '../../components/services/web-site-creation/WebSiteCreation.vue';
import SolutionECommerce from '../../components/services/solution-e-commerce/SolutionECommerce.vue';
import DigitalMarketing from '../../components/services/digital-marketing/DigitalMarketing.vue';
import Seo from '../../components/services/seo/Seo.vue';
import Contact from '../../components/contact/Contact.vue';
import { store } from '../../store/store.js';

export default [
    { path : '/services/developpement-web', component : WebSiteCreation, name: 'website-fr',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','fr');
            next();
        }
    },
    { path : '/services/creation-de-sites-web-e-commerce', component : SolutionECommerce, name: 'e-commerce-fr',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','fr');
            next();
        }
    },
    { path : '/services/marketing-digital', component : DigitalMarketing, name: 'marketing-digital-fr',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','fr');
            next();
        }
    },
    { path : '/services/referencement-et-visibilite', component : Seo, name: 'seo-fr',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','fr');
            next();
        }
    },
    { path : '/contact', component : Contact, name: 'contact-fr',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','fr');
            next();
        }
    }
]