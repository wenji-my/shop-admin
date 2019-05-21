<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed">

      <div class="logo">
        后台管理
      </div>

      <a-menu theme="dark" mode="inline" :defaultOpenKeys="['sub1']" :defaultSelectedKeys="['11']">
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="shopping" /><span>商品管理</span></span>
          <a-menu-item key="11">
            <router-link to="/goods/category">商品分类</router-link>
          </a-menu-item>
          <a-menu-item key="12">
            <router-link to="/goods/list">商品列表</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="shop" /><span>店铺管理</span></span>
          <a-menu-item key="21">
            <router-link to="/supplier/category">店铺分类</router-link>
          </a-menu-item>
          <a-menu-item key="22">
            <router-link to="/supplier/list">店铺列表</router-link>
          </a-menu-item>
        </a-sub-menu>
        <!-- <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '100vh' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false,
    }
  },
  created() {
    
  }
}
</script>

<style>
.logo {
  color: #fff;
  font-size: 18px;
  line-height: 90px;
  text-align: center;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>