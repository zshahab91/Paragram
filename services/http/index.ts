import { Client } from './client';
import { AuthMiddleware, LoggerMiddleware } from './middleware';

const client = new Client({ baseURL: process.env.NEXT_PUBLIC_API_HOST });
client.middlewares.add(new AuthMiddleware());
client.middlewares.add(new LoggerMiddleware());
client.boot();

export default client;
