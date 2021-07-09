import { Request, Response } from "express"; 
import deliveryModel from "../models/deliveryModel";
import deliveryPriceCalculator from "../lib/deliveryPriceCalculator";
import { createCheckOutLink } from "../lib/flutterWaveChecOut";
import crypto from "crypto";

class delivery {
  /**
   * @author Maruf
   * @method calculatePrice
   * @desc Feature calculate the amount user pay for delivery service
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async calculatePrice(req: Request, res: Response): Promise<any> {
    console.log(req.body);
    const { pickUpAddress, dropOffAddress, deliveryMethod } = req.body;
    const deliveryOutcome: any =  deliveryPriceCalculator( pickUpAddress, dropOffAddress, deliveryMethod );
    if (deliveryOutcome) {
      return res.status(200).json({
        deliveryOutcome
      });
    } else {
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
  }

  /**
   * @author Maruf
   * @method saveDeliveryDetails
   * @desc Feature store order details into database and generate checkout link
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async saveDeliveryDetails(req: Request, res: Response): Promise<any> {
    console.log(req.body);
    const { fullName, pickUpPhoneNumber,  dropOffPhoneNumber, description, recipientName, routeStatus, monetary, pickUpAddress, dropOffAddress, deliveryMethod, recipientPhoneNumber } = req.body;

    const refNumber = crypto.randomBytes(6).toString("hex");

    const deliveryOutcome = await deliveryPriceCalculator( pickUpAddress, dropOffAddress, deliveryMethod );

    // @ts-ignore
    const orderDetails = await deliveryModel.create({ fullName,  amount: deliveryOutcome.amountToPay, pickUpPhoneNumber, dropOffPhoneNumber ,refNumber, description, recipientName, routeStatus, monetary, status: 'pending', recipientPhoneNumber
    });

    const checkoutLink = await createCheckOutLink( refNumber, deliveryOutcome.amountToPay, recipientPhoneNumber, recipientName);  
    if (orderDetails) {
      return res.status(200).json(Object.assign({orderDetails, checkoutLink}));
    } else {
        return res.status(400).json({
        error: "Something went wrong",
      });
    }
  }
/*    
*/
  /**
   * @author Maruf
   * @method getAllDeliveries
   * @desc Feature fetch order details from the database
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async getAllDeliveries(req: Request, res: Response) {
    const {status} = req.query;
    let allOrders;
    if (status) allOrders = await deliveryModel.find({status});
     else{
        allOrders = await deliveryModel.find()
     }
    if (allOrders.length > 0) {
      return res.send(allOrders);
    }
    return res.send('No delivery order match your search!... 😊');
  }

  /**
   * @author Maruf
   * @method getSingleDelivery
   * @desc Feature fetch  a sngle order details from the database with respect to it's refrence number
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
   static async getSingleDelivery(req: Request, res: Response) {
    const refNumber = req.params.refNumber;
    const deliveryFound = await deliveryModel.find({refNumber});
    if (deliveryFound) { 
      return res.send({
        deliveryFound, 
      });
    }
    return res.send('Order not found!');
  }

  /**
   * @author Maruf
   * @method POST: handleWebhook
   * @desc Feature Integrate API endpoint to flutterwave webhook to cionfirm payment.
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async handleWebhook(req: Request, res: Response){
    //console.log(req.body);

    const {status, txRef} = req.body;/* 

    const orderDetails = await deliveryModel.findOne({refNumber: txRef})

    console.log(orderDetails); */

    if(status === "successful"){
      await deliveryModel.updateOne({refNumber: txRef}, {paymentStatus: "success"})
    }
    return res.sendStatus(200)
  }

  /**
   * @author Maruf
   * @method PATCH: inProgress
   * @desc Feature set order status to in-progress.
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */

  static async deliveryInProgress(req: Request, res: Response){ 
    const refNumber = req.params.refNumber; 
    const deliveryFound = await deliveryModel.findOne({refNumber})

    //console.log(deliveryFound); 
    if (deliveryFound) {
      await deliveryModel.updateOne({refNumber}, {deliveryStatus: "in-progress"});
      return res.send({
        message: 'Order is now in progress',
        deliveryFound, 
      });
    }
    return res.send('Order not found!');
  }

  /**
   * @author Maruf
   * @method PATCH: inProgress
   * @desc Feature set order status to in-progress.
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */

  static async deliveryCompleted(req: Request, res: Response){ 
    const refNumber = req.params.refNumber; 
    const deliveryFound = await deliveryModel.findOne({refNumber})

    //console.log(deliveryFound);
    if (deliveryFound) {
      await deliveryModel.updateOne({refNumber}, {deliveryStatus: "completed"});
      return res.send({
        message: 'Order is now in completed',
        deliveryFound, 
      });
    }
    return res.send('Order not found!');
  }

}

export default delivery;
