<template>
  <div class="el-anchor-link">
    <a
      :href="href"
      class="el-anchor-link__title"
      @click.prevent="handleClick"
    >
      {{ title }}
    </a>
    <div v-if="$slots.default" class="el-anchor-link__children">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElAnchorLink',
  
  props: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  methods: {
    handleClick() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'ElAnchor') {
        parent = parent.$parent
      }
      
      if (parent && parent.scrollToAnchor) {
        parent.scrollToAnchor(this.href)
      }
    }
  }
}
</script>

<style lang="scss">
.el-anchor-link {
  &__title {
    position: relative;
    display: block;
    padding: var(--spacing-1) 0;
    color: var(--color-text-secondary);
    transition: all 0.3s;
    text-decoration: none;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    
    &:hover {
      color: var(--color-primary-hover);
    }
  }
  
  &.is-active {
    > .el-anchor-link__title {
      color: var(--color-primary-500);
      font-weight: 600;
    }
  }
  
  &__children {
    padding-left: var(--spacing-4);
  }
}
</style> 