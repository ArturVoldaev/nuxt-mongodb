<template>
  <div>
    <H1>page all card</H1>
    <div>
      <ul v-for="item in data" :key="item._id">
        <li>
          <h3>id of card - {{ item._id }}</h3>
          <div>{{ item.title }}</div>
          <div>{{ item.description }}</div>
          <div>{{ item.content }}</div>
          <div>{{ item.createdDate }}</div>
          <button @click="deleteCard(item.title), reloadPage()">
            delete a card
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },

  methods: {
    deleteCard(idCard) {
      let sendIdCard = {};
      sendIdCard.idCard = idCard;
      console.log(idCard);
      this.$axios.$delete("http://localhost:3000/api/card", {
        data: {
          nameCard: idCard,
        },
      });
    },

    async fetchSomething() {
      const ip = await this.$axios.$get("http://localhost:3000/api/card");
      this.data = ip;
    },
    reloadPage() {
      window.location.reload();
    },
  },

  mounted() {
    this.fetchSomething();
  },

};
</script>
