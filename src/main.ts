import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ClickOutside from './directives/clickOutsideDirective'
import HorizontalScroll from './directives/horizontalScrollDirective'

const app = createApp(App)
app.directive('click-outside', ClickOutside);
app.directive('horizontal-scroll', HorizontalScroll);
app.use(createPinia())
app.use(router)

app.mount('#app')
