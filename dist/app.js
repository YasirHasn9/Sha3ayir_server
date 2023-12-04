"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const logger_1 = require("./lib/logger");
const connect_1 = require("./lib/connect");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = config_1.default.get('port');
app.use(routes_1.default);
app.listen(port, () => {
    logger_1.Logger.info(`localhost listening on ${port}`);
    (0, connect_1.connectToDatabase)();
});
