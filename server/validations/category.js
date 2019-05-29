import Joi from 'joi'

const description = Joi.string().max(500).required().label('Description')
const name = Joi.string().max(70).required().label('Name')

export const category = Joi.object().keys({
    name, description
})
