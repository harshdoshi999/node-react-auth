const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/database");

const router = express.Router();

// Signup Route
router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run(
    `INSERT INTO users (email, password) VALUES (?, ?)`,
    [email, hashedPassword],
    function (err) {
      if (err) return res.status(500).json({ message: "Error creating user" });
      res.json({ message: "User created successfully" });
    }
  );
});

// Login Route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
    if (err || !user)
      return res.status(400).json({ message: "Invalid email or password" });

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
    res.json({ token });
  });
});

// Forgot Password
router.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  const resetToken = jwt.sign({ email }, "reset-secret", { expiresIn: "15m" });

  db.run(
    `UPDATE users SET reset_token = ? WHERE email = ?`,
    [resetToken, email],
    function (err) {
      if (err) return res.status(500).json({ message: "Error updating token" });
      console.log(
        `Reset link: http://localhost:3000/reset-password/${resetToken}`
      );
      res.json({ message: "Reset link sent to your email" });
    }
  );
});

// Reset Password
router.post("/reset-password", (req, res) => {
  const { token, newPassword } = req.body;

  jwt.verify(token, "reset-secret", (err, decoded) => {
    if (err)
      return res.status(400).json({ message: "Invalid or expired token" });

    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    db.run(
      `UPDATE users SET password = ?, reset_token = NULL WHERE email = ?`,
      [hashedPassword, decoded.email],
      function (err) {
        if (err)
          return res.status(500).json({ message: "Error resetting password" });
        res.json({ message: "Password reset successfully" });
      }
    );
  });
});

module.exports = router;
