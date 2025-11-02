import { neon } from '@neondatabase/serverless';

// Lazy initialization - only connect when actually used
let sqlInstance: ReturnType<typeof neon> | null = null;

function getSql() {
  if (!sqlInstance) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    sqlInstance = neon(connectionString);
  }
  return sqlInstance;
}

export { getSql };

