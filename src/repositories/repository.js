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
async function getURLbyID(id) {
	return connection.query(
        `SELECT * FROM urls WHERE urls.id=$1;`
        , [id]
    ); 
}

async function getByShortUrl(shortUrl) {
	return connection.query(
        `SELECT * FROM urls WHERE short_url= $1;`
        , [shortUrl]
    );
}

async function updateViewCount(view_count,shortUrl) {
	return connection.query(
        `UPDATE urls SET view_count = $1 WHERE short_url=$2;`,[view_count,shortUrl]
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
    getByShortUrl,
    updateViewCount,
    deleteById,
    getUrlsByUser
}