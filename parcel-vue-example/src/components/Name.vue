<template>
  <section>
      <input type="text" placeholder="Ditt namn?" v-model="name">
      <p>Hej {{ name }}!</p>
  </section>
</template>

<script>
export default {
    name: 'Name',
    data() {
        return {
            name: ''
        }
    }
}
</script>

<style>
 p {
     color: #93f;
 }
</style>