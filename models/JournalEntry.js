import mongoose from "mongoose";
const JournalEntrySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    maxlength: 200,
  },
  date: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

JournalEntrySchema.index({ userId: 1, date: 1 }, { unique: true });

export default mongoose.model("JournalEntry", JournalEntrySchema);
