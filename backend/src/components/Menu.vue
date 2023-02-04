<script>
export default {
    data() {
      return { 
        count: 99,
        message: 'Seamoss'
       }
    }
  }
</script>

<template>
<h1>Top Menu Goes Here</h1>>
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
