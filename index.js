const express = require('express');
const cors = require('cors');

const app = express();
const { PORT = 8080 } = process.env;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`express running on port ${PORT}`);
});
