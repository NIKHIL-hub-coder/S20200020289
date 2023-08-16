const express = require('express');
const trains = require('./trains');
const app = express();

const cors = require('cors');

app.use(cors());

app.get('/train/trains', (req, res) => {
    res.status(200).send(trains)
})

app.get('/train/trains/:id', (req, res) => {
    const train = trains.find(train => train.train_number === req.params.id)
    if (!train) {
        res.status(404).send('Train not found')
    }
    res.status(200).send(train)
})


app.listen(3001, () => {
    console.log('server started on port 3001')
})