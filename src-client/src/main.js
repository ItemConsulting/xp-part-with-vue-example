import Vue from 'vue'
import App from './App.vue'
import webSocketMultiplexerMixin from './mixins/websocket-multiplexer'

Vue.mixin(webSocketMultiplexerMixin);

// "HelloVue" is the appName that needs to be used in backend JS
window.assurance = {};
window.assurance.webSocket = new WebSocket('wss://echo.websocket.org');
window.HelloVue = App;
window.Vue = Vue;