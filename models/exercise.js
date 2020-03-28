const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
       {
        type: {
          type: String,
          trim: true,
          required: "Enter which type of exercise"
        },
    name: {
          type: String,
          trim: true,
          required: "Enter an exercise"
        },
    duration: {
          type: Number,
          required: "Enter duration in minutes"
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

    }]
  },

  {
    toJSON: {
      virtuals: true
    }
  });

fitnessSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Exercise = mongoose.model("Exercise", fitnessSchema);

module.exports = Exercise;