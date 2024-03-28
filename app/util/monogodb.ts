import { MongoClient, Db } from 'mongodb';

// Define a type for the cached connection to avoid TypeScript errors
type CachedConnection = {
    conn: MongoClient | null;
    promise: Promise<MongoClient> | null;
};

// Cache the database connection to prevent multiple connections during development
let cached: CachedConnection = global.mongoCache || { conn: null, promise: null };

if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function connectToDatabase(): Promise<{ db: Db; client: MongoClient }> {
    if (cached.conn) {
        return { client: cached.conn, db: cached.conn.db() };
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = MongoClient.connect(process.env.MONGODB_URI!, opts).then((client) => {
            return client;
        });
    }
    cached.conn = await cached.promise;
    cached.promise = null; // This line is optional: it clears the promise after the connection is established.
    return { client: cached.conn, db: cached.conn.db() };
}

// Ensure the cached connection is reused for hot-reloading in development
global.mongoCache = cached;

export { connectToDatabase };
