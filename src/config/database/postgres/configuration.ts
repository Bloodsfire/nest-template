import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  host: process.env.POSTGRES_HOST || process.env.DATABASE_HOST,
  port: process.env.POSTGRES_PORT || process.env.DATABASE_PORT,
  username: process.env.POSTGRES_USERNAME || process.env.DATABASE_USERNAME,
  password: process.env.POSTGRES_PASSWORD || process.env.DATABASE_PASSWORD,
  database: process.env.POSTGRES_NAME || process.env.DATABASE_NAME,
}));
