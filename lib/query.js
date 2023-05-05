const logger = require('../lib/logger');
const { Admin } = require("../model/admin");

module.exports.save = async(data) => {
  logger.info('init save', __dirname);
  const admin = new Admin(data);
  return await admin.save();
}

const createMongoQueryUsingParam = (query) => {
  return {}
}

module.exports.find = async(query) => {
  logger.info('init find', __dirname);
  query = createMongoQueryUsingParam(query)
  const data = await Admin.find(query);
  return data;
}