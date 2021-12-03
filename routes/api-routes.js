import { Router } from "express";
import mongoose from "mongoose";
import { Movie, MovieList } from "../modals/index.js";
import {
  formatBulkMoviesInsert,
  formatMovieListInsert,
} from "../utils/formatter.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await MovieList.find({}).populate("movies");
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const result = await MovieList.findOne({ _id: id }).populate("movies");
    if (!result || result.length === 0) {
      res.status(404).send({ data: "Movie list not found! " });
    } else {
      res.status(200).send({ data: result });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    // expected req.body includes all movie info
    // under movies property
    const bulkMovieResult = await Movie.bulkWrite(
      formatBulkMoviesInsert(req.body.movies)
    );
    // Stripping movie info to insert as list
    const movieListResult = await MovieList.create(
      formatMovieListInsert(req.body)
    );
    await movieListResult.populate("movies").execPopulate();
    res.status(201).send({
      data: { movieList: movieListResult, bulkMovieInsert: bulkMovieResult },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

export default router;
