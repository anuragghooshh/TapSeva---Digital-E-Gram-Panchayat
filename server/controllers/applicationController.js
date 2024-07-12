const Application = require("../models/application");

exports.createApplication = async (req, res) => {
  const { message, currentOccupation, serviceId, serviceName } = req.body;
  const userId = req.user.id;

  try {
    const application = new Application({ 
        userId : userId,
        serviceId : serviceId,
        serviceName : serviceName,
        message : message,
        currentOccupation : currentOccupation,
     });

    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: "Error creating application" });
  }
};

exports.getUserApplications = async (req, res) => {
  const userId = req.user.id;

  try {
    const applications = await Application.find({ userId: userId });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Error getting applications" });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Error getting applications" });
  }
};

exports.updateApplication = async (req, res) => {
  const { id, status } = req.body;

  try {
    const application = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: "Error updating application" });
  }
};
