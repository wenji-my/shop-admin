<template>
  <div>
    <a-layout style="background: #fff;">
      <a-layout-header style="background: #fff; padding: 0">
        <a-button type="primary" @click="clickAdd">
          添加店铺
        </a-button>
      </a-layout-header>
      <a-layout-content>
        <a-table :columns="columns" :dataSource="list" bordered>
          <template v-for="col in ['image', 'name', 'category', 'link_man', 'phone', 'address', 'status']" :slot="col" slot-scope="text">
            <div :key="col">
              <template v-if="col === 'image'">
                <img style="height: 128px;" :src="$store.state.config.img_host+text" alt="">
              </template>
              <template v-else>{{text}}</template>
            </div>
          </template>
          <template slot="operation">
            <div class='editable-row-operations'>
              <span> <a href="">编辑</a> </span>
            </div>
          </template>
        </a-table>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
const columns = [{
  title: '店铺LOGO',
  dataIndex: 'image',
  // width: '20%',
  scopedSlots: { customRender: 'image' },
},{
  title: '店铺名称',
  dataIndex: 'name',
  // width: '20%',
  scopedSlots: { customRender: 'name' },
}, {
  title: '店铺分类',
  dataIndex: 'category',
  // width: '30%',
  scopedSlots: { customRender: 'category' },
}, {
  title: '联系人',
  dataIndex: 'link_man',
  // width: '30%',
  scopedSlots: { customRender: 'link_man' },
}, {
  title: '联系电话',
  dataIndex: 'phone',
  scopedSlots: { customRender: 'phone' },
}, {
  title: '店铺地址',
  dataIndex: 'address',
  // width: '30%',
  scopedSlots: { customRender: 'address' },
}, {
  title: '店铺状态',
  dataIndex: 'status',
  scopedSlots: { customRender: 'status' },
}, {
  title: '操作',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}]

export default {
  data () {
    return {
      columns,
      list: [],
    }
  },
  methods: {
    clickAdd() {
      this.$router.push({name: 'supplierAdd'})
    }
  }
}
</script>
