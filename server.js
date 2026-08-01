const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Node.js application deployed automatically to EC2!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

// Do not start the server while running tests.
if (require.main === module) {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Application running on port ${port}`);
  });
}

module.exports = app;
