import  express  from 'express'; 
import  routes  from './routes/index'; 
import cors from 'cors';

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use(cors());
 

// Routes for the end-points
app.use('/api', routes);

export default app;
