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

export async function getOrders(req, res) {
  const { date } = req.query;
  console.log(date)
  try {
    const conditions = [];
    let whereClause = '';

    if (date) {
      conditions.push(`o.created_at::date = '${date}'`);
    }

    if (conditions.length > 0) {
      whereClause += ` WHERE ${conditions[0]}`;
    }
    const result = await postgresRepository.getOrders(whereClause);

    res.send(result.rows.map(_mapOrdersArrayToObject));

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getOrderById(req, res) {
  const { id } = req.params;
  try {

    let  whereClause = ` WHERE o.id = '${id}'`;
    const result = await postgresRepository.getOrderByIdPG(whereClause);

    res.send(_mapOrdersArrayToObject(result.rows[0]));

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