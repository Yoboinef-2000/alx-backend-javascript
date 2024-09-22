// full_server/server.js

import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

// Use the routes defined in routes/index.js
app.use('/', routes);

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
}

export default app;
