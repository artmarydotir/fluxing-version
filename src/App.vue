<template>
  <div id="app">
    <h1>
      State managment:
      <br>
      <span class="green">
        app state : {{ counterr }}
      </span>
    </h1>
    <div class="state">
      <Counter @updating="counterr += $event"></Counter>
      <hr>
      <Result :numbiir="counterr"></Result>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';

export default {
  name: 'app',
  data() {
    return {
      counterr: 0,
    };
  },
  components: {
    Counter,
    Result,
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
