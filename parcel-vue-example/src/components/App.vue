<template>
  <section>
      <h1>{{ message }}</h1>
      <Name />
  </section>
</template>

<script>
import Name from './Name.vue';

export default {
    name: 'App',
    components: {
        Name
    },
    data() {
        return {
            message: 'Få en personlig hälsning!'
        }
    }
}
</script>

<style>
h1 {
    color: purple;
}
</style>