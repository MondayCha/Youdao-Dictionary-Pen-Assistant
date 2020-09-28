import Vue from 'vue'
import App from './App.vue'
import './dependences/moment.js'
import Button from 'ant-design-vue/lib/button';
import Textarea from 'ant-design-vue/lib/input/TextArea';
import dp from 'ant-design-vue/lib/date-picker';
import Menu from 'ant-design-vue/lib/menu';
import Space from 'ant-design-vue/lib/space';
import Icon from 'ant-design-vue/lib/icon';
import 'ant-design-vue/dist/antd.css';
//复制到粘贴板插件
import VueClipboard from 'vue-clipboard2'
import { message} from 'ant-design-vue'

Vue.prototype.$message = message;

Vue.use(VueClipboard)
Vue.component(Button.name, Button);
Vue.component(Textarea.name, Textarea);
Vue.component(dp.name, dp);
Vue.component(Menu.name, Menu);
Vue.component(Space.name, Space);
Vue.component(Icon.name, Icon);

Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true

message.config({
    duration: 1,// 持续时间
    top:`100px`, // 到页面顶部距离
    maxCount: 3 // 最大显示数, 超过限制时，最早的消息会被自动关闭
});


new Vue({
	render: h => h(App),
}).$mount('#app')
