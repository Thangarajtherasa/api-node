import { model, Schema } from "mongoose";

// write the schema
const MovieSchema = new Schema ({
    title : {
        type: String,
        required: true,
        unique: true
    },
    description : {
        type: String,
        required: true
    }
});

// create the model
const Movie = model("Movie",MovieSchema);

export default Movie;

