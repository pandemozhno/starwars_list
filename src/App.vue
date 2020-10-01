<template lang="pug">
  .page
    router-view

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  created () {
    this.getFilms();
  },
  methods: {
    ...mapActions(['getFilms']),
  }
}
</script>

<style lang="stylus">
 .page
    width 100%
    min-height 100vh
    font-family 'Open Sans'

</style>
