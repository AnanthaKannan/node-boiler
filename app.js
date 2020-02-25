const express = require("express");
const app = express();
const config = require("config");


require("./startup/cors")(app);
app.use(express.json());
require("./startup/routes")(app);
require("./startup/db")();

app.use((err, req, res, next)=>{
    const errorMsg = err.message;
    console.log("error", errorMsg);
    res.send({ error: err.message})
})


const port = process.env.PORT || config.get("port");
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
});