import  express from 'express';  
import deliveryController from '../controllers/deliveryController'
const router = express.Router();  

router.get("/", (req: express.Request, res: express.Response) => res.send("Welcome to deliveryAPI.")); 
router.post('/deliveryprice', deliveryController.calculatePrice);
router.post('/save', deliveryController.saveOrderDetails)

export default router;
