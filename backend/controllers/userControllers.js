const asyncHandler = require("exress-async-handler");

const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body;

  res.json({
    name,
    email,
  });
});

module.exports = registerUser;
