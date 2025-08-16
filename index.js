import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json({ message: 'Hello, world!' }));

app.get('/time', (c) => c.json({ time: new Date().toISOString() }));

export default {  
  port: 3000, 
  fetch: app.fetch, 
} 