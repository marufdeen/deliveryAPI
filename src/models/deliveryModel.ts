import  mongoose  from  'mongoose';

const deliveryDetail = new mongoose.Schema({
  fullName: String,
  amount: Number,
  pickUpPhoneNumber: Number,
  dropOffPhoneNumber: Number,
  description: String,
  refNumber: String,
  recipientName: String,
  recipientPhoneNumber: String,
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
  },
  createdAt: String,
  updatedAt: String, 
});
export default mongoose.model("Delivery", deliveryDetail);
