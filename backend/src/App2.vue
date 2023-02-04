<script>
export default {
    data() {
      return { 
        count: 0,
        count2: 0,
        message: 'Seamoss',
        testArr: [11,22,33,44,55],
        vmessage: '<h4 style="background-color:pink;">v-HTML</h4>',
        dynamicClass: "activeBtn",
        isDisabled: true,
        socialLink: "https://twitter.com/wellspringagncy",
        objectOfAttrs: {
      id: 'idSample',
      class: 'classSample'
    },
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
{{ isDisabled ? "DISABLED" : "ACTIVE" }}
<button :disabled="isDisabled" @mousedown="count2++">Button</button>
<div v-bind="objectOfAttrs">Using v-bind to import an object of multiple attributes</div>
<h2>JS Expressions in Bindings</h2>
{{  message.concat("! x3 on count ", count*3) }}

<p>v-if directive:</p>
<p v-if="isDisabled">Now you see me</p>
<a v-bind:href="socialLink" class="greetings">URL link is a directive arguement.</a>
<h2>v-on:click="" and @click are the same</h2>
<p>This button uses v-on:mouseover instead of the @click example above.</p>
<button v-on:mouseover="count2++">{{count2}}</button>

<form @submit.prevent="onSubmit"><h4>Directive Modifiers</h4><input name="First" /><input type="submit" /><p>The ".prevent" is a "directive modifier" using dot prefix notation. For example, the .prevent modifier tells the v-on directive to call event.preventDefault() on the triggered event:</p></form>

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

.greetings {
  display: block;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
