import  express  from "express";
const router = express.Router();
import  {createEntry,getTodayEntry,getHistory,} from "../controllers/journalController.js";

// POST /api/journal
router.post("/", createEntry);

// GET /api/journal/today/:userId
router.get("/today/:userId", getTodayEntry);

// GET /api/journal/history/:userId
router.get("/history/:userId", getHistory);

 export default router;
