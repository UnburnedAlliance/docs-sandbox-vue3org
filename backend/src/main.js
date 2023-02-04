// Ignoring Vue from node_modules, using the "ES Module Build" from Vue docs
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

//      Commenting out the whole template app created from 'npm init vue@latest'
//import App from './App.vue'

//      Keeping the template CSS
import './assets/main.css'

  createApp({
    data() {
      return {
        message: 'Seamoss'
      }
    }
  }).mount('#app')