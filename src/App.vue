<template>
  <div id="app">
    <h1>
      State managment:
      <br>
    </h1>
    <div class="state">
      <Counter></Counter>
      <hr>
      <Result ></Result>
      <AnotherResult ></AnotherResult>
      <hr>
      another counter another mutation:
      <AnotherCounter ></AnotherCounter>
      <hr>
      <input type="text" v-model="value">
      {{ value }}
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import AnotherCounter from './components/AnotherCounter.vue';
import Result from './components/Result.vue';
import AnotherResult from './components/AnotherResult.vue';

export default {
  name: 'app',
  computed: {
    value: {
      // wow
      get() {
        return this.$store.getters.getValue;
      },
      set(value) {
        this.$store.dispatch('actionsValue', value);
      },
    },
  },
  components: {
    Counter,
    Result,
    AnotherResult,
    AnotherCounter,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.state {
  margin: 16px auto;
}
.green {
  font-size: 14px;
  color: green;
}
</style>
