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
    },
    get_role_list: {
        "head": {
            "module": "admin",
            "function": "get_authority",
            "page_index": 1,
            "page_size": 20
        },
        "body": [{
            "action": 1,
            "is_detail": false
        }]
    },
    get_role: {
        "head": {
            "module": "admin",
            "function": "get_authority",
            "page_index": 1,
            "page_size": 20
        },
        "body": [{
            "name": "all",
            "action": 1,
            "is_detail": true
        }]
    }
}

export default new Vuex.Store({
    state
})
