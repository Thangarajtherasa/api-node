import { model, Schema } from "mongoose";

// write the schema
const MovieSchema = new Schema ({
    title : String,
    description : String
});

// create the model
const Movie = model("Movie",MovieSchema);

export default Movie;

