import axios from "axios";

async function createCheckOutLink( refNumber: string, amount: number,  phoneNumber: number, fullName: string
) {
  try {
    const payload = {
      tx_ref: refNumber,
      amount,
      currency: "NGN",
      redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",

      customer: {
        email: "marufajagunna@gmail.com",
        phonenumber: phoneNumber,
        name: fullName,
      },
    };

    const flutterWaveEndpoint = "https://api.flutterwave.com/v3/payments";

    const { data } = await axios.post(flutterWaveEndpoint, payload, {
      headers: {
        Authorization: "Bearer FLWSECK_TEST-a08860de9c1a4aa621cf5fabc4b369ce-X",
      },
    }); 
//FLWSECK_TEST-99e3537c99ff82bf8cb01b8912858690-X
    return data?.data?.link;
  } catch (error) {
    console.log(error);
  }
}

export { createCheckOutLink };
