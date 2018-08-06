<template>
  <div class="inputfield-wrap">
    <h2>InputField - {{enonicStuff.thing}}</h2>
    <input v-model="enonicStuff.thing" v-on:change="itsChanged" type="text" name="input" />
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Hoi sen berry',
    enonicStuff: {
      thing: "Taru neikam"
    }
  }),
  methods: {
    itsChanged: function(a){
      console.log('its changed');
      console.log(a);
    }
  }
}

</script>

<style>
  .inputfield-wrap {
    margin: 40px;
  }
  input{
    padding: 5px 10px;
    font-size: 15px;
  }
</style>
