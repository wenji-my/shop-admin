<template>
  <div>
    <a-layout style="background: #fff;">
      <a-layout-header style="background: #fff; padding: 0">
        <a-button type="primary" @click="visible = true">
          添加分类
        </a-button>
      </a-layout-header>
      <a-layout-content>
        <a-table :columns="columns" :dataSource="list" bordered>
          <template v-for="col in ['name']" :slot="col" slot-scope="text">
            <div :key="col">
              <template>{{text}}</template>
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
    <a-modal
      title="添加分类"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      okText="确认"
      cancelText="取消"
    >
      <a-form>
        <a-form-item
          label="分类名称">
          <a-input placeholder="请输入分类名称" v-model="reqParams.name"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import {createSupplierCategory,getSupplierCategory} from '@/request'
const columns = [{
  title: '分类名称',
  dataIndex: 'name',
  width: '50%',
  scopedSlots: { customRender: 'name' },
}, {
  title: '操作',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}]

export default {
  data() {
    return {
      columns,
      visible: false,
      confirmLoading: false,
      list: [],
      reqParams: {
        name: '',
      }
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      getSupplierCategory().then(res => {
        console.log(res)
        if (res.code === 1) {
          this.list = []
          for (const item of res.data) {
            this.list.push({
              key: item.name,
              name: item.name
            })
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleOk(e) {
      if (!this.reqParams.name) return
      for (const item of this.list) {
        if (this.reqParams.name === item.name) {
          this.$message.success('该分类已存在')
          return
        }
      }
      createSupplierCategory({name: this.reqParams.name}).then(res => {
        console.log(res)
        if (res.code === 1) {
          this.$message.success('添加成功')
          // this.visible = false;
          this.confirmLoading = false;
          this.reqParams = {
            name: '',
          }
          this.initData()
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleCancel(e) {
      this.visible = false
    },
  }
}
</script>
