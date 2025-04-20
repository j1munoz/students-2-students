import express from "express";
import cors from "cors";
// import pool from './db.js';
// import bcrypt from 'bcrypt';

const app = express();

// For hashing passwords
// const salt = bcrypt.genSaltSync(10);
// const hash = await bcrypt.hash(password, salt);
// const isMatch = await bcrypt.compare(password, hash);

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
