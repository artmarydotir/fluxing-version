<template>
  <div>
    <p>
      Counter result is:
      {{ doubleCounter }}
    </p>
    <p>
      im from getter
      {{ doubleCounter }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['doubleCounter']),
    // counterResult() {
    //   return this.$store.getters.doubleCounter;
    // },
  },
};
</script>

<style>

</style>
