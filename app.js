const express = require("express");
const app = express();
const router = require("./routes");
const log = require("./middlewares/logger");
const PORT = process.env.PORT || 3000;

app.use(log);
app.use(router);
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: `Resource ${req.originalUrl} not found`,
  });
});
app.listen(PORT, () => console.log("Server : http://localhost:3000"));
