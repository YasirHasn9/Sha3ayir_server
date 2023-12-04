"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const logger_1 = require("./logger");
const connectToDatabase = async () => {
    const dbUri = config_1.default.get('dbUri');
    try {
        await mongoose_1.default.connect(dbUri);
        logger_1.Logger.info('Connected to database');
    }
    catch (err) {
        if (err instanceof Error) {
            logger_1.Logger.error(`Failed to connect to database ${err.message}`);
        }
        else {
            logger_1.Logger.error(`Failed to connect to database ${err}`);
        }
        process.exit(1);
    }
};
exports.connectToDatabase = connectToDatabase;
