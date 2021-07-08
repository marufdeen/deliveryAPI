import  express from 'express';  
import deliveryController from '../controllers/deliveryController';
import validate from '../middlewares/deliveryCredentials';
const router = express.Router();  

router.get("/", (req: express.Request, res: express.Response) => res.send("Welcome to deliveryAPI."));
router.post('/deliveryprice', deliveryController.calculatePrice);
router.post('/save', validate, deliveryController.saveDeliveryDetails);
router.get('/deliveries/', deliveryController.getAllDeliveries);
router.get('/deliveries/:refNumber', deliveryController.getSingleDelivery);
router.patch('/progress/:refNumber', deliveryController.deliveryInProgress);
router.patch('/completed/:refNumber', deliveryController.deliveryCompleted);
router.post("/webhook", deliveryController.handleWebhook)

export default router;
