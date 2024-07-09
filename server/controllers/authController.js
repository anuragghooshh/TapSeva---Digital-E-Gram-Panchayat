// const admin = require("../config/firebase");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const admin = require("../config/firebase-config");

const registerUser = async (req, res) => {
  const {
    email,
    name,
    dob,
    address,
    maritalStatus,
    aadhaar,
    password,
    phone,
  } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      email: email,
      name: name,
      dob: dob,
      address: address,
      aadhaarNo: aadhaar,
      phone: phone,
      maritalStatus: maritalStatus,
      password: password,
      role: "villager",
    });

    console.log(user);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// exports.loginUser = async (req, res) => {
//   const { uid } = req.body;
//   try {
//     const user = await User.findOne({ uid });
//     if (!user) {
//       return res.status(400).json({ msg: 'User not found' });
//     }

//     res.json({ user });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };

const googleAuth = async (req, res) => {
  console.log("Backend Started");
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { name, email } = decodedToken;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, picture });
      await user.save();
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//Test
// const googleAuth = async (req, res) =>{
//   res.send({
//     status : "Backend Working"
//   });
//   console.log("Backend Working")
// }

module.exports = { registerUser, googleAuth };
