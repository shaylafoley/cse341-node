const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

const port = process.env.PORT || 5173;

app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});
