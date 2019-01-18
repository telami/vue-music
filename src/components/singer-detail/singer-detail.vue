<template>
  <div class="singer-detail"></div>
</template>

<script>
  export default {
    name: "singer-detail"
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"
  .singer-detail
    position: fixed;
    z-inde: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background $color-background
</style>
