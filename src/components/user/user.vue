<template>
  <v-flex md6 v-if="!confirm" class="pa-3">
    <section title="Login to My Website">
      <v-form @submit.prevent.stop="userLogin()" ref="form-login" autocomplete="off">
        <v-text-field v-model="loginEmail" label="Email" required autocomplete="off" :rules="emailRules"></v-text-field>
        <v-text-field v-model="loginPassword" type="password" label="Password" required autocomplete="off" :rules="passwordRules"></v-text-field>
        <v-alert :value="$store.state.account.loginError" color="error" icon="far fa-exclamation-triangle" outline>{{ $store.state.account.loginError }}</v-alert>
        <v-btn color="primary" type="submit">Login</v-btn>
        <br><br>
        <span @click="confirm = true">Need to <span style="text-decoration: underline; color: #2196F3; cursor: pointer;">confirm</span> your email address?</span>
      </v-form>
    </section>
  </v-flex>
</template>

<script>

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
