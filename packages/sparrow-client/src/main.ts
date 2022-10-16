/*
 * @Description:
 * @Autor: wxy
 * @Date: 2022-09-27 20:17:23
 * @LastEditors: wxy
 * @LastEditTime: 2022-10-16 14:55:22
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { receiveMessage } from './util/messageBridge';
import { library } from '@fortawesome/fontawesome-svg-core';
import './assets/icon/iconfont.css';
import './assets/icon/iconfont.js';
import './assets/index.css';
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import ArrayContainer from './components/setting/ArrayContainer.vue';
import sourcecode from './components/field-sourcecode.vue';
import ModuleLibrary from 'vfg-field-array';
import ModuleLibrarySourcecode from 'vfg-field-sourcecode';
import ModuleLibraryObject from 'vfg-field-object';

import {
  faCode,
  faEye,
  faFileExport,
  faTrashRestoreAlt,
  faFile,
  faTree,
  faFileArchive
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import codeMirrorInstall from './codemirror';
codeMirrorInstall(Vue);

library.add(faCode as any);
library.add(faEye as any);
library.add(faFileExport as any);
library.add(faTrashRestoreAlt as any);
library.add(faFile as any);
library.add(faTree as any);
library.add(faFileArchive as any);

Vue.use(VueFormGenerator);
Vue.use(ModuleLibrary);
Vue.use(ModuleLibrarySourcecode);
Vue.use(ModuleLibraryObject);

Vue.component('field-sourcecode', sourcecode);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('ArrayContainer', ArrayContainer);
Vue.config.productionTip = false;
receiveMessage();
Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
document.domain = 'localhost';
Vue.prototype.$EventBus = new Vue();
