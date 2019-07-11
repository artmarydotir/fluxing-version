<template>
  <div>
    <p>
      Counter result is:
      {{ counterResult }}
    </p>
    the number of clicks: {{ stingCounter }}
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapGetters([
    //   'counterResult',
    //   'stingCounter',
    // ]),
    counterResult() {
      return this.$store.getters.doubleCounter;
    },
    stingCounter() {
      return this.$store.getters.stingCounter;
    },
  },
};
</script>

<style>

</style>
