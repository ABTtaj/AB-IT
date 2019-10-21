import _ from 'lodash';
import axios from 'axios';
import inViewport from 'in-viewport';
import scrollToView from 'scroll-into-view';

window.scrollToView = scrollToView;

window.inViewport = inViewport;

window._ = _;

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

