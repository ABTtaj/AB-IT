import WebSiteCreation from '../../components/services/web-site-creation/WebSiteCreation.vue';
import SolutionECommerce from '../../components/services/solution-e-commerce/SolutionECommerce.vue';
import DigitalMarketing from '../../components/services/digital-marketing/DigitalMarketing.vue';
import Seo from '../../components/services/seo/Seo.vue';
import FormationAdvices from '../../components/services/formation-advices/FormationAdvices.vue';
import Contact from '../../components/contact/Contact.vue';
import FirstWebsitePack from '../../components/services/pack/website/FirstWebsitePack.vue';
import SecondWebsitePack from '../../components/services/pack/website/SecondWebsitePack.vue';
import ThirdWebsitePack from '../../components/services/pack/website/ThirdWebsitePack.vue';
import FirstECommercePack from '../../components/services/pack/e-commerce/FirstECommercePack.vue';
import SecondECommercePack from '../../components/services/pack/e-commerce/SecondECommercePack.vue';
import ThirdECommercePack from '../../components/services/pack/e-commerce/ThirdECommercePack.vue';

export default [
    { path : '/تطوير-مواقع-الإنترنت/خدمات', component : WebSiteCreation, name: 'website-ma'},
    { path : '/تطوير-مواقع-الإنترنت/خدمات/website-pack-name-1', component : FirstWebsitePack, name: 'first-website-pack-ma'},
    { path : '/تطوير-مواقع-الإنترنت/خدمات/website-pack-name-2', component : SecondWebsitePack, name: 'second-website-pack-ma'},
    { path : '/تطوير-مواقع-الإنترنت/خدمات/website-pack-name-3', component : ThirdWebsitePack, name: 'third-website-pack-ma'},
    { path : '/حلول-التجارة-الإلكترونية/خدمات', component : SolutionECommerce, name: 'e-commerce-ma'},
    { path : '/حلول-التجارة-الإلكترونية/خدمات/e-commerce-pack-name-1', component : FirstECommercePack, name: 'first-e-commerce-pack-ma'},
    { path : '/حلول-التجارة-الإلكترونية/خدمات/e-commerce-pack-name-2', component : SecondECommercePack, name: 'second-e-commerce-pack-ma'},
    { path : '/حلول-التجارة-الإلكترونية/خدمات/e-commerce-pack-name-3', component : ThirdECommercePack, name: 'third-e-commerce-pack-ma'},
    { path : '/التسويق-الرقمي/خدمات', component : DigitalMarketing, name: 'marketing-digital-ma'},
    { path : '/تحسين محركات البحث/خدمات', component : Seo, name: 'seo-ma'},
    { path : '/دورات-تعليمية-و-نصائح/خدمات', component : FormationAdvices, name: 'trainings-ma'},
    { path : '/اتّصلوا-بنا', component : Contact, name: 'contact-ma'}
]