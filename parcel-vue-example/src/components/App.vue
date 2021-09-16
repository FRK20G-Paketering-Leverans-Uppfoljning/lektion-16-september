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
    },
    mounted() {
        let API_URL = '';
        if (process.env.NODE_ENV === 'development') {
            console.log('You are in development mode');
            API_URL = 'http://localhost:3000/api/products';
        } else if (process.env.NODE_ENV === 'production') {
            API_URL = 'http://my-awesome-api.com/api/products';
        }

        console.log('API URL IS: ', API_URL);
    }
}
</script>

<style>
h1 {
    color: purple;
}
</style>