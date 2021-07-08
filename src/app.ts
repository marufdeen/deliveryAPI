import  express  from 'express'; 
import  routes  from './routes/index'; 
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
// parse application/json
app.use(express.json({limit: "10mb"}));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false, limit: "10mb" }));
 
app.use(morgan("dev"))
// Routes for the end-points
app.use('/api', routes);

export default app;
