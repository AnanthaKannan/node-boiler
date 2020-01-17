const mongoose = require("mongoose");
const config = require("config");
module.exports = function() {
  const db = config.get("db");
  mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => {
        console.log(`Mongo dp connected...`)
    }).catch(() => {
        console.log(`Db not connected..Node is Exiting...!`);
      process.exit(1);
    });
};
