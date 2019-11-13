import Home from '../../components/home/Home.vue';
import NotFound from '../../components/not-found/NotFound.vue';

export default [
    { path : '*', component : NotFound, name : 'not-found'},
    { path : '/', component : Home, name: 'home'}
]