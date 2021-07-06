import { Request, Response } from 'express'; 
import orderModel from '../models/orderModel';
import deliveryPriceCalculator from "./deliveryPriceCalculator";
const refNumber = () => {
    let ref = 'dotEx';
    for (let i = 1; i <= 8; i++) {
      ref += Math.floor(Math.random() * 10);
    }
    return ref;
  };

  class delivery {
            /**
         * @author Maruf
         * @method calculatePrice
         * @desc Feature calculate the amount user pay for delivery service
         * @param {object} req Request object
         * @param {object} res Response object
         * @returns {object} Json data
         */ 
        static async calculatePrice (req: Request, res: Response): Promise<any>{
            const { pickUpAddress, dropOffAddress, deliveryMethod } = req.body; 
            const deliveryOutcome : any = await deliveryPriceCalculator(pickUpAddress, dropOffAddress, deliveryMethod);
            if (deliveryOutcome) { 
                return res.status(200).json({
                    deliveryOutcome: deliveryOutcome
                })
            }
            else{
                return res.status(400).json({
                    error: 'Something went wrong'
                })
            }
          }
          static async saveOrderDetails (req: Request, res: Response): Promise<any>{
            const { fullName, pickUpPhoneNumber, dropOffPhoneNumber, description, recipientName, routeStatus, pickUpAddress, dropOffAddress, deliveryMethod   } = req.body;
            const deliveryOutcome = await deliveryPriceCalculator(pickUpAddress, dropOffAddress, deliveryMethod);
            const orderDetails = new orderModel({ 
                fullName, amount: deliveryOutcome.amountToPay , pickUpPhoneNumber, refNumber: refNumber(), dropOffPhoneNumber, description, recipientName, routeStatus
             }, );
             const createOrder =  await orderDetails.save()
            if (createOrder) {
                return res.status(200).json({ createOrder })
            }
            else{
                return res.status(400).json({
                    error: 'Something went wrong'
                })
            }
          }
        
  }

  export default delivery; 