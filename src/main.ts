import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import bootstrap from './plugins/bootstrap'
import router from './router'
import '@mdi/font/css/materialdesignicons.min.css'

createApp(App)
    .use(bootstrap)
    .use(router)
    .mount('#app')
