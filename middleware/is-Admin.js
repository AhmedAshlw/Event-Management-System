const User = require("../models/user");

const isAdmin = async (req, res, next) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized: Please sign in" });
    }

    const user = await User.findById(req.session.user._id);

    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    next();
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { isAdmin };
