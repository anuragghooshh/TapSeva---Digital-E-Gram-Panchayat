const Application = require("../models/application");
const Service = require("../models/service");
const User = require("../models/user");

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
  if (status) {
    query.status = status;
    query.userId = userId;
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
    const application = await Application.findOneAndUpdate(
      { _id: applicationId },
      { status: status }
    );

    if (application) {
      const allApplications = await Application.find();
      res.json(allApplications);
    }
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
    console.log(application);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting application" });
  }
};
