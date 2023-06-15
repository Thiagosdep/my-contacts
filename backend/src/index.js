const express = require('express');

const routes = require('./routes');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(routes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
