// server.js
const express = require('express');
const history = require('connect-history-api-fallback')
const path = require('path');
const port = process.env.PORT || 5000;

app = express();
const staticMiddleware = express.static(path.join(__dirname, "/dist"));
app.use(staticMiddleware)
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticMiddleware)

app.listen(port, () => {
   console.log(`Server running on ${port}`);
 });