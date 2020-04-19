import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf } = format;

const myFormat = printf(
  (info) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`,
);

export const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [new transports.Console()],
});
