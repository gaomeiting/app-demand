
import router from "../router/router"
import store from "../store"
import { BASE_URL } from 'api/config';
import {
    message
} from 'ant-design-vue';

export function handlerError(err) {
    
    if (err) {
        if(err.status == 401) {
            store.commit('SET_LOGOUT');
            let url = `${BASE_URL}/#/home?showBox=1`;
           /* window.alert(url) */
            window.location.href= url;
            /* router.replace({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath}
            }) */
            return;
        }
        if (err.message) {
            message.warning(err.message);
        } else {
            message.warning(err.error);
        }
    } else {
        message.warning('接口调试中');
    }
}
