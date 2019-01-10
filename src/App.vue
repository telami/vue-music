<template>
  <div id="app">
    <m-header/>
    <tab/>
    <router-view/>
  </div>
</template>

<script>

  import MHeader from "components/m-header/m-header";
  import Tab from "./components/tab/tab";

  export default {
    components: {Tab, MHeader}
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
