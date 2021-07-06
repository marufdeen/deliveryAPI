import { Request, Response } from "express";
import axios from "axios";
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
    const deliveryOutcome: any = await deliveryPriceCalculator(
      pickUpAddress,
      dropOffAddress,
      deliveryMethod
    );
    if (deliveryOutcome) {
      return res.status(200).json({
        deliveryOutcome: deliveryOutcome,
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
    const {
      fullName,
      pickUpPhoneNumber,
      dropOffPhoneNumber,
      description,
      recipientName,
      routeStatus,
      monetary,
      pickUpAddress,
      dropOffAddress,
      deliveryMethod,
      recipientPhoneNo,
    } = req.body;

    const refNumber = crypto.randomBytes(6).toString("hex");

    const deliveryOutcome = await deliveryPriceCalculator(
      pickUpAddress,
      dropOffAddress,
      deliveryMethod
    );

    // @ts-ignore
    const orderDetails = await orderModel.create({
      fullName,
      amount: deliveryOutcome.amountToPay,
      pickUpPhoneNumber,
      refNumber,
      dropOffPhoneNumber,
      description,
      recipientName,
      routeStatus,
      monetary,
      recipientPhoneNo,
    });

    const checkoutLink = await createCheckOutLink(
        refNumber,
      deliveryOutcome.amountToPay,
      recipientPhoneNo,
      recipientName
    );  
    if (orderDetails) {
      return res.status(200).json(Object.assign({orderDetails, checkoutLink}));
    } else {
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
  }
}

export default delivery;
