<template>
  <div class="search">
    <h1>Search</h1>
    <p>Add Search Bar Here</p>
    <input v-model="search" type="text" placeholder="edit me">
    <button @click="submit()">Submit</button>
  </div>
</template>

<script>


export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit() {
      this.$store.commit('change', this.search)
    }
  }
  // computed: {
  //   ...mapGetters([
  //     'searchQuery'
  //   ])
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
