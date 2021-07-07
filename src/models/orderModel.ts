import  mongoose  from  'mongoose';

const orderDetail = new mongoose.Schema({
  fullName: String,
  amount: Number,
  pickUpPhoneNumber: Number,
  dropOffPhoneNumber: Number,
  description: Number,
  refNumber: String,
  recipientName: String,
  recipientPhoneNumber: String,
  monetary: String,
  routeStatus: String,
  status: String,
  createdAt: String,
  updatedAt: String,
  recipientPhoneNo: String
});

export default mongoose.model("Order", orderDetail);
