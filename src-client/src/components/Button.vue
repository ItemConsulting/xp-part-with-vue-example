<template>
  <div class="button-wrap">
    <h2>Button test  - {{ enonicStuff.thing }}</h2>
    <button  type="button" class="button" v-on:click="$emit('addOne')">This is a button</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    thing: 'hakkaruu',
    enonicStuff: {
      thing: "Taru Taru neikam eh"
    }
  }),

  methods: {
    reverseMessage: function(){
      this.enonicStuff.thing = this.enonicStuff.thing.split('').reverse().join(',')
    },
  }
}

</script>

<style>
  .button-wrap {
    margin: 40px;
  }
  input{
    padding: 5px 10px;
    font-size: 15px;
  }
</style>
