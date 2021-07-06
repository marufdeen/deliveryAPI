import  mongoose  from  'mongoose';

const orderDetail = new mongoose.Schema({
  fullName: String,
  amount: Number,
  pickUpPhoneNumber: Number,
  dropOffPhoneNumber: Number,
  description: Number,
  refNumber: String,
  recipientName: String,
  routeStatus: String, 
  createdAt: String,
  updatedAt: String,
});

export default mongoose.model("Order", orderDetail);
