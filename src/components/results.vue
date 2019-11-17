<template>
  <div class="results">
    <div>
      <p> Search Store: {{ $store.getters.search }} </p>
    </div>
    <h1>Results:</h1>
    <amplify-connect :query="getAMIquery">
      <template slot-scope="{loading, data, errors}">
        <div v-if="loading">Loading...</div>

        <div v-else-if="errors.length > 0"></div>

        <div v-else-if="data">
          <div :items="data.getAmi">{{data.getAmi}}</div>
        </div>
      </template>
    </amplify-connect>    
  </div>
</template>

<script>
import Amplify from 'aws-amplify';
import * as queries from '../graphql/queries.js';

import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

export default {
  computed: {
    getAMIquery() {
      return this.$Amplify.graphqlOperation(queries.getAmi, { id: this.$store.getters.search });
    }
  }
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
