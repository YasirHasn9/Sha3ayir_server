import mongoose from 'mongoose';
import config from 'config';
import { Logger } from './logger';
export const connectToDatabase = async (): Promise<void> => {
  const dbUri: string = config.get('dbUri');
  try {
    await mongoose.connect(dbUri);
    Logger.info('Connected to database');
  } catch (err: unknown) {
    // using type guard to ensure err is an instance of error before accessing err.message
    if (err instanceof Error) {
      Logger.error(`Failed to connect to database ${err.message}`);
    } else {
      Logger.error(`Failed to connect to database ${err}`);
    }
    process.exit(1);
  }
};
