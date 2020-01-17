const express = require("express");
const app = express();
const config = require("config");


require("./startup/cors")(app);
app.use(express.json());
require("./startup/routes")(app);
require("./startup/db")();


const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Listening on port ${port}...`));