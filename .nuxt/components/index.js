export const AboutBox = () => import('../../components/AboutBox.vue' /* webpackChunkName: "components/about-box" */).then(c => wrapFunctional(c.default || c))
export const ActivityBox = () => import('../../components/ActivityBox.vue' /* webpackChunkName: "components/activity-box" */).then(c => wrapFunctional(c.default || c))
export const Menu = () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const RatingFilled = () => import('../../components/RatingFilled.vue' /* webpackChunkName: "components/rating-filled" */).then(c => wrapFunctional(c.default || c))
export const RatingUnfilled = () => import('../../components/RatingUnfilled.vue' /* webpackChunkName: "components/rating-unfilled" */).then(c => wrapFunctional(c.default || c))
export const WorkCard = () => import('../../components/WorkCard.vue' /* webpackChunkName: "components/work-card" */).then(c => wrapFunctional(c.default || c))

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
