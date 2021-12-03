import mongoose from "mongoose";
import { Movie, MovieList } from "../modals/index.js";

import { movies, lists } from "./seed-data.js";

async function runSeed() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/top5db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    const insertedMovies = await Movie.insertMany(movies);
    console.log(`${insertedMovies.length} movies inserted!`);
    const insertedLists = await MovieList.insertMany(lists);
    console.log(`${insertedLists.length} lists inserted!`);

    const docs = await MovieList.find({}).populate("movies");
    console.log("All documents: ", docs);
  } catch (err) {
    console.error(err);
  }
  mongoose.connection.close();
}

runSeed();
