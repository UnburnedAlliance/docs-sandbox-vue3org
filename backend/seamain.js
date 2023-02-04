// no longer in use - circumvented by App2.vue
export default {
    data() {
      return { count: 0 }
    },
    template: `<button class="slidebox" @click="count++">Seamoss<div class="btnCountDot">{{count}}</div></button>`
  }
  