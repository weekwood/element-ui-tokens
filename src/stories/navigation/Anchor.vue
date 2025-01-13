<template>
  <div class="el-anchor" :class="{ 'el-anchor--affix': affix }">
    <div class="el-anchor-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// Utility function to get element offset top
function getOffsetTop(element) {
  let offsetTop = 0
  while (element && element.tagName !== 'BODY') {
    offsetTop += element.offsetTop
    element = element.offsetParent
  }
  return offsetTop
}

export default {
  name: 'ElAnchor',
  props: {
    affix: {
      type: Boolean,
      default: true
    },
    bounds: {
      type: Number,
      default: 5
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    container: {
      type: [String, HTMLElement],
      default: () => window
    }
  },

  data() {
    return {
      links: [],
      inkTop: 0,
      scrollContainer: null,
      activeLink: '',
      observer: null
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.init()
      this.bindScrollEvent()
      this.observeChildren()
    })
  },

  beforeDestroy() {
    this.removeScrollEvent()
    if (this.observer) {
      this.observer.disconnect()
    }
  },

  methods: {
    init() {
      this.scrollContainer = typeof this.container === 'string'
        ? document.querySelector(this.container)
        : this.container
    },

    bindScrollEvent() {
      if (this.scrollContainer) {
        this.scrollContainer.addEventListener('scroll', this.handleScroll)
      }
    },

    removeScrollEvent() {
      if (this.scrollContainer) {
        this.scrollContainer.removeEventListener('scroll', this.handleScroll)
      }
    },

    observeChildren() {
      // Observe child components being added or removed
      this.observer = new MutationObserver(() => {
        this.updateLinks()
      })
      
      this.observer.observe(this.$el, {
        childList: true,
        subtree: true
      })
      
      this.updateLinks()
    },

    updateLinks() {
      this.links = []
      const links = this.$el.getElementsByClassName('el-anchor-link')
      Array.from(links).forEach(link => {
        const href = link.getAttribute('href')
        if (href) {
          const target = document.querySelector(href)
          if (target) {
            this.links.push({ link, target })
          }
        }
      })
    },

    handleScroll() {
      if (!this.links.length) return

      const scrollTop = this.scrollContainer === window
        ? document.documentElement.scrollTop
        : this.scrollContainer.scrollTop

      // Find the active link
      let activeLink = this.links[0]
      for (let i = 0; i < this.links.length; i++) {
        const currentLink = this.links[i]
        const offsetTop = getOffsetTop(currentLink.target)
        
        if (offsetTop <= scrollTop + this.offsetTop + this.bounds) {
          activeLink = currentLink
        } else {
          break
        }
      }

      if (activeLink) {
        // Update ink position
        const activeElement = activeLink.link
        this.inkTop = activeElement.offsetTop + Math.floor(activeElement.offsetHeight / 2)
        
        // Update active state
        this.links.forEach(({ link }) => {
          link.classList.remove('is-active')
        })
        activeLink.link.classList.add('is-active')
      }
    },

    scrollToAnchor(href) {
      const target = document.querySelector(href)
      if (target) {
        const offsetTop = getOffsetTop(target) - this.offsetTop
        const scrollElement = this.scrollContainer === window
          ? document.documentElement
          : this.scrollContainer
          
        scrollElement.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.el-anchor {
  position: relative;

  &--affix {
    position: sticky;
    top: 0;
  }

  &-wrapper {
    overflow: auto;
  }
}
</style> 