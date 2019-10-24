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
    { path : '/agence', component : Agence, name: 'agence-fr'},
    { path : '/services', component : Services, name: 'services-fr'},
    { path : '/services/création-de-site-web', component : WebSiteCreation, name: 'website-fr'},
    { path : '/services/création-de-site-web/pack-name-1', component : FirstWebsitePack, name: 'first-website-pack-fr'},
    { path : '/services/création-de-site-web/pack-name-2', component : SecondWebsitePack, name: 'second-website-pack-fr'},
    { path : '/services/création-de-site-web/pack-name-3', component : ThirdWebsitePack, name: 'third-website-pack-fr'},
    { path : '/services/solutions-e-commerce', component : SolutionECommerce, name: 'e-commerce-fr'},
    { path : '/services/solutions-e-commerce/pack-name-1', component : FirstECommercePack, name: 'first-e-commerce-pack-fr'},
    { path : '/services/solutions-e-commerce/pack-name-2', component : SecondECommercePack, name: 'second-e-commerce-pack-fr'},
    { path : '/services/solutions-e-commerce/pack-name-3', component : ThirdECommercePack, name: 'third-e-commerce-pack-fr'},
    { path : '/services/marketing-digital', component : DigitalMarketing, name: 'marketing-digital-fr'},
    { path : '/services/référencement-naturel', component : Seo, name: 'seo-fr'},
    { path : '/services/formations-&-conseils', component : FormationAdvices, name: 'trainings-fr'},
    { path : '/contact', component : Contact, name: 'contact-fr'}
]