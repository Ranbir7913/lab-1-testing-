const express = require('express');
const app = express();
const port = 3001;

// Define an Express router
const router = express.Router();

// Handle request for URL: localhost:3001
router.get('/', (req, res) => {
  res.send('CUSTOM SUCCESS!');
});

// Handle request for URL: localhost:3001/echo
router.get('/echo', (req, res) => {
  res.send('CUSTOM SUCCESS! echo');
});

// Handle request for URL: localhost:3001/foxtrot/kilo
router.get('/foxtrot/:kilo', (req, res) => {
  const kiloValue = req.params.kilo;
  res.send(`CUSTOM SUCCESS! Received ${kiloValue} via foxtrot`);
});

// Mount the router at the root level
app.use('/', router);

// Handle invalid/unexpected URL
app.get('*', (req, res) => {
  res.send('CUSTOM FAILED! Fix your URL.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
