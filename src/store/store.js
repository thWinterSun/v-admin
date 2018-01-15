import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    get_ips_rule: {
        'head': {
            'module': 'security',
            'function': 'get_ips_rule',
            'page_index': 1,
            'page_size': 20
        },
        'body': [{
            'name': '',
            'type': 0,
            'search': '',
            'is_detail': false
        }]
    },
    get_obj_service: {
        "head": {
            "module": "object",
            "function": "get_obj_service",
            "page_index": 1,
            "page_size": 20
        },
        "body": [{
            "name": "",
            "type": 0,
            "search": '',
            "is_detail": false
        }]
    }
}

export default new Vuex.Store({
    state
})
