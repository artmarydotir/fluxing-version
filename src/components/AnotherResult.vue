<template>
  <div>
    <p>
      Counter result is:
      {{ doubleCounter }}
    </p>
    the number of clicks: {{ stingCounter }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'doubleCounter',
      'stingCounter',
    ]),
  },
};
</script>

<style>

</style>
