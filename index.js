const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message:
      "Welcome to the challenge... I mean good start you have made your first API call but this is the wrong endpoint. Maybe try the auth endpoint",
    hint: "The auth endpoint is /api/auth, we really need to beef up our security here",
  });
});

app.get("/api/auth", (req, res) => {
  res.json({
    success: true,
    message:
      "Getting warmer ... but seems like you are using the wrong request method.",
    hint: "refer to this method here as a cheat sheet https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods",
  });
});

app.post("/api/auth", (req, res) => {
  res.json({
    success: true,
    username: "CoolSuperStore",
    password: "WeN33dABetterPassword123",
    hint: "use this token to access the products endpoint /api/products , remind me to ask IT why we expose our api keys like this again",
  });
});

app.get("/api/products", (req, res) => {
  res.status(405).json({
    success: false,
    message: "Again wrong method",
    hint: "When will you learn, that your actions have consequences",
  });
});

app.post("/api/products", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  console.log(token);
  if (token === "Basic Q29vbFN1cGVyU3RvcmU6V2VOMzNkQUJldHRlclBhc3N3b3JkMTIz") {
    res.json({
      success: true,
      products: [
        { id: 1, name: "Product 1", price: 10.0 },
        { id: 2, name: "Product 2", price: 20.0 },
        { id: 3, name: "Product 3", price: 30.0 },
        { id: 4, name: "Product 4", price: 40.0 },
        { id: 5, name: "Product 5", price: 50.0 },
        { id: 6, name: "Product 6", price: 60.0 },
        {
          hint: "You have successfully accessed the products endpoint. Now write this same request as a Connected content in Braze to finish the challenge",
        },
      ],
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Unauthorized. Invalid or missing access token.",
      hint: "Be sure you are requesting with the correct access token in the RIGHT PLACE",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
