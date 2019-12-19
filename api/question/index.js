const router = require('express').Router()
const { getQuestion, createQuestion, updateQuestion, deleteQuestion } = require('../../services')

router.get('/', async (req, res) => {
    const listQuestion = await getQuestion()
    res.json({
        success: true,
        data: listQuestion
    })
})
router.post('/', async (req, res) => {
    const result = await createQuestion(req.body)
    console.log("Thanh cong")
    res.json(result)
})
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { ch } = req.body
    const { daa } = req.body
    const { dab } = req.body
    const { dac } = req.body
    const { dad } = req.body
    const { dadung } = req.body
    const result = await updateQuestion(id, ch, daa, dab, dac, dad, dadung)
    res.json({
        success: true,
        message: "Update Success",
        data: result
    })

})
router.delete('/:id', async (req,res)=>{
    const {id} = req.params
    const result = await deleteQuestion(id)
    res.json({
        success: true,
        message: "Delete Success",
        data: result
    })
})
module.exports = router