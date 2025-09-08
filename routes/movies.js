import express from 'express';
import {
    MovieIndex,
    MovieCreate,
    MovieUpdate,
    MovieDelete
} from '../controllers/movies.con.js';

const router = express.Router();

// /movie/movies
// get - for retrieving data
router.get('/', MovieIndex);

//c- for creating movies  
router.post ('/', MovieCreate);

//u - for updating movie
router.put('/:id', MovieUpdate );

//d - for deleting movie
router.delete( '/:id', MovieDelete);

export default router;
