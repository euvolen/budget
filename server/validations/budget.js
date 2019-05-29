import Joi from 'joi'

const description = Joi.string().max(500).required().label('Description')
const summ = Joi.number().required().label('Summ')

export const budgetVariable = Joi.object().keys({
    summ, description
})
