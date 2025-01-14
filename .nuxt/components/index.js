export { default as AboutBox } from '../../components/AboutBox.vue'
export { default as ActivityBox } from '../../components/ActivityBox.vue'
export { default as Box } from '../../components/Box.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as RatingFilled } from '../../components/RatingFilled.vue'
export { default as RatingUnfilled } from '../../components/RatingUnfilled.vue'
export { default as WorkCard } from '../../components/WorkCard.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
