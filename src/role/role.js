export const userPermissions = [
    {
        "children": [
            {
                "name": "运行状态",
                "mId": "11",
                "route": "/home/runstatus"
            },
            {
                "name": "入侵防护事件",
                "mId": "12",
                "route": "/home/worldMap"
            },
            {
                "name": "病毒防护事件",
                "mId": "13",
                "route": "/home/globalMap"
            }
        ],
        "name": "可视化中心",
        "mId": "1",
        "router": "/home",
        "icon": "home"
    },
    {
        "children": [
            {
                "children": [
                    {
                        "name": "管理员",
                        "mId": "211",
                        "comName": "userList",
                        "editBtn": true,
                        "selected": true,
                        "delBtn": true,
                        "addBtn": true
                    },
                    {
                        "name": "角色管理",
                        "mId": "212",
                        "comName": "roleList",
                        "editBtn": true,
                        "selected": false,
                        "delBtn": true,
                        "addBtn": true
                    },
                    {
                        "name": "管理设置",
                        "mId": "213",
                        "comName": "setList",
                        "editBtn": true,
                        "selected": false
                    }
                ],
                "name": "管理设置",
                "mId": "21",
                "route": "/table/role"
            }
        ],
        "name": "系统设置",
        "mId": "2",
        "router": "/table",
        "icon": "clipboard"
    },
    {
        "children": [
            {
                "children": [
                    {
                        "name": "入侵防护",
                        "mId": "tap1",
                        "editBtn": true,
                        "selected": true,
                        "delBtn": true,
                        "addBtn": true
                    }
                ],
                "name": "入侵防护",
                "mId": "31",
                "route": "/form/basicform"
            }
        ],
        "name": "安全策略",
        "mId": "3",
        "router": "/form",
        "icon": "clipboard"
    },
    {
        "children": [
            {
                "children": [
                    {
                        "name": "入侵防护",
                        "mId": "411",
                        "editBtn": true,
                        "selected": true,
                        "delBtn": true,
                        "addBtn": true
                    }
                ],
                "name": "入侵防护",
                "mId": "41",
                "route": "/form/basicform"
            }
        ],
        "name": "加密通信",
        "mId": "4",
        "router": "/form",
        "icon": "clipboard"
    },
    {
        "children": [
            {
                "children": [
                    {
                        "name": "入侵防护",
                        "mId": "511",
                        "editBtn": true,
                        "selected": true,
                        "delBtn": true,
                        "addBtn": true
                    }
                ],
                "name": "入侵防护",
                "mId": "51",
                "route": "/charts/echarts"
            }
        ],
        "name": "网络设置",
        "mId": "5",
        "router": "/charts",
        "icon": "clipboard"
    },
    {
        "children": [
            {
                "children": [
                    {
                        "name": "入侵防护",
                        "mId": "611",
                        "editBtn": true,
                        "selected": true,
                        "delBtn": true,
                        "addBtn": true
                    }
                ],
                "name": "入侵防护",
                "mId": "61",
                "route": "/charts/echarts"
            }
        ],
        "name": "对象设置",
        "mId": "6",
        "router": "/charts",
        "icon": "clipboard"
    },
    {
        "children": [
            {
                "children": [
                    {
                        "name": "入侵防护",
                        "mId": "tap1",
                        "editBtn": true,
                        "selected": true,
                        "delBtn": true,
                        "addBtn": true
                    }
                ],
                "name": "入侵防护",
                "mId": "7-1",
                "route": "/charts/echarts"
            }
        ],
        "name": "运维管理",
        "mId": "07",
        "router": "/charts",
        "icon": "clipboard"
    }
]
