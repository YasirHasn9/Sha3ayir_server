import winston from 'winston';

export const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY/MM/DD HH:mm',
    }),
    winston.format.printf(
      info => `
			[${info.timestamp}]
			${info.level}: ${info.message}`,
    ),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true })),
    }),
  ],
});

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
});
// To log with function name and from where it gets called,
// you would need to manually add this information when you log, like so:
// logger.error(`[${arguments.callee.name}] This is an error message`);
