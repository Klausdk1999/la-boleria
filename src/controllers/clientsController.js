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


export async function getClientOrders(req, res) {
  const { id } = req.params;
  try {

    let  whereClause = ` WHERE c.id = '${id}'`;
    const result = await postgresRepository.getOrderByIdPG(whereClause);
    if(result.rows<1){
      res.sendStatus(404);
    }else{
      res.send(result.rows.map(_mapOrdersArrayToObject)).status(200);
    }

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

function _mapOrdersArrayToObject(row) {
  const [
    client_id,
    name,
    address,
    phone,
    cake_id,
    cake_name,
    price,
    description,
    image,
    order_id,
    created_at,
    quantity,
    total_price
  ] = row;

  return {
    client: {
      id: client_id,
      name,
      address,
      phone
    },
    cake: {
      id: cake_id,
      name: cake_name,
      price,
      description,
      image
    },
    orderId: order_id,
    created_at,
    quantity,
    total_price
  };
}