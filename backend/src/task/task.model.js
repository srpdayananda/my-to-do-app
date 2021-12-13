import mongoose, { ObjectId } from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
});
export default mongoose.model("Task", taskSchema);
