import Home from './components/home/Home.vue';
import Agence from './components/agence/Agence.vue';
import Services from './components/services/Services.vue';
import WebSiteCreation from './components/services/web-site-creation/WebSiteCreation.vue';
import SolutionECommerce from './components/services/solution-e-commerce/SolutionECommerce.vue';
import DigitalMarketing from './components/services/digital-marketing/DigitalMarketing.vue';
import AutomationMarketing from './components/services/automation-marketing/AutomationMarketing.vue';
import Seo from './components/services/seo/Seo.vue';
import FormationAdvices from './components/services/formation-advices/FormationAdvices.vue';
import Blog from './components/blog/Blog.vue';
import Contact from './components/contact/Contact.vue';

export const routes = [
    { path : '/', component : Home, name: 'home'},
    { path : '/agence', component : Agence, name: 'agence'},
    { path : '/services', component : Services, name: 'services'},
    { path : '/services/website-creation', component : WebSiteCreation, name: 'website-creation'},
    { path : '/services/solution-e-commerce', component : SolutionECommerce, name: 'solution-e-commerce'},
    { path : '/services/digital-marketing', component : DigitalMarketing, name: 'digital-marketing'},
    { path : '/services/automation-marketing', component : AutomationMarketing, name: 'automation-marketing'},
    { path : '/services/seo', component : Seo, name: 'seo'},
    { path : '/services/formation-advices', component : FormationAdvices, name: 'formations-advices'},
    { path : '/contact', component : Contact, name: 'contact'},
    { path : '/blog', component : Blog, name: 'blog'}
]