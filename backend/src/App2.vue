<script>
export default {
    data() {
      return { 
        count: 0,
        message: 'Seamoss'
       }
    }
  }
</script>

<template>
<button class="slidebox" @click="count++">{{message}}<div class="btnCountDot">{{count}}</div></button>
<br /><h3 style="text-align:center">App2.vue</h3>
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
