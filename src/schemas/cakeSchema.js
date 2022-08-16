import joi from "joi";

export const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().positive().precision(2).required(),
    image: joi.string().uri().required(),
    description: joi.string().optional()
}); 

export const clientSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().min(10).max(11).required()
}); 

export const orderSchema = joi.object({
    clientId: joi.number().required(),
    cakeId: joi.number().required(),
    quantity: joi.number().required().less(6),
    totalPrice: joi.number().precision(2).required()
}); 