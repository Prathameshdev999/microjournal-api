import  JournalEntry  from "../models/JournalEntry.js";
import  getTodayDate  from "../utils/dateUtils.js";

//Create or update today's entry
const createEntry = async (req, res) => {
  const { userId, text } = req.body;
  const date = getTodayDate();

  try {
    const entry = await JournalEntry.findOneAndUpdate(
      { userId, date },
      { text },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ message: "Entry saved", entry });
  } catch (err) {
    res.status(500).json({ message: "Error saving entry", error: err.message });
  }
};

//today's entry
const getTodayEntry = async (req, res) => {
  const { userId } = req.params;
  const date = getTodayDate();

  try {
    const entry = await JournalEntry.findOne({ userId, date });

    if (!entry) {
      return res.status(404).json({ message: "No entry found for today" });
    }

    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: "Error fetching entry", error: err.message });
  }
};

//history
const getHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const entries = await JournalEntry.find({ userId }).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: "Error fetching history", error: err.message });
  }
};

export {
  createEntry,
  getTodayEntry,
  getHistory,
};
