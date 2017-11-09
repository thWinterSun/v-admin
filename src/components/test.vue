<template>
  <div class="">
    <Row>
      <Table width="100%" border ref="selection" :columns="columnsList" :data="tableData"></Table>
    </Row>
    <Row>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </Row>
  </div>
</template>
<script>
    export default {
      name: 'table',
      props: {
        'columnsList': Array,
        'tableData': Array,
        'functionType': String
      },
      methods: {
        deleteSelect () {
          console.dir(this.$refs.selection.getSelection())
        },
        mockTableData1 () {
          let data = []
          for (let i = 0; i < 10; i++) {
            data.push({
              name: 'name' + Math.floor(Math.random() * 100 + 1),
              age: Math.floor(Math.random() * 3 + 1),
              address: '火星'
            })
          }
          return data
        },
        changePage (evt) {
          this.tableData1 = this.mockTableData1()
          alert(evt)
          alert(this.functionType)
        }
      }
    }
</script>
