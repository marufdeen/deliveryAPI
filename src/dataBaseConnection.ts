import  mongoose from 'mongoose';
//Database Connection
mongoose.connect('mongodb://localhost/deliveryAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

export default mongoose;