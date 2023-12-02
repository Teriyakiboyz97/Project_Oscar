//lib//
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie.js");

//GET//
router.get("/", (req, res, next) => {
  Movie.find()
    .then(function (movies) {
      res.json(movies);
    })
    .catch(function (err) {
      console.log(err);
    });
});

//GETBYID//
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(function (movies) {
      res.json(movies);
    })
    .catch(function (err) {
      console.log(err);
    });
});

//GETBYMOVIENAME//
router.get("/Name/:key", async (req, res) => {
  console.log(req.params.key)
  let data = await Movie.find(
    {
      "$or":[
        { "mov_name": { $regex: req.params.key } },
      ]
    }
  );
  Movie.findById(req.params.id);
  res.json(data);
});

//GETBYMOVIEYEAR//
router.get("/Year/:key", async (req, res) => {
  console.log(req.params.key)
  let data = await Movie.find(
    {
      "$or":[
        { "mov_year": { $regex: req.params.key } },
      ]
    }
  );
  Movie.findById(req.params.id);
  res.json(data);
});


//GETBYOSCAR_NO//
router.get("/Oscar_no/:key", async (req, res) => {
  console.log(req.params.key)
  let data = await Movie.find(
    {
      "$or":[
        { "mov_Oscar_no": { $regex: req.params.key } }
      ]
    }
  );
  Movie.findById(req.params.id);
  res.json(data);
});

//POST//
router.post("/", (req, res, next) => {
  Movie.create(req.body)
    .then(function (post) {
      res.json(post);
    })
    .catch(function (err) {
      console.log(err);
    });
});


//PUT//
router.put("/:id", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(function (post) {
      res.json(post);
    })
    .catch(function (err) {
      console.log(err);
    });
});


//DELETE//
router.delete("/:id", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(function (post) {
      res.json(post);
    })
    .catch(function (err) {
      console.log(err);
    });
});

//DELETEBYYEAR//
router.delete("/del/:year", async (req, res) => {
  console.log(req.params.year)
  let data = await Movie.findOneAndDelete(
    {
      "$or":[
        { "mov_year": { $regex: req.params.year } }
      ]
    }
  );
  Movie.findById(req.params.id);
  res.json(data);
});

module.exports = router;
