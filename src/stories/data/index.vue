<template>
  <!-- @select="handleSelect" -->
  <el-table
    ref="table"
    v-loading="loading"
    :border="border"
    :cell-style="cellStyle"
    :class="{'custom-summary-table':showSummary,'custom-filter':isClass,'drawer':drawer}"
    :data="dataList"
    :default-expand-all="defaultExpandAll"
    :default-sort="defaultSort"
    :empty-text="emptyText"
    :expand-row-keys="expands"
    :height="height"
    :highlight-current-row="highlightCurrentRow"
    :max-height="maxHeight"
    :render-header="renderHeader"
    :row-class-name="rowClassName"
    :row-key="treeFlag ? rowKey : keyFilter"
    :show-summary="showSummary"
    :sortable="sortable"
    :span-method="spanMethod"
    :summary-method="getSummaries"
    :tree-props="treeProps"
    @cell-dblclick="cellDblclick"
    @cell-click="cellClick"
    @row-click="rowClick"
    @row-dblclick="rowDblClick"
    @selection-change="selectionChange"
    @sort-change="sortChange"
    @expand-change="exChange"
    @select="handleSelect"
    @select-all="selectAll"
  >
    <el-table-column
      v-if="checked"
      :fixed="columnFixed"
      :selectable="selectable"
      align="center"
      type="selection"
      :reserve-selection="reserveSelection"
      width="50"
    />
    <el-table-column v-if="isExpand" fixed="left" type="expand">
      <template slot-scope="scope">
        <slot :row="scope.row" name="expand" />
      </template>
    </el-table-column>
    <el-table-column
      v-if="seq"
      :fixed="columnFixed"
      align="center"
      label="序号"
      show-overflow-tooltip
      type="index"
      width="50"
    >
      <el-table-column
        v-if="isClass"
        align="center"
        width="50"
      >
        <template slot-scope="scope">
          <span>{{ ((pageQuery.pageNum - 1) * pageQuery.pageSize) + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
    </el-table-column>
    <template v-for="(item,index) in columns">
      <template v-if="item.show !== false">

        <template v-if="item.children">
          <el-table-column
            :key="'table-' + index"
            :align="item.align || align"
            :class-name="item.slot ? 'table-padding ' + (item.className || '') : item.className"
            :header-align="item.headerAlign || item.align || align"
            :label="item.label"
            :min-width="!item.minWidth && !item.width ? '150px' : item.minWidth ? item.minWidth + 'px' : ''"
            :prop="item.key"
            :show-overflow-tooltip="!item.hideTooltip"
            :sort-orders="item.sortOrders"
            :sortable="(item.sortable || sortable) && !item.isNoSort ? (item.sortable || sortable) : false"
            :width="item.minWidth ? '' : item.width ? item.width + 'px' : ''"
          >
            <template slot="header" slot-scope="scope">
              <slot
                v-if="item.header"
                :column="scope.column"
                :index="scope.$index"
                :name="item.header"
                :row="scope.row"
              />
              <template v-else>{{ item.label }}</template>
            </template>
            <template v-if="item.slot" slot-scope="scope">
              <slot :column="scope.column" :index="scope.$index" :name="item.slot" :row="scope.row" />
            </template>
            <template v-for="(childItem,childIndex) in item.children">

              <template v-if="childItem.header">
                <el-table-column
                  :key="'childtable-' + childIndex"
                  :align="childItem.align || align"
                  :class-name="childItem.slot ? 'table-padding ' + (childItem.className || '') : childItem.className"
                  :fixed="childItem.fixed || false"
                  :header-align="childItem.headerAlign || childItem.align || align"
                  :min-width="!childItem.minWidth && !childItem.width ? '100px' : childItem.minWidth ? childItem.minWidth + 'px' : ''"
                  :prop="childItem.key"
                  :show-overflow-tooltip="!item.hideTooltip"
                  :sort-orders="item.sortOrders"
                  :sortable="(childItem.sortable || sortable) && childItem.key !== 'setting' && !childItem.isNoSort"
                  :width="childItem.minWidth ? '' : childItem.width ? childItem.width + 'px' : ''"
                >
                  <template slot="header" slot-scope="scope">
                    <slot :column="scope.column" :index="scope.$index" :name="childItem.header" :row="scope.row" />
                  </template>
                  <template v-if="childItem.slot" slot-scope="scope">
                    <slot :column="scope.column" :index="scope.$index" :name="childItem.slot" :row="scope.row" />
                  </template>
                </el-table-column>
              </template>
              <template v-else-if="childItem.slot">
                <el-table-column
                  :key="'childtable-' + childIndex"
                  :align="childItem.align || align"
                  :class-name="childItem.slot ? 'table-padding ' + (childItem.className || '') : childItem.className"
                  :fixed="childItem.fixed || false"
                  :header-align="childItem.headerAlign || childItem.align || align"
                  :label="childItem.label"
                  :min-width="!childItem.minWidth && !childItem.width ? '100px' : childItem.minWidth ? childItem.minWidth + 'px' : ''"
                  :prop="childItem.key"
                  :show-overflow-tooltip="!item.hideTooltip"
                  :sort-orders="item.sortOrders"
                  :sortable="(childItem.sortable || sortable) && childItem.key !== 'setting' && !childItem.isNoSort"
                  :width="childItem.minWidth ? '' : childItem.width ? childItem.width + 'px' : ''"
                >
                  <template slot-scope="scope">
                    <slot :column="scope.column" :index="scope.$index" :name="childItem.slot" :row="scope.row" />
                  </template>
                </el-table-column>
              </template>
              <template v-else>

                <template v-if="childItem.children">
                  <el-table-column
                    :key="'table-children-a-' + getUid()"
                    :align="childItem.align || align"
                    :class-name="childItem.slot ? 'table-padding ' + (childItem.className || '') : childItem.className"
                    :header-align="childItem.headerAlign || childItem.align || align"
                    :label="childItem.label"
                    :min-width="!childItem.minWidth && !childItem.width ? '100px' : childItem.minWidth ? childItem.minWidth + 'px' : ''"
                    :prop="childItem.key"
                    :show-overflow-tooltip="!childItem.hideTooltip"
                    :sort-orders="item.sortOrders"
                    :sortable="(childItem.sortable || sortable) && !childItem.isNoSort ? (childItem.sortable || sortable) : false"
                    :width="childItem.minWidth ? '' : childItem.width ? childItem.width + 'px' : ''"
                  >
                    <template slot="header" slot-scope="scope">
                      <slot
                        v-if="childItem.header"
                        :column="scope.column"
                        :index="scope.$index"
                        :name="childItem.header"
                        :row="scope.row"
                      />
                      <template v-else>{{ childItem.label }}</template>
                    </template>
                    <template v-if="childItem.slot" slot-scope="scope">
                      <slot :column="scope.column" :index="scope.$index" :name="childItem.slot" :row="scope.row" />
                    </template>
                    <template v-for="(cItem,cIndex) in childItem.children">

                      <template v-if="cItem.header">
                        <el-table-column
                          :key="'childtable-children-a-' + cIndex"
                          :align="cItem.align || align"
                          :class-name="cItem.slot ? 'table-padding ' + (cItem.className || '') : cItem.className"
                          :fixed="cItem.fixed || false"
                          :header-align="cItem.headerAlign || cItem.align || align"
                          :min-width="!cItem.minWidth && !cItem.width ? '100px' : cItem.minWidth ? cItem.minWidth + 'px' : ''"
                          :prop="cItem.key"
                          :show-overflow-tooltip="!item.hideTooltip"
                          :sort-orders="item.sortOrders"
                          :sortable="(cItem.sortable || sortable) && cItem.key !== 'setting' && !cItem.isNoSort"
                          :width="cItem.minWidth ? '' : cItem.width ? cItem.width + 'px' : ''"
                        >
                          <template slot="header" slot-scope="scope">
                            <slot :column="scope.column" :index="scope.$index" :name="cItem.header" :row="scope.row" />
                          </template>
                          <template v-if="cItem.slot" slot-scope="scope">
                            <slot :column="scope.column" :index="scope.$index" :name="cItem.slot" :row="scope.row" />
                          </template>
                        </el-table-column>
                      </template>
                      <template v-else-if="cItem.slot">
                        <el-table-column
                          :key="'childtable-children-b-' + cIndex"
                          :align="cItem.align || align"
                          :class-name="cItem.slot ? 'table-padding ' + (cItem.className || '') : cItem.className"
                          :fixed="cItem.fixed || false"
                          :header-align="cItem.headerAlign || cItem.align || align"
                          :label="cItem.label"
                          :min-width="!cItem.minWidth && !cItem.width ? '100px' : cItem.minWidth ? cItem.minWidth + 'px' : ''"
                          :prop="cItem.key"
                          :show-overflow-tooltip="!item.hideTooltip"
                          :sort-orders="item.sortOrders"
                          :sortable="(cItem.sortable || sortable) && cItem.key !== 'setting' && !cItem.isNoSort"
                          :width="cItem.minWidth ? '' : cItem.width ? cItem.width + 'px' : ''"
                        >
                          <template slot-scope="scope">
                            <slot :column="scope.column" :index="scope.$index" :name="cItem.slot" :row="scope.row" />
                          </template>
                        </el-table-column>
                      </template>
                      <template v-else>
                        <el-table-column
                          :key="'childtable-children-c-' + cIndex"
                          :align="cItem.align || align"
                          :class-name="cItem.slot ? 'table-padding ' + (cItem.className || '') : cItem.className"
                          :fixed="cItem.fixed || false"
                          :header-align="cItem.headerAlign || cItem.align || align"
                          :label="cItem.label"
                          :min-width="!cItem.minWidth && !cItem.width ? '100px' : cItem.minWidth ? cItem.minWidth + 'px' : ''"
                          :prop="cItem.key"
                          :show-overflow-tooltip="!item.hideTooltip"
                          :sort-orders="item.sortOrders"
                          :sortable="(cItem.sortable || sortable) && !cItem.isNoSort"
                          :width="cItem.minWidth ? '' : cItem.width ? cItem.width + 'px' : ''"
                        />
                      </template>
                    </template>
                  </el-table-column>
                </template>
                <el-table-column
                  v-else
                  :key="'table-children-b-' + childIndex"
                  :align="childItem.align || align"
                  :class-name="childItem.slot ? 'table-padding ' + (childItem.className || '') : childItem.className"
                  :fixed="childItem.fixed || false"
                  :header-align="childItem.headerAlign || childItem.align || align"
                  :label="childItem.label"
                  :min-width="!childItem.minWidth && !childItem.width ? '100px' : childItem.minWidth ? childItem.minWidth + 'px' : ''"
                  :prop="childItem.key"
                  :show-overflow-tooltip="!item.hideTooltip"
                  :sort-orders="item.sortOrders"
                  :sortable="(childItem.sortable || sortable) && !childItem.isNoSort"
                  :width="childItem.minWidth ? '' : childItem.width ? childItem.width + 'px' : ''"
                />
              </template>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.header">
          <el-table-column
            :key="'table-' + index"
            :align="item.align || align"
            :class-name="item.slot ? 'table-padding ' + (item.className || '') : item.className"
            :fixed="item.fixed || false"
            :header-align="item.headerAlign || item.align || align"
            :min-width="!item.minWidth && !item.width ? '100px' : item.minWidth ? item.minWidth + 'px' : ''"
            :prop="item.key"
            :show-overflow-tooltip="!item.hideTooltip"
            :sort-orders="item.sortOrders"
            :sortable="(item.sortable || sortable) && item.key !== 'setting' && !item.isNoSort"
            :width="item.minWidth ? '' : item.width ? item.width + 'px' : ''"
            v-bind="getFilterProps(item)"
          >
            <template slot="header" slot-scope="scope">
              <slot :column="scope.column" :index="scope.$index" :name="item.header" :row="scope.row" />
            </template>
            <template v-if="item.slot">
              <template slot-scope="scope">
                <slot :column="scope.column" :index="scope.$index" :name="item.slot" :row="scope.row" />
              </template>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.slot">
          <el-table-column
            v-if="isClass"
            :key="'table-' + index"
            v-bind="getFilterProps(item)"
            :align="item.align || align"
            :class-name="item.slot ? 'table-padding ' + (item.className || '') : item.className"
            :fixed="item.fixed || false"
            :header-align="item.headerAlign || item.align || align"
            :label="item.label"
            :min-width="!item.minWidth && !item.width ? '100px' : item.minWidth ? item.minWidth + 'px' : ''"
            :prop="item.key"
            :show-overflow-tooltip="!item.hideTooltip"
            :sort-orders="item.sortOrders"
            :sortable="(item.sortable || sortable) && item.key !== 'setting' && !item.isNoSort"
            :width="item.minWidth ? '' : item.width ? item.width + 'px' : ''"
          >
            <el-table-column
              :align="item.align || align"
              :class-name="item.slot ? 'table-padding ' + (item.className || '') : item.className"
              :min-width="!item.minWidth && !item.width ? '100px' : item.minWidth ? item.minWidth + 'px' : ''"
              :show-overflow-tooltip="!item.hideTooltip"
              :sort-orders="item.sortOrders"
              :width="item.minWidth ? '' : item.width ? item.width + 'px' : ''"
            >
              <template v-if="!item.noFilter" slot="header">
                <filter-item ref="filterBar" :option="filterOption(item)" @do-filter="doFilter" />
              </template>
              <template slot-scope="scope">
                <slot :column="scope.column" :index="scope.$index" :name="item.slot" :row="scope.row" />
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column
            v-else
            :key="'table-' + index"
            v-bind="getFilterProps(item)"
            :align="item.align || align"
            :class-name="item.slot ? 'table-padding ' + (item.className || '') : item.className"
            :fixed="item.fixed || false"
            :header-align="item.headerAlign || item.align || align"
            :label="item.label"
            :min-width="!item.minWidth && !item.width ? '100px' : item.minWidth ? item.minWidth + 'px' : ''"
            :prop="item.key"
            :show-overflow-tooltip="!item.hideTooltip"
            :sort-orders="item.sortOrders"
            :sortable="(item.sortable || sortable) && item.key !== 'setting' && !item.isNoSort ? (item.sortable || sortable) : false"
            :width="item.minWidth ? '' : item.width ? item.width + 'px' : ''"
            :resizable="item.resizable"
          >
            <template slot-scope="scope">
              <slot :column="scope.column" :index="scope.$index" :name="item.slot" :row="scope.row" />
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            :key="'table-' + index"
            v-bind="getFilterProps(item)"
            :align="item.align || align"
            :class-name="item.slot ? 'table-padding ' + (item.className || '') : item.className"
            :fixed="item.fixed || false"
            :header-align="item.headerAlign || item.align || align"
            :label="item.label"
            :min-width="!item.minWidth && !item.width ? '100px' : item.minWidth ? item.minWidth + 'px' : ''"
            :prop="item.key"
            :sort-orders="item.sortOrders"
            :sortable="(item.sortable || sortable) && !item.isNoSort ? (item.sortable || sortable) : false"
            :width="item.minWidth ? '' : item.width ? item.width + 'px' : ''"
            :resizable="item.resizable"
            show-overflow-tooltip
          >
            <template v-if="item.headersearch" #header>
              <div class="center-flex">
                <filter-header @handle-search="handleConfirm" @show="handlePopoverShow(item)" @handle-reset="handleReset" />
                <span class="flex-1">{{ item.label }}</span>
              </div>

              <!-- <el-table-column
                v-if="isClass"
                :align="item.align || align"
                :class-name="item.slot ? 'table-padding ' + (item.className || '') : item.className"
                :min-width="!item.minWidth && !item.width ? '100px' : item.minWidth ? item.minWidth + 'px' : ''"
                :prop="item.key"
                :sort-orders="item.sortOrders"
                :width="item.minWidth ? '' : item.width ? item.width + 'px' : ''"
                show-overflow-tooltip
              >
                <template slot="header">
                  <filter-item ref="filterBar" :option="filterOption(item)" @do-filter="doFilter" />
                </template>
              </el-table-column> -->
            </template>
          </el-table-column>
        </template>
      </template>
    </template>
  </el-table>
</template>

<script>
import { uuid } from 'vue-uuid';
import FilterItem from './FilterItem';
import FilterHeader from './FilterHeader';
import { mapState } from 'vuex';
export default {
    name: 'CustomTable',
    components: { FilterItem, FilterHeader },
    inject: {
        inJtableKey: {
            from: 'inJtableKey',
            default: null
        },
        inJtableSize: {
            from: 'inJtableSize',
            default: null
        }
    },
    props: {
        border: {
            type: Boolean,
            default: true
        },
        filterSwitch: {
            type: String,
            default: 'off'
        },
        filterList: {
            type: Array,
            default: () => []
        },
        list: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        },
        height: {
            type: [String, Number],
            default: '100%'
        },
        maxHeight: {
            type: [String, Number],
            default: '100%'
        },
        rowKey: {
            type: [String, Number, Function],
            default: 'id'
        },
        emptyText: {
            type: String,
            default: '暂无数据'
        },
        // 是否有序号
        seq: {
            type: Boolean,
            default: false
        },
        // 是否有复选框
        checked: {
            type: Boolean,
            default: false
        },
        highlightCurrentRow: {
            type: Boolean,
            default: false
        },
        // 是否启用复选禁用
        disabledChecked: {
            type: Boolean,
            default: false
        },
        // 根据哪个字段禁用
        disabledCheckedKey: {
            type: String,
            default: 'canChecked'
        },
        // 是否有操作列
        isControl: {
            type: Boolean,
            default: false
        },
        // 是否需要展开行
        isExpand: {
            type: Boolean,
            default: false
        },
        // 分页信息
        pageQuery: {
            type: Object,
            default: () => {
                return {
                    pageNum: 1,
                    pageSize: 10
                };
            }
        },
        // 列展示信息
        columns: {
            type: Array,
            default: () => []
        },
        sortable: {
            type: [Boolean, String],
            default: false
        },
        // 复选列、序号列是否浮动
        columnFixed: {
            type: [Boolean, String],
            default: 'left'
        },
        expandStripe: {
            type: Boolean,
            default: false
        },
        rowClass: {
            type: [Boolean, Function],
            default: false
        },
        showSummary: {
            type: Boolean,
            default: false
        },
        noSummary: { // 不进行统计的列
            type: Array,
            default: () => []
        },
        summaryList: { // 统计列
            type: Array,
            default: () => []
        },
        summaryType: {
            type: Boolean,
            default: false
        },
        colSpan: {
            type: Number,
            default: 1
        },
        drawer: {
            type: Boolean,
            default: false
        },
        splitRow: {
            type: Boolean,
            default: false
        },
        reserveSelection: {
            type: Boolean,
            default: false
        },
        treeProps: {
            type: Object,
            default: () => {}
        },
        defaultExpandAll: {
            type: Boolean,
            default: false
        },
        defaultSort: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            nameFilter: '',
            currentFilterColumn: null,
            align: 'center',
            uid: uuid,
            selection: [],
            dataList: this.list,
            useList: [],
            isCtrl: false,
            filterParam: {},
            expands: [], // 只展开一行放入当前行id
            filterInputs: {}, // 存储输入框过滤值
            selectedFilters: {}, // 存储选中的过滤值
            filteredOptions: {} // 存储过滤后的选项
        };
    },
    computed: {
        treeFlag() {
            return JSON.stringify(this.treeProps) !== '{}';
        },
        isFilter() {
            return (key) => {
                if (key) {
                    switch (this.filterSwitch) {
                        case 'on':
                            return true;
                        case 'c-on':
                            return this.filterList.length === 0 || this.filterList.some(item => item.key === key);
                        case 'c-off':
                            return this.filterList.length === 0 || !this.filterList.some(item => item.key === key);
                        default:
                            return false;
                    }
                }
            };
        },
        isClass() {
            return this.filterSwitch === 'on' || this.filterSwitch === 'c-on' || this.filterSwitch === 'c-off';
        },
        filterOption() {
            return (data) => {
                const opt = this.filterList.filter(item => item.key === data.key)[0];
                return Object.assign({}, opt, {
                    label: data.label
                });
            };
        },
        isColumnKey() {
            return this.inJtableKey || this.$route.name;
        },
    },
    watch: {
        list: {
            handler(val) {
                if (Object.keys(this.filterParam).length === 0) {
                    this.dataList = this.list;
                } else {
                    for (const key in this.filterParam) {
                        this.doFilter({
                            key: key,
                            value: this.filterParam[key]
                        });
                    }
                }
                if (this.isClass) {
                    this.$nextTick(() => {
                        this.setSelect();
                    });
                }
                if (val && val.length) {
                    this.$nextTick(() => {
                        this.$forceUpdate();
                        this.$refs['table'].doLayout();
                    });
                }
            },
            deep: true
        }
    },
    mounted() {
        if (this.checked) {
            this.addListener();
        }
    },
    updated() {
        if (this.$refs['table'] && this.$refs['table'].doLayout) {
            this.$refs['table'].doLayout();
        }
    },
    destroyed() {
        if (this.checked) {
            this.removeListener();
        }
    },
    deactivated() {
        const list = document.getElementsByClassName('el-tooltip__popper');
        if (list.length > 0) {
            list[list.length - 1].style.display = 'none';
        }
    },
    methods: {
        handleConfirm(val) {
            if (!val) {
                return;
            }
            this.nameFilter = val;
            this.filterTableData();
        },
        handleReset() {
            this.nameFilter = '';
            this.dataList = this.list;
        },
        filterTableData() {
            if (!this.currentFilterColumn) return;

            const filterValue = this.nameFilter.toLowerCase();
            this.dataList = this.list.filter(row => {
                const cellValue = row[this.currentFilterColumn?.key];
                if (cellValue === undefined || cellValue === null) {
                    return false;
                }
                return cellValue.toString().toLowerCase().includes(filterValue);
            });
        },
        handlePopoverShow(item) {
            this.currentFilterColumn = item;
        },
        renderHeader(h, { column, $index }) {
            let data = null;
            this.$emit('render-header', { column, $index }, val => {
                data = val;
            });
            return data;
        },
        getUid() {
            return uuid.v1();
        },
        doLayout() {
            this.$refs.table.doLayout();
        },
        setSelect() {
            const nodes = this.$refs['filterBar'].filter(item => item.$options.propsData.option.type === 'select');
            if (nodes.length) {
                nodes.forEach(item => {
                    item.setSelectList(this.list);
                });
            }
        },
        // 表头下面的筛选
        doFilter({ key, value, accurate }) {
            if (Array.isArray(value)) {
                if (value.length !== 2) {
                    delete this.filterParam[key];
                } else {
                    this.filterParam[key] = value;
                }
            } else if (value === null || value === undefined || value === '') {
                delete this.filterParam[key];
            } else {
                this.filterParam[key] = value;
            }
            let list = this.list;
            for (const key in this.filterParam) {
                const param = this.filterParam[key];
                if (Array.isArray(param)) {
                    if (param.length === 2) {
                        list = list.filter(item => param[0] < (new Date(item[key].replace(/\-/g, '/')).getTime()) < param[1]);
                    }
                } else if (typeof param === 'string') {
                    list = list.filter(item => {
                        const v = item[key] ? item[key].toLowerCase() : '';
                        return v.indexOf(param.toLowerCase()) > -1;
                    });
                } else if (accurate) {
                    list = list.filter(item => item[key] === param);
                } else {
                    list = list.filter(item => item[key].indexOf(param) > -1);
                }
            }
            this.dataList = list;
        },
        keyFilter(row) {
            // row.customTableId = row[this.rowKey] || row.customTableId || uuid.v1()
            row.customTableId = this.isExpand || this.splitRow ? row[this.rowKey] : (row.customTableId || uuid.v1());
            return row.customTableId;
        },
        spanMethod({ row, column, rowIndex, columnIndex }) {
            let span = { rowspan: 1, colspan: 1 };
            this.$emit('span-method', {
                row: row,
                column: column,
                rowIndex: rowIndex,
                columnIndex: columnIndex
            }, val => {
                span = val;
            });
            return span;
        },
        getSummaries(param) {
            let sums = [];
            this.$emit('get-summary', param, val => {
                sums = val;
            });
            return sums;
        },
        rowClassName({ row, rowIndex }) {
            const flag = this.expands.filter(item => row[this.rowKey] === item).length > 0;
            let name = '';
            if (this.rowClass) {
                name = this.expandStripe && flag ? (rowIndex % 2 === 0 ? 'stripe-one' : 'stripe-two') : '';
                this.$emit('row-class-name', row, item => {
                    if (item) {
                        name += ' ' + item;
                    }
                });
            } else {
                this.$emit('row-class-name', { row, rowIndex }, data => {
                    name = data;
                });
            }
            return name;
        },
        setExpands(expands) {
            this.expands = expands;
        },
        exChange(row, rowList) {
            if (!this.treeFlag) {
                const isok = rowList.filter(list => list[this.rowKey] === row[this.rowKey]);
                if (isok.length) {
                    this.expands.push(row[this.rowKey]);
                    this.expands = Array.from(new Set(this.expands));
                } else {
                    this.expands = this.expands.filter(item => item !== row[this.rowKey]);
                }
            }
            this.$emit('expand-change', row, rowList);
        },
        // headerDragend(newWidth, oldWidth, column, event) {
        //     this.columns.forEach((x) => {
        //         if (x.key === column.property) {
        //             this.$set(x, 'minWidth', column.width);
        //         }
        //     });
        //     this.$indexedDB.updateDB(this.$db, 'table', { key: this.isColumnKey, columns: this.columns });

        //     // column.resizable = false
        // },
        expandAll(isok) {
            this.dataList.forEach(item => {
                this.$refs['table'].toggleRowExpansion(item, isok);
            });
        },
        clearSelection() {
            this.$refs['table'].clearSelection();
        },
        clearSort() {
            this.$refs['table'].clearSort();
        },
        sortChange(column, prop, order) {
            this.$emit('sort-change', {
                orderByColumn: column.prop,
                isAsc: this.filterAsc(column.order)
            });
        },
        filterAsc(key) {
            switch (key) {
                case 'descending':
                    return 'desc';
                case 'ascending':
                    return 'asc';
            }
        },
        toggleRowSelection(row, selected) {
            this.$refs['table'].toggleRowSelection(row, selected);
        },
        toggleAllSelection(e) {
            this.$refs['table'].toggleAllSelection();
        },
        // 当用户手动勾选数据行的 Checkbox 时触发的事件
        handleSelect(selection, row) {
            this.selection = selection;
            if (this.checked) {
                if (this.isCtrl) {
                    const isok = this.selection.includes(row);
                    this.$refs['table'].toggleRowSelection(row, isok);
                } else {
                    // const isok = this.selection.includes(row);
                    // this.$refs['table'].clearSelection();
                    // this.$refs['table'].toggleRowSelection(row, isok);
                }
            }
            this.$emit('select', selection, row);
        },
        // 当用户手动勾选全选 Checkbox 时触发的事件
        selectAll(selection) {
            this.$emit('select-all', selection);
        },
        // 限制只能选择一条
        handleSingleRow(selection, row) {
            this.$refs['table'].clearSelection();
            if (selection.length === 0) return;
            this.$refs['table'].toggleRowSelection(row, true);
        },
        getRow() {
            return this.$refs['table'].selection;
        },
        selectable(row, index) {
            return this.disabledChecked ? row[this.disabledCheckedKey] : true;
        },
        rowClick(row, column, event) {
            if (column.type === 'selection') {
                if (this.disabledChecked) {
                    if (row[this.disabledCheckedKey]) {
                        this.$refs['table'].toggleRowSelection(row);
                    }
                } else {
                    this.$refs['table'].toggleRowSelection(row);
                }
            } else {
                if (this.disabledChecked) {
                    if (row[this.disabledCheckedKey]) {
                        this.clickMethod(row, column, event);
                    }
                } else {
                    this.clickMethod(row, column, event);
                }
            }
        },
        cellClick(row, column, event) {
            this.$emit('cell-click', row, column, event);
        },
        cellDblclick(row, column, event) {
            this.$emit('cell-dbl-click', row, column, event);
        },
        clickMethod(row, column, event) {
            if (this.checked) {
                if (this.isCtrl) {
                    this.$refs['table'].toggleRowSelection(row);
                } else {
                    this.$refs['table'].clearSelection();
                    this.$refs['table'].toggleRowSelection(row, true);
                }
            }
            this.$emit('row-click', row, column, event);
        },
        rowDblClick(row, column, event) {
            this.$emit('row-dbl-click', row, column, event);
        },
        selectionChange(selection) {
            this.selection = selection;
            this.$emit('selection-change', selection);
        },
        addListener() {
            const isWin = (navigator.platform === 'Win32') || (navigator.platform === 'Windows');
            const isMac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC') || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel');
            document.addEventListener('keydown', e => {
                if ((e.keyCode === 17 && isWin) || (e.keyCode === 91 && isMac)) {
                    this.isCtrl = true;
                }
            });
            document.addEventListener('keyup', e => {
                if ((e.keyCode === 17 && isWin) || (e.keyCode === 91 && isMac)) {
                    this.isCtrl = false;
                }
            });
        },
        removeListener() {
            document.removeEventListener('keydown', () => {
                this.isCtrl = false;
            }, false);
            document.removeEventListener('keyup', () => {
                this.isCtrl = false;
            }, false);
        },
        cellStyle({ row, column, rowIndex, columnIndex }) {
            let style = '';
            this.$emit('cell-style', { row, column, rowIndex, columnIndex }, val => {
                style = val;
            });
            return style;
        },
        // 默认的过滤方法
        defaultFilterMethod(value, row, column) {
            const property = column.property;
            if (value === undefined || value === null || value === '') {
                return true;
            }

            const cellValue = row[property];
            if (cellValue === undefined || cellValue === null) {
                return false;
            }

            // 支持多选过滤
            if (Array.isArray(value)) {
                return value.length === 0 || value.includes(cellValue);
            }

            // 单选过滤
            return cellValue === value;
        },

        // 处理过滤变化
        handleFilterChange(filters) {
            // 更新过滤后的数据
            this.dataList = this.list.filter(row => {
                return Object.keys(filters).every(key => {
                    const values = filters[key];
                    if (!values || values.length === 0) return true;

                    const column = this.columns.find(col => col.key === key);
                    if (!column) return true;

                    const filterMethod = column.filterMethod || this.defaultFilterMethod;
                    return values.some(value => filterMethod(value, row, { property: key }));
                });
            });

            // 触发过滤事件
            this.$emit('filter-change', filters);
        },

        // 获取过滤相关的属性
        getFilterProps(item) {
            if (!item.filters) {
                return {};
            }

            return {
                filters: item.filters,
                filterMethod: item.filterMethod || this.defaultFilterMethod,
                filterMultiple: item.filterMultiple !== false,
                filterPlacement: item.filterPlacement || 'bottom',
                'filter-change': this.handleFilterChange
            };
        },

        // 获取过滤后的选项
        getFilteredOptions(item) {
            const searchValue = this.filterInputs[item.key]?.toLowerCase();
            if (!searchValue) return item.filters;

            return item.filters.filter(option =>
                option.text.toString().toLowerCase().includes(searchValue)
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.el-table {
  width: 100%;

  ::v-deep .el-table__fixed::before, ::v-deep .el-table__fixed-right::before {
    background-color: transparent;
  }

  ::v-deep tr.stripe-one {
    background: #F2F6FC;

    & + tr .el-table__expanded-cell {
      background: #F2F6FC;

      &:hover {
        background: #F2F6FC !important;
      }
    }
  }

  ::v-deep tr.stripe-two {
    background: #dfecff;

    & + tr .el-table__expanded-cell {
      background: #dfecff;

      &:hover {
        background: #dfecff !important;
      }
    }
  }

  ::v-deep tr.row-danger {
    background: #fbc4c4;

    td {
      background: #fbc4c4 !important;
    }

    & + tr .el-table__expanded-cell {
      background: #fbc4c4;

      &:hover {
        background: #fbc4c4 !important;
      }
    }
  }
  ::v-deep tr.row-warning {
    background: #f5dab1;

    td {
      background: #f5dab1 !important;
    }

    & + tr .el-table__expanded-cell {
      background: #f5dab1;

      &:hover {
        background: #f5dab1 !important;
      }
    }
  }
  ::v-deep tr.row-success {
    background: #e7faf0;

    td {
      background: #e7faf0 !important;
    }

    & + tr .el-table__expanded-cell {
      background: #e7faf0;

      &:hover {
        background: #e7faf0 !important;
      }
    }
  }
  ::v-deep tr.row-select {
    background: rgb(160, 207, 255) !important;

    td {
      background: rgb(160, 207, 255) !important;
    }

    & + tr .el-table__expanded-cell {
      background: rgb(160, 207, 255);

      &:hover {
        background: rgb(160, 207, 255) !important;
      }
    }
  }
  ::v-deep .el-table__cell .el-button {
      padding: 0px 0;
  }

    /* 用于容器的 flex 布局 */
  .center-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 用于 flex 的类 */
  .flex-1 {
    flex: 1;
  }

  .flex-0 {
    flex: 0;
  }
}

.el-table--medium  ::v-deep .el-table__cell {
  padding: 8px 0;
}
 .el-table--small  ::v-deep .el-table__cell {
  padding: 8px 0;
}

.el-table--mini  ::v-deep .el-table__cell {
  padding: 4px 0;
}

.custom-summary-table {

  /deep/.el-table__fixed-footer-wrapper {
    display: none;
  }
  &.custom-filter {
    &.el-table--scrollable-x {
      ::v-deep .el-table__body-wrapper {
        height: calc(100% - 89px) !important;
      }
    }
  }

  &.el-table--scrollable-x {
    ::v-deep .el-table__body-wrapper {
      height: calc(100% - 81px) !important;
      padding-bottom: 35px !important;

      & + .el-table__footer-wrapper {
        margin-top: -50px !important;
      }
    }

    ::v-deep .expanded + tr .el-table__body-wrapper {
      padding-bottom: 0 !important;
    }

    ::v-deep .el-table__fixed-body-wrapper {
      padding-bottom: 35px !important;
    height: auto !important;
    }

    // ::v-deep .el-table__fixed, ::v-deep .el-table__fixed-right {
    //   bottom: 10px !important;
    // }
  }

  ::v-deep .el-table__fixed, ::v-deep .el-table__fixed-right {
    bottom: 0 !important;
  }
}

.custom-summary-table {
  &.el-table--scrollable-x.drawer {
    ::v-deep .el-table__fixed, ::v-deep .el-table__fixed-right {
      bottom: 17px !important;
    }
  }
}

.custom-not-border ::v-deep .el-input__inner {
  border: none;
  text-align: center !important;
  background: inherit;
}
</style>
