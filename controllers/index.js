const express = require('express')
const films = require('./films')

const router = new express.Router()

router.use('/films', films)

module.exports = router