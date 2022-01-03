
const router = require('express').Router();
const notesArray = require('../db/db.json')
const fs = require('fs')

const generators = require("id-generators");
const generator = generators.get("nanoid");
const generate = generator();


router.get('/notes', (req, res) => {
    res.json(notesArray)
})


router.post('/notes', (req, res) => {
    req.body.id = generate()
    notesArray.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(notesArray, null, 2))
    res.json(notesArray);
})

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id === noteId) {
            notesArray.splice(i, 1)
        }
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(notesArray, null, 2))
    res.json(notesArray);
})


module.exports = router;