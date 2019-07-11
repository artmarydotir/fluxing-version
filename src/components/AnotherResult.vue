<template>
  <div>
    <p>
      Counter result is:
      {{ counterResult }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    counterResult() {
      return this.$store.state.counter * 2;
    },
  },
};
</script>

<style>

</style>
