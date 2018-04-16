import axios from "axios";
const jedi = {
  data() {
    return {
      people: []
    };
  },
  created() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.people = res.data.results;
    });
  }
};
export default jedi;
