import { Request, Response, NextFunction } from "express";
import validateDelivery from '../helpers/deliveryValidations'; 

const validateDeliveryRequest = async (req: Request, res: Response, next: NextFunction) => { 
  const errors = await validateDelivery (req.body);
  if (Object.keys(errors).length > 0) {
    return res.send(errors);
  }
  return next();
};/*      
exports.checkRideOwner = async (req, res, next) => {
  const userId = req.decoded.userId;
  const requestId = req.params.requestId;
  const errors = await validation.getRideOwner(requestId, userId);
  if (Object.keys(errors).length > 0) {
    return res.send(errors);
  }
  return next();
} */


/* function validate(req: Request, res: Response, next: NextFunction){
  const expectedKeys = ["name", "email"]
  expectedKeys.map(key => {
    Object.keys(req.body).map(data => {
      if(!expectedKeys.includes(data)){
        console.log(data, "is required")
      }
    })
  })
} */


/* import { Request, Response, NextFunction } from "express"; 

function validate(req: Request, res: Response, next: NextFunction){
 
  const expectedKeys = ['fullName', 'pickUpPhoneNumber',  'dropOffPhoneNumber', 'description', 'recipientName', 'routeStatus', 'monetary', 'pickUpAddress', 'dropOffAddress', 'deliveryMethod', 'recipientPhoneNumber' ]; 
  //console.log(expectedKeys);
  //console.log(req.body);
  expectedKeys.map(key => {
    Object.keys(req.body).map(data => {
     // console.log(expectedKeys)
      if(!expectedKeys.includes(data)){
        console.log('hello')
        console.log(data, "is required")
      }
    })
  })
} */
 export default validateDeliveryRequest;