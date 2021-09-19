const express = require("express");
const tagsRouter = express.Router();
const { getAllTags } = require("../db");

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

module.exports = tagsRouter;
