import { postgresRepository } from "../repositories/repository.js";

export async function postOrder(req, res) {
  const { clientId,cakeId,quantity,totalPrice } = req.body;

  try {
    await postgresRepository.insertOrder([clientId,cakeId,quantity,totalPrice]);
    return res.sendStatus(201);
  } catch (error) {
    if (error.code==="23503"){
      return res.sendStatus(404);
    }
    console.log(error)
    return res.status(500).send(error);
  }
} 

export async function signIn(req, res) {
    const { email, password } = req.body;
  
    try {
      const { rows: user } = await connection.query(
        `SELECT * FROM users WHERE email = $1;`,
        [email]
      );
  
      if (user.length === 0) {
        return res.sendStatus(401);
      }
  
      const checkPassword = bcrypt.compareSync(password, user[0].password);
  
      if (!checkPassword) {
        return res.sendStatus(401);
      }
  
      const secretKey = process.env.JWT_SECRET;
      const token = jwt.sign({ id: user[0].id }, secretKey);
     
      await connection.query(
        `INSERT INTO sessions (token,user_id) VALUES ($1,$2);`,
        [token,user[0].id]
      );

      return res.status(200).send({ token });
    } catch (error) {
      return res.status(400).send(error);
    }
}

