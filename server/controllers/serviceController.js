const service = require("../models/service");

exports.getServices = async (req, res) => {
  try {
    const { featured, category, DownloadableForm } = req.query;

    const query = {};

    const services = await service.find(query);
    res.json(services);
  } catch (err) {
    console.error("Error getting services:", err);
  }
};

exports.getServicesStats = async (req, res) => {
  try {
    const categories = await service.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          category: "$_id",
          count: 1,
          _id: 0,
        },
      },
    ]);

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
