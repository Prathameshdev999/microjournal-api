import  express  from "express";
import  dotenv  from "dotenv";
import  connectDB  from "./config/db.js";
import  journalRoutes  from "./routes/journalRoutes.js";


dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/journal", journalRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
