const router = require("express").Router()

router.use("/question",require('./question'))

module.exports = router