const Application = require("../models/application");
const Service = require("../models/service");

exports.createApplication = async (req, res) => {
  const { message, currentOccupation, serviceId, serviceName } = req.body;
  const userId = req.user.id;

  try {
    const application = new Application({
      userId: userId,
      serviceId: serviceId,
      serviceName: serviceName,
      message: message,
      currentOccupation: currentOccupation,
    });

    await application.save();
    await Service.findOneAndUpdate(
      { _id: serviceId },
      { $inc: { applicants: 1 } }
    );

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: "Error creating application" });
  }
};

exports.getUserApplications = async (req, res) => {
  const userId = req.user.id;
  const { status, sortBy, order = "asc" } = req.query;


  let query = {};

  query.userId = userId;

  if (status) {
    query.status = status;
  }

  // Build sort object
  let sort = {};
  if (sortBy) {
    sort[sortBy] = order === "asc" ? 1 : -1;
  }

  try {
    const applications = await Application.find(query).sort(sort);
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Error getting applications" });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const { status, sortBy, order = "asc" } = req.query;

    let query = {};
    if (status) {
      query.status = status;
    }

    // Build sort object
    let sort = {};
    if (sortBy) {
      sort[sortBy] = order === "asc" ? 1 : -1;
    }

    const applications = await Application.find(query).sort(sort);
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Error getting applications" });
  }
};

exports.updateApplication = async (req, res) => {
  const { applicationId, status } = req.body;

  try {
    await Application.findOneAndUpdate(
      { _id: applicationId },
      { status: status }
    );

    res.json({ message: "Application updated" });
  } catch (error) {
    res.status(500).json({ error: "Error updating application" });
  }
};

exports.getApplicationStats = async (req, res) => {
  try {
    const totalApplications = await Application.countDocuments();
    const totalApproved = await Application.countDocuments({
      status: "Approved",
    });
    const totalRejected = await Application.countDocuments({
      status: "Rejected",
    });
    const totalPending = await Application.countDocuments({
      status: "Pending",
    });

    res.json({
      totalApplications,
      totalApproved,
      totalRejected,
      totalPending,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    const id = req.params.id;
    const application = await Application.findById(id).populate(
      "userId",
      "_id name sex address aadhaarNo dob maritalStatus"
    );

    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }
    res.json(application);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting application" });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedApplication = await Application.findByIdAndDelete(id);

    if (!deletedApplication) {
      return res.status(404).json({ error: "Application not found" });
    }

    const serviceId = deletedApplication.serviceId;

    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { $inc: { applicants: -1 } },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json({ message: "Application deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting application" });
  }
};
