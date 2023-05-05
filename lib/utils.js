const logger = require('../lib/logger');

module.exports.saveWithNull = (res, data) => {
  logger.info('init saveWithNull', __dirname);
  res.data = null
  res.statusCode = 200;
  logger.info('end saveWithNull');
}

module.exports.saveWithData = (res, data) => {
  logger.info('init saveWithData', __dirname);
  res.data = data
  res.statusCode = 200;
  logger.info('end saveWithData');
}

module.exports.list = (res, data) => {
  logger.info('init list', __dirname);
  res.data = data
  res.statusCode = 200;
  logger.info('end list');
}