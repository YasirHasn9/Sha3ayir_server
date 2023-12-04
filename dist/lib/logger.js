"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const winston_1 = __importDefault(require("winston"));
exports.Logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: 'YYYY/MM/DD HH:mm',
    }), winston_1.default.format.printf(info => `
			[${info.timestamp}]
			${info.level}: ${info.message}`)),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true })),
        }),
    ],
});
winston_1.default.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'green',
});
