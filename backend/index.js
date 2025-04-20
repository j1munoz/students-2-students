import express from "express";
import cors from "cors";
import pool from "./db.js";
import bcrypt from "bcrypt";

const app = express();

// For hashing passwords
const salt = bcrypt.genSaltSync(10);
// const hash = await bcrypt.hash(password, salt);
// const isMatch = await bcrypt.compare(password, hash);

app.use(cors());
app.use(express.json());

//Routes
// User Routes
// Create a new user
app.post("/users", async (req, res) => {
  const { email, password, firstName, lastName, credits, major } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await pool.query(
      "INSERT INTO users (email, password, first_name, last_name, credits, major) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [email, hashedPassword, firstName, lastName, credits, major],
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a user's information
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query(
      "SELECT first_name, last_name, credits, major FROM users WHERE id = $1",
      [id],
    );
    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post routes
// Create a new post
app.post("/post", async (req, res) => {
  const { title, pitch, categories } = req.body;
  try {
    const newPost = await pool.query(
      "INSERT INTO posts (title, pitch, categories) VALUES ($1, $2, $3) RETURNING *",
      [title, pitch, categories],
    );
    res.status(201).json(newPost.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create relationship between user and post
app.post("/posts", async (req, res) => {
  const { userId, postId } = req.body;
  try {
    const newRelationship = await pool.query(
      "INSERT INTO posts (user_id, post_id) VALUES ($1, $2) RETURNING *",
      [userId, postId],
    );
    res.status(201).json(newRelationship.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
