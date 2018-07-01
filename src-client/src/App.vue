<template>
  <div class="my-vue">
    <h2>Vue app - {{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
    data: () => ({
        title: 'No title set',
        description: 'No description set'
    })
}
</script>

<style>
.my-vue {
   color: red;
}
</style>
