
import {validName, validNumber, validPhoneNumber}  from './regEx';
    /**
     * @description validate delivery details
     * @function createRideValidations
     * @param {object} body
     * @returns {Array} deliveryErrors
     */
    function validateDelivery(body: any) { 
    const { fullName, recipientName, pickUpPhoneNumber,  dropOffPhoneNumber, description, routeStatus, monetary, pickUpAddress, dropOffAddress, deliveryMethod, recipientPhoneNumber } = body
    const deliveryErrors: any = {}; 

    if (!fullName || fullName.length < 3 || !validName.test(fullName)) {
      deliveryErrors.message =  'Full NAme is required, with at least three alphabetical characters';
    }

    if (!recipientName || recipientName.length < 3 || !validName.test(recipientName)) {
      deliveryErrors.message =  'Recepient Name is required, with at least three alphabetical characters';
    }

    if (!pickUpPhoneNumber || !validPhoneNumber.test(pickUpPhoneNumber)) {
      deliveryErrors.message =  'Pick-up contact is required, with a valid phone number format';
    }

    if (!recipientPhoneNumber || !validPhoneNumber.test(recipientPhoneNumber)) {
      deliveryErrors.message =  'Recepient contact is required, with a valid phone number format';
    }

    if (!dropOffPhoneNumber || !validPhoneNumber.test(dropOffPhoneNumber)) {
      deliveryErrors.message =  'Drop-off contact is required, with a valid phone number format';
    }

    if(!description) {
      deliveryErrors.message =  'Please describe your item to help us handle it with care.';
    }

    if(!routeStatus) {
      deliveryErrors.message = 'Are you at the drop-off point or pick-up point';
    }

    if(!monetary || monetary.length < 1 || !validNumber.test(monetary)){
      deliveryErrors.message = 'The price worth of your item is required and must be in digit';
    }

    return deliveryErrors;
    }
 export default  validateDelivery;
 