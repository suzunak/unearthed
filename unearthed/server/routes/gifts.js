import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import giftData from '../data/gifts.js';
import GiftController from '../contollers/gifts.js';

// naming convention __ to indicate that this is not meant to be overwritten or redefined
// import.meta.url --> special property that contains the URL to the current module file
const __filename = fileURLToPath(import.meta.url); //stores results
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', GiftController.getGifts);

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'));
})

export default router;
