import Vue from 'vue';
import ElementUI from 'element-ui';
import './TreeWithLine.scss';

Vue.use(ElementUI);

export default {
  title: 'Business/TreeWithLine',
  parameters: {
    docs: {
      description: {
        component: '带有层级连接线的树形组件',
      },
    },
  }
};

export const Default = () => ({
  template: `
    <div class="custom-tree-container">
      <el-tree
        :data="data"
        node-key="id"
        class="tree-with-line"
        :expand-on-click-node="false"
        default-expand-all
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
        </span>
      </el-tree>
    </div>
  `,
  data() {
    return {
      data: [{
        id: '00',
        label: '00 | 总部',
        children: [{
          id: '01',
          label: '01 | 财务部'
        }, {
          id: '02',
          label: '02 | 上海事业部',
          children: [{
            id: '8',
            label: '8 | 采购部'
          }, {
            id: '9',
            label: '9 | 嘉兴好一家店（仓）',
            children: [{
              id: '90',
              label: '90 | 库房'
            }, {
              id: '91',
              label: '91 | 生鲜部'
            }, {
              id: '92',
              label: '92 | 零食部'
            }]
          }, {
            id: '99',
            label: '99 | 管理中心',
            children: [{
              id: '990',
              label: '990 | 行政部'
            }, {
              id: '991',
              label: '991 | 人事部'
            }]
          }]
        }, {
          id: '03',
          label: '03 | 北京事业部',
          children: [{
            id: '30',
            label: '30 | 运营部'
          }, {
            id: '31',
            label: '31 | 朝阳门店'
          }, {
            id: '32',
            label: '32 | 海淀门店'
          }]
        }, {
          id: '04',
          label: '04 | 客服部'
        }]
      }]
    };
  }
}); 