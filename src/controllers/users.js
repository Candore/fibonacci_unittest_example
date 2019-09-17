const axios = require("axios");

// Why it's a bad idea to do this ?
const search = {
  getUser: () => 
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(response => {
        return response.data;
      })
     .catch(err => err.response)
};

module.exports = search