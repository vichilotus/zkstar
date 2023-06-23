const express = require("express");
const port = process.env.PORT || 8080;
const fallback = require("express-history-api-fallback");
const app = express();
const root = `${__dirname}/public`;
app.use(express.static(root));
app.use(fallback("index.html", { root }));

app.listen(port);
console.log("ZinkStar Server started at http://localhost:" + port);
