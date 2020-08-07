const router = require("express").Router();
const Workout = require("../models/workout.js");

//sort by date in decending order
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkoutLog => {
            res.json(dbWorkoutLog);
        })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
Workout.create(body)
.then(dbWorkoutLog => {
    res.json(dbWorkoutLog);
})
.catch(err => {
    res.status(400).json(err);
});
});

module.exports = router;