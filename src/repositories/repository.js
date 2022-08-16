import connection from "../dbStrategy/postgres.js";

async function insertCake(cakeInfo) {
	return connection.query(
        `INSERT INTO cakes (name, price, image,description) VALUES ($1, $2, $3, $4);`, cakeInfo
    );
}
async function insertClient(clientInfo) {
	return connection.query(
        `INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3);`, clientInfo
    );
}
async function insertOrder(orderInfo) {
	return connection.query(
        `INSERT INTO orders (client_id, cake_id, quantity,total_price) VALUES ($1, $2, $3 , $4);`, orderInfo
    );
}
async function getOrders(whereClause) {
    
	return connection.query(
        {
          text: `
          SELECT o.client_id,c.name,c.address,c.phone,o.cake_id,ca.name as cake_name,ca.price,ca.description,
          ca.image,o.id as order_id,o.created_at,o.quantity,o.total_price from (orders o join clients c ON c.id = o.client_id) 
          join cakes ca on o.cake_id=ca.id 
          ${whereClause}
        `,
          rowMode: 'array'
        }
    );
}

async function getOrderByIdPG(whereClause) {
    
	return connection.query(
        {
          text: `
          SELECT o.client_id,c.name,c.address,c.phone,o.cake_id,ca.name as cake_name,ca.price,ca.description,
          ca.image,o.id as order_id,o.created_at,o.quantity,o.total_price from (orders o join clients c ON c.id = o.client_id) 
          join cakes ca on o.cake_id=ca.id 
          ${whereClause}
        `,
          rowMode: 'array'
        }
    );
}

async function deleteById(url_id) {
	return connection.query(
        `DELETE FROM urls WHERE urls.id=$1;`
        , [url_id]
      );
}

async function getUrlsByUser(user_id) {
	return connection.query(
        `SELECT id,short_url as "shortUrl",url,view_count as "visitCount" FROM urls WHERE urls.user_id=$1;`
        , [user_id]
    );
}


export const postgresRepository = {
	insertCake,
    insertClient,
    insertOrder,
    getOrders,
    getOrderByIdPG,
    getUrlsByUser
}