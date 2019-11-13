import WebSiteCreation from '../../components/services/web-site-creation/WebSiteCreation.vue';
import SolutionECommerce from '../../components/services/solution-e-commerce/SolutionECommerce.vue';
import DigitalMarketing from '../../components/services/digital-marketing/DigitalMarketing.vue';
import Seo from '../../components/services/seo/Seo.vue';
import Contact from '../../components/contact/Contact.vue';
import { store } from '../../store/store.js';

export default [
    { path : '/services/web-developement', component : WebSiteCreation, name: 'website-en',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','en');
            next();
        }
    },
    { path : '/services/e-commerce-websites', component : SolutionECommerce, name: 'e-commerce-en',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','en');
            next();
        }
    },
    { path : '/services/digital-marketing', component : DigitalMarketing, name: 'marketing-digital-en',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','en');
            next();
        }
    },
    { path : '/services/search-engine-optimization', component : Seo, name: 'seo-en',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','en');
            next();
        }
    },
    { path : '/contact', component : Contact, name: 'contact-en',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','en');
            next();
        }
    }
]