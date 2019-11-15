<template>
  <div id="app">
    <amilookup/>
    <amplify-connect :query="listAMIsQuery">
      <template slot-scope="{loading, data, errors}">
        <div v-if="loading">Loading...</div>

        <div v-else-if="errors.length > 0"></div>

        <div v-else-if="data">
          <AMIList :items="data.listAmis.items">{{data.listAmis.items}}</AMIList>
        </div>
      </template>
    </amplify-connect>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Amplify from 'aws-amplify';
// import * as queries from './graphql/queries.js';

import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
import { components } from 'aws-amplify-vue';
import amilookup from '@/components/amilookup';

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

console.log("before Query");
export default {
  components: {
    amilookup,
    ...components
  },
  computed: {
    listAMIsQuery() {
      // const test = this.$Amplify.graphqlOperation(ListAMIs);
      // console.log(test);
      return this.$Amplify.graphqlOperation(ListAMIs);
    }
  }
}

// export default {
//   components: {
//     amilookup,
//     ...components
//   },
//   computed: {
//     listAMIs() {
//       // return this.$Amplify.graphqlOperation(ListAMIs);
//       API.graphql(graphqlOperation(queries.getAMI));
//     }
//   }
// }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
