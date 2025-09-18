exports.getPosts = (req, res, next) => {
  res.status(200).json({ title: "this is a response" });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  res
    .status(201)
    .json({
      message: "Post created Successfuly",
      content: content,
      title: title,
    });
};
