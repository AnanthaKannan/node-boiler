const { Admin } = require("../model/admin");
const query = require('../lib/query')
const utils = require('../lib/utils');

exports.post = async(req, res, next) => next(utils.saveWithNull(res, query.save(req.body)))

exports.list = async(req, res, next) => next(utils.list(res, query.find(req.query)))
