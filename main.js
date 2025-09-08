import express from 'express';
import movieRoutes from './routes/movies.js';
import connectDB from './lib/db.js';

const app = express();
const PORT = 3000;

// connect db
connectDB();

app.get('/',(req,res) => {
    res.json({msg: "Hello Students!!"});
});

// CRUD  functionality of movies
// CLIENT -> MIDDLEWARE -> SERVER 
app.use('/movies',movieRoutes);
 
app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
});


// DRY principle
// KISS principle