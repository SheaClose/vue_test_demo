<template>
<div>
  <h1>List of people:</h1>
  <ul :style="ulStyle">
      <li :style="liStyle"  :key="person.name" v-for="person of people"> 
        <router-link :to="`/about/${person.name}`">
          {{ person.name }}  
        </router-link>
      </li>
  </ul>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      people: [],
      liStyle: {
        display: "inline-block",
        margin: "50px",
        width: "250px",
        height: "100px",
        border: "1px solid #ccc"
      },
      ulStyle: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
      }
    };
  },
  created() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.people = res.data.results;
    });
  }
};
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
