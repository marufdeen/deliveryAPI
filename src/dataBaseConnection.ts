import  mongoose from 'mongoose';
import env from 'dotenv';
env.config();
//Database Connection  mongodb://localhost/deliveryAPI
mongoose.connect( 'mongodb+srv://root:hacker1993@cluster0.a44xf.mongodb.net/deliveryAPI?retryWrites=true&w=majority' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

export default mongoose;