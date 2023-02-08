<script>
export default {
    data() {
      return { 
        count: 99,
        message: 'Naptcha',
        profile: {
          name: "Abe",
          gates: [
            '123456',
            '2345678',
            '354875'
          ]
        }
       }
    },
    computed: {
      gateQtyMsg() {
        let gateNum = this.profile.gates.length;
        return gateNum > 0 ? this.profile.name.concat(" has ", gateNum, " gates.") : "No gates found."
      }
    },
    methods: {
      clearGates: function() {
        this.gates = [];
        console.log("Gate data wiped from screen.");
        document.getElementById("gateQtyH2").innerText = "Abe has ".concat(this.gates.length," gates!");
      }
    }
  }
</script>

<template>
<button class="slidebox" @click="count--">{{message}}<div class="btnCountDot">{{count}}</div></button>
<br /><h3 style="text-align:center">Primary Window</h3>
<p>This vue shows off "Computed Properties", they are like functions but exist in double {} and don't take inputs.</p>
<code>computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }</code><hr />
  <p id="gateQtyH2">{{ gateQtyMsg }} (computed property)</p>
  <p>Computed properties are good when you need to output results of a function multiple times.</p>
  <button @click="clearGates()">Clear Gates</button>
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
