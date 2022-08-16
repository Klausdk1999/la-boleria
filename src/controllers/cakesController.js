import { postgresRepository } from "../repositories/repository.js";

export async function postCake(req, res) {
    const { name,price,image,description } = req.body;

    try {
      await postgresRepository.insertCake([name,price,image,description]);
      return res.sendStatus(201);
    } catch (error) {
      if (error.code==="23505"){
        return res.sendStatus(409);
      }
      return res.status(500).send(error);
    }
} 