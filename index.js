const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Collage")
  .then(() => {
    console.log("connected with mongoDB..");
  })
  .catch((err) => {
    console.log("errr", err);
  });

const student = new mongoose.Schema({
  name: String,
  age: Number,
  task: Boolean,
});

const Student = new mongoose.model("Student", student);

// const add = async () => {
//   const data = new Student({
//     name: "gullu",
//     age: 23,
//     task: true,
//   });
//   await data.save();
// };

// add();

const add = async () => {
  //   const data = await Student.create({ name: "AK", age: 19, task: true });
  const data = await Student.find({ age: { $gt: 12 } });
  console.log(data);
};
add();
