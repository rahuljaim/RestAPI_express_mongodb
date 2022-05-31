const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add an email"],
    },
    email: {
      type: String,
      require: [true, "Please add a password"],
    },
    password: {
      type: String,
      require: [true, "Please add a name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
