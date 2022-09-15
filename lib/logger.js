/*
 * @Author: Sree Kannan
 * @Date: 2022-08-14 12:05 
 * @Last Modified by: 
 * @Last Modified time: 
 * @Creates and manages the log
 */

var winston = require('winston');
require('winston-daily-rotate-file');
var path = require("path");
var appRoot = require('app-root-path');

var console_debug = new(winston.transports.Console)({
    level: 'debug'
});

var dailyRotateFile_info = new(winston.transports.DailyRotateFile)({
    level: 'info',
    filename: path.join(appRoot.path, "logs/info", 'logger-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxFiles: '2d'
});

var dailyRotateFile_error = new(winston.transports.DailyRotateFile)({
    level: 'error',
    filename: path.join(appRoot.path, "logs/error", 'logger-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxFiles: '2d'
});

var dailyRotateFile_warning = new(winston.transports.DailyRotateFile)({
    level: 'warning',
    filename: path.join(appRoot.path, "logs/trace", 'trace-%DATE%.txt'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxFiles: '2d'
});

var logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    transports: [
        console_debug,
        dailyRotateFile_info,
        dailyRotateFile_error,
        dailyRotateFile_warning
    ],
    format: winston.format.combine(
        winston.format.simple()
    )
});

module.exports = logger

// logger.error('error message is ehrere')