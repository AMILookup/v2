<template>
  <div>
    <amplify-authenticator></amplify-authenticator>
    <amplify-sign-out></amplify-sign-out>
  </div>
</template>

// <script src="./login.js"> </script>

<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  methods: {
    submit() {
      this.$user.commit('change', this.user)
    }
  }
  // computed: {
  //   ...mapGetters([
  //     'searchQuery'
  //   ])
  // }
}
</script>

<style scoped>
  button{
    background-color: #14A3F2;
    font-weight: 500;
    letter-spacing: -.5px;
  }
  div.b-alert{
    color: #990000;
  }
</style>