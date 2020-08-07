const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day: {
      type: Date,
      default: () => new Date()
  },
  exercises: [
      {
          type: {
              type: String,
              trim: true,
              required: "Choose an exercise type"
          },
          name: {
              type: String,
              trim: true,
              required: "Enter a name for your workout"
          },
          duration: {
              type: Number,
              required: "Specify a duration for your workout"
          },
          weight: {
              type: Number
          },
          reps: {
              type: Number
          },
          sets: {
              type: Number
          },
          distance: {
              type: Number
          }
      }
  ]
  });

// const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
