import * as winston from 'winston'
import config from "../config";

const path = require('path');

const myFormat = winston.format.printf(info => {
    info.level = info.level.toLocaleUpperCase();
    return `${info.timestamp} [${info.level}]: ${info.message}`;
});
const loggerPath = path.join(__dirname, '../../', config.logger.path);

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        myFormat,
    ),
    transports: [
        new winston.transports.Console({level: 'info'}),
        new winston.transports.File({filename: loggerPath + 'logger.log'})
    ]
});

logger.error("app running");
export default logger;