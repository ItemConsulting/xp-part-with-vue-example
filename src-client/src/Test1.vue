<template>
  <div class="test1">
    <h2>Test1 app - {{ title }}</h2>
    <p>{{ description }}</p>
    <p>Adding som emore stuff</p>
  </div>
</template>

<script>
export default {

    data: () => ({
        title: 'No title set',
        description: 'No description set'
    }),
    created: function(){
      console.log('created width title: ' + this.title)
    }
}
</script>

<style>
.test1 {
   color: skyblue;
}
</style>
