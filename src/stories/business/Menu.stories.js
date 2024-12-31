import Vue from 'vue';
import ElementUI from 'element-ui';
import './Menu.scss';

Vue.use(ElementUI);

export default {
  title: 'Business/Menu',
  component: 'el-menu',
  parameters: {
    docs: {
      description: {
        component: '业务场景下的自定义菜单组件',
      },
    },
  }
};

// 只保留两个业务相关的菜单组件
export const HorizontalGradientMenu = () => ({
  template: `
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="menu"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">工作台</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
      <el-submenu index="more" popper-class="menu-more-dropdown">
        <template slot="title">更多</template>
        <el-menu-item index="5">数据分析</el-menu-item>
        <el-menu-item index="6">用户管理</el-menu-item>
        <el-menu-item index="7">系统设置</el-menu-item>
        <el-menu-item index="8">权限管理</el-menu-item>
        <el-menu-item index="9">日志中心</el-menu-item>
      </el-submenu>
    </el-menu>
  `,
  data() {
    return {
      activeIndex: '1'
    };
  }
});

export const VerticalTaskMenu = () => ({
  template: `
    <el-menu
      :default-active="activeIndex"
      mode="vertical"
      :default-openeds="['1', '2', '3']"
      class="menu-vertical"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>收货任务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <span class="menu-item-content">收货任务列表</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <span class="menu-item-content">新建收货任务</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document-checked"></i>
          <span>质检任务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <span class="menu-item-content">质检任务列表</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <span class="menu-item-content">新建质检任务</span>
          </el-menu-item>
          <el-menu-item index="2-3">
            <span class="menu-item-content">质检报告</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span>分拣任务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <span class="menu-item-content">分拣任务列表</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <span class="menu-item-content">新建分拣任务</span>
          </el-menu-item>
          <el-menu-item index="3-3">
            <span class="menu-item-content">分拣统计</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  `,
  data() {
    return {
      activeIndex: '1-1'
    };
  }
}); 