import Vue from 'vue';
import App from './components/App.vue';

if (process.env.NODE_ENV === 'development') {
    console.log('You are in development mode');
}

new Vue({
    render: h => h(App),
}).$mount('#app');