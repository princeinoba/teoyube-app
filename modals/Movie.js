import mongoose from "mongoose";
const { Schema } = mongoose;

const movieSchema = new Schema({
  imdbID: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
