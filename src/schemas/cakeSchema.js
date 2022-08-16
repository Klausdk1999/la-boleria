import joi from "joi";

export const cakeSchema = joi.object({
    name: joi.string().uri().required(),
    price: joi.number().precision(2).required(),
    image: joi.string().uri().required(),
    description: joi.string().optional()
}); 

export const clientSchema = joi.object({
    name: joi.string().uri().required(),
    address: joi.string().required(),
    phone: joi.string().required()
}); 

export const orderSchema = joi.object({
    clientId: joi.number().required(),
    cakeId: joi.number().required(),
    quantity: joi.number().required(),
    totalPrice: joi.number().precision(2).required()
}); 