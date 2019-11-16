<template>
  <div class="results">
    <p>Search text is: {{searchtext}}</p>
    <h1>Results:</h1>
    <amplify-connect :query="listAMIsQuery">
      <template slot-scope="{loading, data, errors}">
        <div v-if="loading">Loading...</div>

        <div v-else-if="errors.length > 0"></div>

        <div v-else-if="data">
          <AMIList :items="data.listAmis.items">{{data.listAmis.items}}</AMIList>
        </div>
      </template>
    </amplify-connect>    
  </div>
</template>

<script>
import Amplify from 'aws-amplify';
// import * as queries from './graphql/queries.js';

import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);

const ListAMIs = `query ListAmis($filter: ModelamiFilterInput, $limit: Int, $nextToken: String) {
  listAmis(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      virtualizationtype
      hypervisor
      imageowneralias
      enasupport
      sriovnetsupport
      imageid
      state
      blockdevicemappings
      architecture
      imagelocation
      rootdevicetype
      ownerid
      roodevicename
      creationdate
      public
      imagetype
      commitdate
    }
    nextToken
  }
}`;

export default {
  computed: {
    listAMIsQuery() {
      return this.$Amplify.graphqlOperation(ListAMIs);
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
