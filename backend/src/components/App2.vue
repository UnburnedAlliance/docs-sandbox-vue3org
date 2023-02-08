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
      },
      clearGatesComputed() {
        this.gates = [];
        console.log("Gate data wiped from screen.");
        document.getElementById("gateQtyH2").innerText = "Abe has ".concat(this.gates.length," gates!");
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
  <p>Computed property: { gateQtyMsg }</p>
  <p>Exact same thing as Method: { gateQtyMsg() }</p>
  <button @click="clearGates()">Clear Gates (METHOD)</button><br />
  <em>A computed property will only re-evaluate when some of its reactive dependencies have changed. Otherwise the end result is the same.</em><br />
  <button @click="clearGatesComputed">Clear Gates (COMPUTED)</button>
  <p>Why do we need caching? Imagine we have an expensive computed property list, which requires looping through a huge array and doing a lot of computations. Then we may have other computed properties that in turn depend on list. Without caching, we would be executing list’s getter many more times than necessary! In cases where you do not want caching, use a method call instead. Computed properties are by default getter-only. If you attempt to assign a new value to a computed property, you will receive a runtime warning.  In the rare cases where you need a "writable" computed property, you can create one by providing both a getter and a setter:</p>
  <code>
    export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
  </code>
  <p>Now when you run this.fullName = 'John Doe', the setter will be invoked and this.firstName and this.lastName will be updated accordingly. Think of a computed property as declaratively describing how to derive a value based on other values - its only responsibility should be computing and returning that value. Think of a computed value as a 'snapshot'... you should avoid trying to mutate computed values. Instead, update the source state to update the values of a computed property.</p>
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
