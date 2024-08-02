const User = require("../models/user");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "-password"
    ); // Exclude password field
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("Provoked")
    const { id } = req.params;

    console.log(id);

    await User.findByIdAndDelete(id);

    const newUsers = await User.find().select("-password");
    res.json(newUsers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getUserCounts = async (req, res) => {
  try {
    const counts = await User.aggregate([
      { $group: { _id: "$role", count: { $sum: 1 } } },
    ]);

    const formattedCounts = counts.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {});

    res.json(formattedCounts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
