const axios = require("axios");

axios
  .post("http://localhost:3000/api/products", headers
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
