import Movie from "../models/movie.model.js";

export const MovieIndex = (req,res) => {
   res.send("Get all movies lists");
};

export const MovieCreate = async (req,res) => {
   // id,title,description
   // validate your data
   const newMovie = new Movie ({
      title : req.body.title,
      description : req.body.description
   });

   try{
      const movie = await newMovie.save();      // save to the db
      return res.status(201).json(movie);
   } catch (error) {
      return res.status(400).json({message: error.message});
   }

};

export const MovieUpdate = (req,res) => {
   res.send("Update a movie");   
};

export const MovieDelete = (req,res)  => {
   res.send("Delete a movie");
};