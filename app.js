const express = require("express");
const app = express();
// ading comment
// here importing of cors is pending

app.get("/", (req, res) => {
  res.send("Hello from laptop server , date 30-06-2026, time 10:00 AM");
});

app.listen(3000, () => {
  console.log("Server running");
});
