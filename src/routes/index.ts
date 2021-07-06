import  express from 'express';  
import deliveryController from '../controllers/deliveryController'
const router = express.Router();  

router.get("/", (req, res) => res.send("Welcome to deliveryAPI.")); 
router.post('/deliveryprice', deliveryController.calculatePrice)
// User Routes
//router.use(userRoutes)

// Post Routes
//router.use(postRoutes);

// Comment Routes
//router.use(commentRoutes); 

export default router;
