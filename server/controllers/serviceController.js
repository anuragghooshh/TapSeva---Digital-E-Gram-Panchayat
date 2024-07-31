const service = require("../models/service");

exports.getServices = async (req, res) => {
  try {
    const services = await service.find();
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


exports.createService = async (req, res) => {
  try{
    const {service_name, description, category, DownloadableForm}  = req.body;

    const newService = new service({
      service_name : service_name,
      description : description,
      category : category,
      DownloadableForm : DownloadableForm ? DownloadableForm : "NA",
      featured : false,
      applicants : 0
    });

    await newService.save(); 

    const services = await service.find();
    res.json(services);

  }catch(err){
    console.error("Error creating service:", err);
    res.status(500).json({message: "Server Error"});
  }
}