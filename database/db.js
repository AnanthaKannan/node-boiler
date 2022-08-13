const mongoose = require("mongoose");
const config = require("config");

const logger = require('../lib/logger')

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
      logger.info(`Mongo dp connected... ${db}`)
    }).catch((error) => {
        logger.error(`${db} not connected..Node is Exiting...! ${error}`);
      process.exit(1);
    });
};
