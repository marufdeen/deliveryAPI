import { Request, Response, NextFunction } from "express";
import {validateDelivery, validateDeliveryPrice } from '../helpers/deliveryValidations'; 

export const validateDeliveryRequest = async (req: Request, res: Response, next: NextFunction) => { 
  const errors = await validateDelivery (req.body);
  if (Object.keys(errors).length > 0) {
    return res.send(errors);
  }
  return next();
}; 

export const checkDeliveryParameters = async (req: Request, res: Response, next: NextFunction) => { 
  const errors = await validateDeliveryPrice (req.body);
  if (Object.keys(errors).length > 0) {
    return res.send(errors);
  }
  return next();
}; 