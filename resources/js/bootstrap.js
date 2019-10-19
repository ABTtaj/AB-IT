import _ from 'lodash';
import axios from 'axios';

window._ = _;

window.langage = {
        name:'Français',
        value:'fr'
    };

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

