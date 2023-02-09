<script>
import { nextTick } from 'vue';
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
          ],
          gateData: [
            {
              gateID: "123456",
              gateStatus: "activeG"
            },
            {
              gateID: "987654",
              gateStatus: "inactiveG"
            }
        ]
        },
        gateList: undefined, // should become completed HTML of a forEach in gateData
        isActive: true
       }
    },
    computed: {
      gateQtyMsg() {
        let gateNum = this.profile.gates.length;
        return gateNum > 0 ? this.profile.name.concat(" has ", gateNum, " gates.") : "No gates found.";
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
      },
      printGates: function() {
        console.log("Printing gateData");
        console.log(this.profile.gateData);
        document.write(this.profile.gateData);
        let i = 0;
        let li = document.getElementById("gateList").appendChild(document.createElement('ul'));
        nextTick(() => {
            li.classList.add("gateiconul");
          });
        this.profile.gateData.forEach(gate => {
          console.log("Gate #? ", gate);
          let gateItem = li.appendChild(document.createElement('li'));
          i++; // wtf
          gateItem.classList.add('gateitem');
          gateItem.classList.add(gate.gateStatus);
          //li.getElementsByTagName('p')[0].innerText = gate.gateID;
          gateItem.innerText = gate.gateID.concat(', ',gate.gateStatus);
        });

      },
      reactivate: function(btnID) {
        let tempClass = document.getElementById(btnID);
        tempClass.classList.add('active');
      }
    },
    mounted() {
      this.printGates();
      console.log(this.profile.gateData);
    }
  }
</script>

<template>
  <div id="gateList"><em>Gates List:</em></div>
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
  <h2>Class and Style Bindings</h2>
<p> Vue provides special enhancements when v-bind is used with class and style. In addition to strings, the expressions can also evaluate to objects or arrays.</p>
<p>We can pass an object to :class (short for v-bind:class) to dynamically toggle classes:</p>
<code><p>Gate 1 status (refactor to a loop)</p>
{{ printGates }}
  <div id="btn2" class="staticStyle" :class="{ active: isActive }">ACTIVE STYLE CLASS</div><!-- short for v-bind:class. v-bind accepts objects. 
  the key would be the class name you want to add in this instance, and the value is the truthy value of a variable. -->
</code>
<p>The above syntax means the presence of the active class will be determined by the truthiness of the data property isActive. Check code, it has both  static and ":dynamic" class.</p>
<button @click="isActive = false">Make Inactive</button><button @click="reactivate('btn2')">Reactivate</button>
<p>We can also bind to a computed property that returns an object. This is a common and powerful pattern:</p>
<code>
  SCRIPT:
  data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
TEMPLATE:
<div :class="classObject"></div>
</code>
</template>

<style scoped>
.activeG {
  background-color: green;
  color: green;
  list-style-image: url("../assets/cat.gif") !important;
}
.inactiveG {
  color: red;
}
.gateiconul { 
  color: red;
}

.gateitem {
  font-weight: bolder;
  color: pink;
  list-style-image: url("../assets/cat.gif");
}
.staticStyle {
  width: auto;
  text-align: center;
  color: red;
  border: 2px dotted red;
  font-weight: bold;
  background-color: #000;
  box-shadow: none;
}
.active {
  color: green;
  border: 2px dotted green;
}

.inactive {
  color: black;
  border: 5px dotted red;
  background-color: yellow;
}

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
