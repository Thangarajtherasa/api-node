export const MovieIndex = (req,res) => {
   res.send("Get all movies lists");
};

export const MovieCreate = (req,res) => {
   // id,title,description
   console.log(req.body);

   return res.json(req.body);
   // create the movie info 
};

export const MovieUpdate = (req,res) => {
   res.send("Update a movie");   
};

export const MovieDelete = (req,res)  => {
   res.send("Delete a movie");
};