<template>
  <div class="wrap" >
    <h2>Rocky {{enonicStuff.nexty}} <span >{{count}}</span></h2>
    <TestButton
      v-on:addOne="counter"
    />
    <p v-on:click="counter">Here er det et avsnitt</p>
  </div>
</template>

<script>
import TestButton from './Button.vue'

export default {
  components: {
    TestButton
  },
  data: () => ({
    message: "Mesgsd",
    count: 0,
    enonicStuff: {
      nexty: "Dashy pl",
      pewpew: "sdfds"
    },
  }),
  methods: {
    counter: function(){
      this.count++
    }
  }
}
</script>

<style>
</style>
