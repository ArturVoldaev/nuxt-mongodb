<!-- Please remove this file from your project -->
<template>
  <form action="/" method="post">
    <input type="text" name="name" v-model="name" />
    <input type="text" name="password" v-model="password" />
    <button @click.prevent="fetchSomething" type="submit">Отправить форму</button>
  </form>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    async fetchSomething() {
      
      let dataCard = {
        h1: this.name,
        description: this.password,
        content: this.password,
      };
      console.log(dataCard);
      await this.$axios.$post("http://localhost:3000/api/card", dataCard);
      this.$router.push('/card')
    },
  },
};
</script>
