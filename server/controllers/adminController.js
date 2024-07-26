const User = require("../models/user");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: "admin" } }).select(
      "-password"
    ); // Exclude password field
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const user = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    }).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ msg: "User deleted" });
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
