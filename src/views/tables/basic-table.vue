<template lang="html">
    <!--基本table以数据现在为主，包括table和分页  -->
    <div class="">
        <Row>
            <Col span="24">
                <bread></bread>
            </Col>
        </Row>
        <Tabs>
            <TabPane label="标签一" name="name1">
                <Row>
                    <Col span="24">
                        <Table :columns="columns1" :data="data1"></Table>
                    </Col>
                </Row>    
                <Row style="margin: 10px 0">
                    <Page :total="100" show-sizer style="float:right "></Page>
                </Row>
                <Row style="margin: 10px 0">
                    <Col span="2" offset="1">
                        <Button type="primary" @click="getdata">
                           获取
                       </Button>
                    </Col>
                </Row>  
            </TabPane>
            <TabPane label="标签二" name="name2">标签二的内容</TabPane>
            <TabPane label="标签三" name="name3">标签三的内容</TabPane>
        </Tabs>
        
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import bread from '../../components/breadcrumb'

axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) => {
    // _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

// 返回状态判断
axios.interceptors.response.use((res) => {
    if (res.data.success) {
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
});

export function fetch (url, data) {
    return new Promise((resolve, reject) => {
        // let congit = {
        //     headers: {'X-CSRFToken': 'BIXvXudH5PLLeXha2EGq5dxyAdG91x8i'}
        // }
        axios.post(url, data).then(res => {
            if (res.data.code === 0) {
                alert(res.data.content);
            } else {
                alert(res.data.content);
            }
        },res => {
            alert(res.data.content);
            console.log('调用失败');
        })
    })
}
export default {
    data () {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                },
                {
                    title: 'Date',
                    key: 'date'
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            getJson: {
                'head': {
                    'module': 'object',
                    'function': 'get_obj_service',
                    'page_index': 1,
                    'page_size': 20
                },
                'body': [{
                    'name': '',
                    'type': 0,
                    'search': '',
                    'is_detail': false
                }]
            }
        }
    },
    components: {
        bread
    },
    methods: {
        getdata () {
            this.getTableData(this.getJson);
        },
        getTableData (Strdata) {
            // axios({
            //     method: 'post',
            //     url: 'https://192.168.13.186/data/',
            //     data: JSON.stringify(Strdata),
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //         'X-CSRFToken': 'ZDILYouatYZRaHgSRKDcW4nimQSaexaF'
            //     }
            // }).then(function (res) {
            //     return res.data;
            // });
            fetch('https://192.168.13.186/data/',Strdata);
        }
    }
}
</script>

<style lang="css">
</style>
