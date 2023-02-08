<script>
export default {
    data() {
      return { 
        count: 9,
        message: "Seamoss"
       }
    },
    mounted() {
      console.log("Menu.vue has been mounted ", this.count, " times.");
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
      }
    }
  }
</script>

<template>
  <h1 style="float:right;" id="message">{{ message }}</h1>
  <form><input id="messageChange" @input="changeMsg()" /></form>
<p @click="count++">(inside Menu.vue) {{ count }}</p>
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
