import { Request, Response } from 'express';
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
            //console.log({ pickUpAddress, dropOffAddress, deliveryMethod }); 
            const deliveryResult = await deliveryPriceCalculator(pickUpAddress, dropOffAddress, deliveryMethod);
            if (deliveryResult) {
                return res.status(200).json({
                    deliveryResult
                })
            }
            else{
                return res.status(400).json({
                    error: 'Something went wrong'
                })
            }
          }
        
  }

  export default delivery;