const { Question } = require('../models')

const getQuestion = async () => {
    const listQuestion = await Question.find({})
    return listQuestion
}
const createQuestion = async ({ id, ch, daa, dab, dac, dad, dadung}) => {
    const newQuestion = new Question({
        id,
        ch,
        daa,
        dab,
        dac,
        dad,
        dadung
    })
    await newQuestion.save()
    return newQuestion
}
const updateQuestion = async(id, ch, daa, dab, dac, dad, dadung)=>{
    const listQuestion = await Question.findById(id)
    if(id){
        listQuestion.ch = ch,
        listQuestion.daa = daa,
        listQuestion.dab = dab,
        listQuestion.dac = dac,
        listQuestion.dad = dad,
        listQuestion.dadung = dadung
    }
    await listQuestion.save()
    return listQuestion
}
const deleteQuestion = async (id)=>{
    const question = await Question.findByIdAndDelete(id)
    return question
}
module.exports = { getQuestion, createQuestion, updateQuestion, deleteQuestion }

