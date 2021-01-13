import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { NavBar } from 'vant';
Vue.use(NavBar);
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
import { Icon } from 'vant';
Vue.use(Icon);
import { Image as VanImage } from 'vant';
Vue.use(VanImage);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
import { Loading } from 'vant';
Vue.use(Loading);
import { Tag } from 'vant';
Vue.use(Tag);
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
import { ShareSheet } from 'vant';
Vue.use(ShareSheet);
import { Field } from 'vant';
Vue.use(Field);
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
import { Button } from 'vant';
Vue.use(Button);
import { Form } from 'vant';
Vue.use(Form);
import { Uploader } from 'vant';
Vue.use(Uploader);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
import { Search } from 'vant';
Vue.use(Search);
import { Divider } from 'vant';
Vue.use(Divider);
import { ContactEdit } from 'vant';
Vue.use(ContactEdit);
import { ContactList } from 'vant';
Vue.use(ContactList);
import { Step, Steps } from 'vant';
Vue.use(Step);
Vue.use(Steps);
import { ContactCard } from 'vant';
Vue.use(ContactCard);
import { Card } from 'vant';
Vue.use(Card);
import { Picker } from 'vant';
Vue.use(Picker);
import { Popup } from 'vant';
Vue.use(Popup);
import { NumberKeyboard } from 'vant';
Vue.use(NumberKeyboard);
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
import { Toast } from 'vant';
Vue.use(Toast);
import { Notify } from 'vant';
Vue.use(Notify);
import { List } from 'vant';
Vue.use(List);
import { ImagePreview } from 'vant';
Vue.use(ImagePreview);
import { Skeleton } from 'vant';
Vue.use(Skeleton);

const moment = require('moment')
// 中文
require('moment/locale/zh-cn')
Vue.use(require('vue-moment'),{
  moment
})

import converter from '@/converter'
Vue.prototype.$dateUtils = converter
import axios from '@/axios'
Vue.prototype.$axios = axios
require('@/mock')

import date from '@/components/date'
Vue.component('dateConverter',date)

import router from '@/router/index'
import less from 'less'
Vue.use(less)

import store from '@/store'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
