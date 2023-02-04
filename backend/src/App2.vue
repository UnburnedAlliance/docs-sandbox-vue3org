<script>
export default {
    data() {
      return { 
        count: 0,
        message: 'Seamoss',
        testArr: [11,22,33,44,55],
        vmessage: '<h4 style="background-color:pink;">v-HTML</h4>',
        dynamicClass: "activeBtn",
        isDisabled: true,
        changeBtnColor(){
          if(this.dynamicClass == "activeBtn") {
          this.dynamicClass = "inactiveBtn";
          this.isDisabled = false;
        } else {
          this.dynamicClass = "activeBtn";
          this.isDisabled = true;
        }
        },
       }
    }
  }
</script>

<template>
<button class="slidebox" @click="count++">{{message}}<div class="btnCountDot">{{count}}</div></button>
<br /><h3 style="text-align:center">App2.vue</h3>
<h2>V-HTML</h2>
<p>Using v-html instead of bracket interpolation so that the parameter can be parsed as HTML:</p>
<div v-html="vmessage"></div>
<h2>V-BIND</h2>
<p>Access Vue variables inside HTML attributes using v-bind:</p>
<div v-bind:class="dynamicClass" @click="changeBtnColor()">Click me, I change classes with v-bind:class</div>
<div :class="dynamicClass" @click="changeBtnColor">Same, but shorthand version of v-bind</div>
<p>:disabled is a reserved boolean attribute and can take a variable.</p>
<button :disabled="isDisabled">Button</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
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
