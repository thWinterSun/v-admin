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
import jsonp from 'jsonp'
import bread from '../../components/breadcrumb'
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
            // https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&json=1
            //     data: JSON.stringify(Strdata),
            //     timeout: 50000,
            //     headers: {
            //         'X-CSRFToken': 'aEshU1tUVjnG4yRfObvP2h1CIE9Alg8K'
            //     }
            // }).then(function (res) {
            //     console.log(res)
            // }).catch(function (err) {
            //     console.log(err);
            // });
            jsonp('https://192.168.152.128/data/', {
                type: 'GET',
                param: JSON.stringify(Strdata),
                timeout: 0
            }, function (err, data) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(data);
                }
            });
        }
    }
}
</script>

<style lang="css">
</style>
