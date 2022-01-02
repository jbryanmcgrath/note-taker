const { response } = require('express');
const express = require('express');
const PORT = process.env.PORT || 4001;
const app = express();
const { notes } = require('./Develop/db/db')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))


app.get('/Develop/db/db', (req, res) => {
    res.json(notes)
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})