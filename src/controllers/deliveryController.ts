import { Request, Response } from "express"; 
import orderModel from "../models/orderModel";
import deliveryPriceCalculator from "./deliveryPriceCalculator";
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
    const { pickUpAddress, dropOffAddress, deliveryMethod } = req.body;
    const deliveryOutcome: any = deliveryPriceCalculator( pickUpAddress, dropOffAddress, deliveryMethod );
    if (deliveryOutcome) {
      return res.status(200).json({
        deliveryOutcome,
      });
    } else {
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
  }

  /**
   * @author Maruf
   * @method saveOrderDetails
   * @desc Feature store order details into database and generate checkout link
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async saveOrderDetails(req: Request, res: Response): Promise<any> {
    const { fullName, pickUpPhoneNumber,  dropOffPhoneNumber, description, recipientName, routeStatus, monetary, pickUpAddress, dropOffAddress, deliveryMethod, recipientPhoneNumber } = req.body;

    const refNumber = crypto.randomBytes(6).toString("hex");

    const deliveryOutcome = await deliveryPriceCalculator( pickUpAddress, dropOffAddress, deliveryMethod );

    // @ts-ignore
    const orderDetails = await orderModel.create({ fullName,  amount: deliveryOutcome.amountToPay, pickUpPhoneNumber, refNumber, dropOffPhoneNumber, description, recipientName, routeStatus, monetary, status: 'pending', recipientPhoneNumber
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

  /**
   * @author Maruf
   * @method getAllOrders
   * @desc Feature fetch order details from the database
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async getAllOrders(req: Request, res: Response) {
    const {status} = req.query;
    let allOrders;
    if (status) allOrders = await orderModel.find({status});
     else{
        allOrders = await orderModel.find()
     }
    if (allOrders.length > 0) {
      return res.send(allOrders);
    }
    return res.send('No delivery order match your search!... 😊');
  }

  /**
   * @author Maruf
   * @method getSingleOrder
   * @desc Feature fetch  a sngle order details from the database with respect to it's refrence number
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
   static async getSingleOrder(req: Request, res: Response) {
    const refNumber = req.params.refNumber;
    const orderFound = await orderModel.find({refNumber});
    if (orderFound) { 
      return res.send({
        orderFound, 
      });
    }
    return res.send('Order not found!') ;
  }

}

export default delivery;
