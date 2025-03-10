const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

noteSchema.index({ title: "text", content: "text" }); // Enable text search on title and content

module.exports = mongoose.model("Note", noteSchema);