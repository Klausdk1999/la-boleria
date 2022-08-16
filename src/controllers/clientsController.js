import { postgresRepository } from "../repositories/repository.js";

export async function postClient(req, res) {
    const { name,price,image,description } = req.body;

    try {
      await postgresRepository.insertCake([name,price,image,description]);
      return res.sendStatus(201);
    } catch (error) {
      return res.status(500).send(error);
    }
} 

