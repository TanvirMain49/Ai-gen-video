import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
//   out: './drizzle',
  schema: './src/config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_3nUjmJiGY4yN@ep-sweet-glade-a8hlwfu1-pooler.eastus2.azure.neon.tech/Ai-Short-Video?sslmode=require',
  },
});
