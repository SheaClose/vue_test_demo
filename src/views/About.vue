<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <div :key="key" v-for="(val,key) of person">
       {{key}}: {{val}}
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      people: []
    };
  },
  created() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.people = res.data.results;
    });
  },
  computed: {
    person() {
      return this.people.find(c => c.name === this.$route.params.id);
    }
  }
};
</script>

<style>

</style>
