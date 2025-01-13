import ElAnchor from './Anchor.vue'
import ElAnchorLink from './AnchorLink.vue'

export default {
  title: 'Navigation/Anchor',
  component: ElAnchor,
  tags: ['autodocs'],
}

export const Basic = () => ({
  components: { ElAnchor, ElAnchorLink },
  template: `
    <div style="display: flex;">
      <div style="width: 200px; position: fixed;">
        <el-anchor>
          <el-anchor-link href="#basic" title="基础用法" />
          <el-anchor-link href="#static" title="静态位置">
            <el-anchor-link href="#sub-anchor1" title="子锚点 1" />
            <el-anchor-link href="#sub-anchor2" title="子锚点 2" />
          </el-anchor-link>
          <el-anchor-link href="#custom" title="自定义配置" />
        </el-anchor>
      </div>
      
      <div style="margin-left: 220px;">
        <h2 id="basic">基础用法</h2>
        <p style="height: 300px;">这是基础锚点导航的演示内容</p>
        
        <h2 id="static">静态位置</h2>
        <p style="height: 200px;">这是静态位置的演示内容</p>
        <h3 id="sub-anchor1">子锚点 1</h3>
        <p style="height: 200px;">这是子锚点 1 的内容</p>
        <h3 id="sub-anchor2">子锚点 2</h3>
        <p style="height: 200px;">这是子锚点 2 的内容</p>
        
        <h2 id="custom">自定义配置</h2>
        <p style="height: 300px;">这是自定义配置的演示内容</p>
      </div>
    </div>
  `
})

export const CustomConfig = () => ({
  components: { ElAnchor, ElAnchorLink },
  template: `
    <div style="display: flex;">
      <div style="width: 200px;">
        <el-anchor :affix="false" :bounds="100" :offset-top="16">
          <el-anchor-link href="#section1" title="第一章节" />
          <el-anchor-link href="#section2" title="第二章节" />
          <el-anchor-link href="#section3" title="第三章节" />
        </el-anchor>
      </div>
      
      <div style="margin-left: 220px;">
        <h2 id="section1">第一章节</h2>
        <p style="height: 300px;">这是第一章节的内容</p>
        
        <h2 id="section2">第二章节</h2>
        <p style="height: 300px;">这是第二章节的内容</p>
        
        <h2 id="section3">第三章节</h2>
        <p style="height: 300px;">这是第三章节的内容</p>
      </div>
    </div>
  `
}) 