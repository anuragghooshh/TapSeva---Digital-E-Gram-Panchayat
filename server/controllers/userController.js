const User = require("../models/user");

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude the password field
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { getUserDetails };
