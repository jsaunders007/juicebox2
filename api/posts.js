const express = require("express");
const postsRouter = express.Router();
const { getAllPosts } = require("../db");

postsRouter.get("/", async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts,
  });
});

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");
  res.send({
    post,
  });
  next();
});

module.exports = postsRouter;
