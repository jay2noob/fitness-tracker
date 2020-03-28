const Workout = require("../models/workout");
const router = require("express").Router();
const path = require("path");

router.get("/api/workouts", (req, res) => {
  console.log(req.body);

  Workout.find({})
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  console.log(req.body);

  Workout.create({
    exercises: []
  })
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;