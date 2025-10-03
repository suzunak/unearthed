import { pool } from '../config/database.js';

const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (err){
        res.status(409).json( {error: err.message} ); //409 -> req conflicts with server state
        // e.g. there are competing requests trying to change the same data, attempting to create a resource that already exists
    };
};

export default {
    getGifts
}