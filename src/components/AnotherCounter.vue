<template>
  <div>
    1.one way to have a argument in actions is to create a dispatch method that accept an argument
    <br>
    2.another way to have arg in actions is to give a second arc in sote actions with the name of Payload.
    <br>
    <button @click="asycIncrement({by: 50, time: 3000})">Increment</button>
    <button @click="asycDecrement">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Counter',
  methods: {
    ...mapActions(['asycIncrement', 'asycDecrement']),
    // increment(by) {
    //   this.$store.dispatch('increment', by);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
