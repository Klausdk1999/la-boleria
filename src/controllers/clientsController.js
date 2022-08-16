import { postgresRepository } from "../repositories/repository.js";

export async function postClient(req, res) {
    const { name,address,phone } = req.body;

    try {
      await postgresRepository.insertClient([name,address,phone]);
      return res.sendStatus(201);
    } catch (error) {
      return res.status(500).send(error);
    }
} 

