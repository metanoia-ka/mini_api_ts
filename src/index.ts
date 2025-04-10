import express from "express";
//import cors from "cors"; // Uncomment if you need to use CORS
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
//app.use(cors);
app.use(express.json());

// Route de Test
app.get("/", (req, res) => {
  res.send("🚀 API TypeScript avec Express est en ligne !");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});