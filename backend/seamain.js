// my-component.js
export default {
    data() {
      return { count: 0 }
    },
    template: `<button class="slidebox" @click="count++">Seamoss<br />Count is {{ count }}</button>`
  }
  