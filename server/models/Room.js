import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
    enum: ["Single Suite Room", "Double Suite Room", "Single executive Room", "Double executive Room"],
  },
  bookings: [
    {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      resid: {
        type: String,
        //required: true,
      },
      user: {
        type: String,
      },
    },
  ],
});

export default mongoose.model("Room", RoomSchema);
