import WebSiteCreation from '../../components/services/web-site-creation/WebSiteCreation.vue';
import SolutionECommerce from '../../components/services/solution-e-commerce/SolutionECommerce.vue';
import DigitalMarketing from '../../components/services/digital-marketing/DigitalMarketing.vue';
import Seo from '../../components/services/seo/Seo.vue';
import Contact from '../../components/contact/Contact.vue';
import { store } from '../../store/store.js';

export default [
    { path : '/تطوير-مواقع-الإنترنت/خدمات', component : WebSiteCreation, name: 'website-ar',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','ar');
            next();
        }
    },
    { path : '/حلول-التجارة-الإلكترونية/خدمات', component : SolutionECommerce, name: 'e-commerce-ar',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','ar');
            next();
        }
    },
    { path : '/التسويق-الرقمي/خدمات', component : DigitalMarketing, name: 'marketing-digital-ar',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','ar');
            next();
        }
    },
    { path : '/تحسين محركات البحث/خدمات', component : Seo, name: 'seo-ar',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','ar');
            next();
        }
    },
    { path : '/اتّصلوا-بنا', component : Contact, name: 'contact-ar',beforeEnter: (to, from, next) => {
            store.dispatch('changeSelectedLangage','ar');
            next();
        }
    }
]