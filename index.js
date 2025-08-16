import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('/', (c) => c.json({ message: 'Hello, world!' }));
app.get('/time', (c) => c.json({ time: new Date().toISOString() }));

serve({ fetch: app.fetch, port: 3000 });