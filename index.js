const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
// Middleware:
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Coffee Making Server is Running!');
})

app.listen(port, (req, res) => {
    console.log(`Coffee Server Running on: ${port}`);
});
