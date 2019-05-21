<template>
  <div>
    <a-layout style="background: #fff;">
        <div class="title">添加店铺</div>
      <!-- <a-layout-header style="background: #fff; padding: 0">
      </a-layout-header> -->
      <a-layout-content>
        <a-form 
          layout="horizontal" 
          :form="form"
          @submit="handleSubmit">

          <a-form-item
            label="店铺LOGO"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-upload
              listType="picture-card"
              class="avatar-uploader"
              :showUploadList="false"
              :action="$store.state.config.img_host+'admin/upload'"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="$store.state.config.img_host+imageUrl" alt="avatar" />
              <div v-else>
                  <a-icon :type="loading ? 'loading' : 'plus'" />
                  <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item
            label="店铺名称"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-input 
              v-decorator="[
                'name',
                {rules: [{ required: true, message: '店铺名称不能为空' }]}
              ]"
              placeholder="请输入店铺名称"></a-input>
          </a-form-item>
          <a-form-item
            label="店铺分类"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
              <a-select 
                style="width:50%;"
                placeholder="请选择店铺分类"
                v-decorator="[
                  'category',
                  {rules: [{ required: true, message: '请选择店铺分类!' }]}
                ]">
                <a-select-option v-for="(item, index) in categoryList" :key="index" :value="item.name">{{item.name}}</a-select-option>
              </a-select>
          </a-form-item>
          <a-form-item
            label="联系人"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-input 
              v-decorator="[
                'linkman',
                {rules: [{ required: true, message: '联系人不能为空' }]}
              ]"
              placeholder="请输入联系人"></a-input>
          </a-form-item>
          <a-form-item
            label="联系电话"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-input 
              v-decorator="[
                'phone',
                {rules: [{ required: true, message: '联系电话不能为空' }]}
              ]"
              placeholder="请输入联系电话"></a-input>
          </a-form-item>
          <a-form-item
            label="店铺地址"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-input 
              v-decorator="[
                'address',
                {rules: [{ required: true, message: '店铺地址不能为空' }]}
              ]"
              placeholder="请输入店铺地址"></a-input>
          </a-form-item>
          <a-form-item
            label="店铺状态"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol">
            <a-select 
              style="width:50%;"
              v-decorator="[
                'status',
                { initialValue: '1' }
              ]">
              <a-select-option value="1">启用</a-select-option>
              <a-select-option value="0">禁用</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
            :wrapper-col="buttonItemLayout.wrapperCol"
          >
            <a-button type="primary" htmlType="submit">
              添加
            </a-button>
          </a-form-item>
        </a-form>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import {getSupplierCategory,addSupplier} from '@/request'

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 }
      },
      buttonItemLayout: {
        wrapperCol: { span: 14, offset: 4 }
      },
      loading: false,
      imageUrl: '',
      supplierImg: '',
      categoryList: []
    }
  },
  created() {
    getSupplierCategory().then(res => {
      console.log(res)
      if (res.code === 1) {
        this.categoryList = []
        for (const item of res.data) {
          this.categoryList.push({
            key: item.name,
            name: item.name
          })
        }
      }
    })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log(values)
          const params = {
            logo: this.imageUrl,
            address: values.address,
            category: values.category,
            linkman: values.linkman,
            name: values.name,
            phone: values.phone,
            status: values.status,
          }
          addSupplier(params).then(res => {
            console.log(res)
            if (res.code === 1) {
              this.$message.success('添加成功')
              this.form.resetFields()
              this.imageUrl = ''
            }
            if (res.code === 0) {
              this.$message.error('店铺已存在')
            }
          })
        }
      });
    },
    handleChange (info) {
      console.log(info.file)
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        this.loading = false
        this.imageUrl = info.file.response.data
      }
    },
  }
}
</script>

<style scoped>
.title {
  border-bottom: 1px solid #dddddd;
  padding-bottom: 20px;
  margin-bottom: 30px;
  font-size: 20px;
}
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.avatar-uploader img {
  width: 128px;
  height: 128px;
}
</style>
