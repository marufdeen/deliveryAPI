import  mongoose  from  'mongoose';

const deliveryDetail = new mongoose.Schema({
  fullName: String,
  amount: Number,
  pickUpPhoneNumber: String,
  dropOffPhoneNumber: String,
  description: String,
  refNumber: String,
  recipientName: String,
  monetary: String,
  routeStatus: String,
  deliveryStatus: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending"
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "success"],
    default: "pending"
  }
}, { timestamps: true });
export default mongoose.model("Delivery", deliveryDetail);
