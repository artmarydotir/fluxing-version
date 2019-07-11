<template>
  <div>
    <button @click="incre">Increment</button>
    <button @click="decre">Decrement</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
    incre() {
      // eslint-disable-next-line no-plusplus
      this.$store.state.counter++;
    },
    decre() {
      // eslint-disable-next-line no-plusplus
      this.$store.state.counter--;
    },
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
