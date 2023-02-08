<script>
import { nextTick } from 'vue';
// nextTick will WAIT to execute the commands within until the next time the DOM is updated. 
import { debounce } from 'lodash-es' // debouncing / throttling concept
export default {
    data() {
      return { 
        count: 0,
        message: "Unburned_Alliance"
       }
    },
    created() {
    // each instance now has its own copy of debounced handler
    // SEAMOSS: NOT WORKING BELOW
    //this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // also a good idea to cancel the timer
    // when the component is removed
    this.debouncedClick.cancel()
  },
    methods: {
      getApp2Count: function(){
        console.log("Running module functionn getApp2Count");
        let appCount = document.getElementById("app2");
        let theDot = appCount.getElementsByClassName("btnCountDot");
        console.log("Attempt 1: ", theDot[0].innerHTML);
        document.getElementById("app2Counter").innerHTML = theDot[0].innerHTML;
        return "Temp Result";
      },
      changeMsg: function() {
        console.log("Change message")
        document.getElementById("message").innerText = document.getElementById("messageChange").value;
      },
      bumpUp: function() {
        this.count++;
        console.log("Bump Up: ", this.count);
        nextTick(() => {
          console.log("Bump Up (within nextTick)", this.count);
        })
      }
    },
    mounted() {
      this.bumpUp();
      console.log("Menu.vue has been mounted ", this.count, " times.");
    }
  }
</script>

<template>
  <h1 style="float:right;" id="message">{{ message }}</h1>
  <form><input id="messageChange" @input="changeMsg()" /></form>
<p @click="bumpUp">(inside Menu.vue) {{ count }}</p>
<button @click="getApp2Count">Click Me - Get Count from App2</button>
<div id="app2Counter">(Get count from App2)</div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
