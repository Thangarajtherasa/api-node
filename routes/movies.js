import express from 'express';

const router =express.Router();

// /movie/movies
// get - for retrieving data
router.get('/',(req,res) => {
   res.send("Get all movies lists");
});

//c- for creating movies  
router.post ('/', (req,res) => {
   res.send("Create a movie");
});

//u - for updating movie
router.put('/:id', (req,res) => {
   res.send("Update a movie");   
});

//d - for deleting movie
router.delete( '/:id', (req,res)  => {
   res.send("Delete a movie");
});

export default router;
