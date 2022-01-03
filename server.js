const { response } = require('express');
const express = require('express');
const PORT = process.env.PORT || 4001;
const app = express();
const noteRoute = require('./routes/noteRoute')
const htmlRoute = require('./routes/htmlRoute')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use('/api', noteRoute);
app.use('/', htmlRoute)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})