import * as dotenv from 'dotenv';

export function loadDotEnv() {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  dotenv.config();
}
