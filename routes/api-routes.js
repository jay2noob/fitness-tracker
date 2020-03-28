const Exercise = require("../models/exercise");
const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
  console.log(req.body);

  Exercise.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  console.log(req.body);

  Exercise.create({
    exercises: []
  })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Exercise.update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Exercise.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;