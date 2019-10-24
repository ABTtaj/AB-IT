import Agence from '../../components/agence/Agence.vue';
import Services from '../../components/services/Services.vue';
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
    { path : '/agency', component : Agence, name: 'agence-en'},
    { path : '/services', component : Services, name: 'services-en'},
    { path : '/services/website-developement', component : WebSiteCreation, name: 'website-en'},
    { path : '/services/website-developement/pack-name-1', component : FirstWebsitePack, name: 'first-website-pack-en'},
    { path : '/services/website-developement/pack-name-2', component : SecondWebsitePack, name: 'second-website-pack-en'},
    { path : '/services/website-developement/pack-name-3', component : ThirdWebsitePack, name: 'third-website-pack-en'},
    { path : '/services/e-commerce-solutions', component : SolutionECommerce, name: 'e-commerce-en'},
    { path : '/services/e-commerce-solutions/pack-name-1', component : FirstECommercePack, name: 'first-e-commerce-pack-en'},
    { path : '/services/e-commerce-solutions/pack-name-2', component : SecondECommercePack, name: 'second-e-commerce-pack-en'},
    { path : '/services/e-commerce-solutions/pack-name-3', component : ThirdECommercePack, name: 'third-e-commerce-pack-en'},
    { path : '/services/digital-marketing', component : DigitalMarketing, name: 'marketing-digital-en'},
    { path : '/services/search-engine-optimization', component : Seo, name: 'seo-en'},
    { path : '/services/trainings-&-advices', component : FormationAdvices, name: 'trainings-en'},
    { path : '/contact', component : Contact, name: 'contact-en'}
]