
const routes : any = {
    ROUTE1: ["IKEJA", "MARYLAND", "ILUPEJU", "PALMGROOVE", "JIBOWU", "YABA", "SURULERE", "ANTHONY", "ONIPANU", "MMA1", "OBANIKORO", "COSTAIN", "OJUELEGBA", "BARIGA","SHOMOLU", "OYINGBO"],
    ROUTE2: ["OSHODI", "ISOLO", "OKOTA", "AJAO-ESTATE", "MMA2", "GBAGADA", "IYANAOWORO", "SHOMOLU", "MUSHIN"],
    ROUTE3: ["AMUWO", "FESTAC", "SATELITE", "VOLKSWAGEN", "MILE2", "NAVY-TOWN"],
    ROUTE4: ["APAPA", "TRADE-FAIR", "OJO-ALABA", "IBA", "ORILE", "IGANMU", "IJORA"],
    ROUTE5: ["OGUDU", "KETU", "MAGODO", "OMOLE", "OJODU", "OGBA", "AGEGE", "ALAUSA", "OJOTA", "IFAKO"],
    ROUTE6: ["IJU", "ISHAGA", "ABULE-EGBA", "ALIMOSHO", "EJIGBO", "IKOTUN", "IGANDO", "IDIMU", "IPAJA", "EGBEDA", "GOWON ESTATE"],
    ROUTE7: ["MARINA", "LAGOS-ISLAND", "IKOYI", "V-I", "DOLPHIN-ESTATE", "OSBOURNE", "PARKVIEW", "OBALENDE", "ONIRU" ],
    ROUTE8: ["LEKKI-PH-1", "ELEGUSHI", "JAKANDE", "AGUNGI", "CHEVRON", "3RD ROUNDABOUT", "ALPHA BEACH", "CHISCO", "OSAPA LONDON"],
    ROUTE9: ["IKOTA", "VGC", "AJAH", "ABRAHAM ADESANYA", "BADORE", "SANGOTEDO", "AWOYAYA"],
    ROUTE10: ["IKORODU", "MILE12"],
    EXTREME: ["ELEKO", "EPE", "AGBARA", "BADAGRY", "DANGOTE REFINARY", "REDEEM CAMP", "MOWE", "IBAFO", "IFAKO-IJAYE", "LASU", "OJO", "OKOKOMAIKO"],
  };
  const priceTag : any =  [
    { pickUp: "ROUTE1", dropOff: "ROUTE1", price: 1000},{ pickUp: "ROUTE1", dropOff: "ROUTE2", price: 1000},{ pickUp: "ROUTE1", dropOff: "ROUTE3", price: 1500},{ pickUp: "ROUTE1", dropOff: "ROUTE4", price: 2000},{ pickUp: "ROUTE1", dropOff: "ROUTE5", price: 1000},{ pickUp: "ROUTE1", dropOff: "ROUTE6", price: 1500},{ pickUp: "ROUTE1", dropOff: "ROUTE7", price: 1500},{ pickUp: "ROUTE1", dropOff: "ROUTE8", price: 1500},{ pickUp: "ROUTE1", dropOff: "ROUTE9", price: 2000},{ pickUp: "ROUTE1", dropOff: "ROUTE10", price: 2000},{ pickUp: "ROUTE2", dropOff: "ROUTE1", price: 1000},{ pickUp: "ROUTE2", dropOff: "ROUTE2", price: 1000},{ pickUp: "ROUTE2", dropOff: "ROUTE3", price: 1000},{ pickUp: "ROUTE2", dropOff: "ROUTE4", price: 1500},{ pickUp: "ROUTE2", dropOff: "ROUTE5", price: 1000},{ pickUp: "ROUTE2", dropOff: "ROUTE6", price: 1500},{ pickUp: "ROUTE2", dropOff: "ROUTE7", price: 1500},{ pickUp: "ROUTE2", dropOff: "ROUTE8", price: 1500},{ pickUp: "ROUTE2", dropOff: "ROUTE9", price: 2000},{ pickUp: "ROUTE2", dropOff: "ROUTE10", price: 2000},{ pickUp: "ROUTE3", dropOff: "ROUTE1", price: 1500},{ pickUp: "ROUTE3", dropOff: "ROUTE2", price: 1000},{ pickUp: "ROUTE3", dropOff: "ROUTE3", price: 1000},{ pickUp: "ROUTE3", dropOff: "ROUTE4", price: 1500},{ pickUp: "ROUTE3", dropOff: "ROUTE5", price: 1500},{ pickUp: "ROUTE3", dropOff: "ROUTE6", price: 1500},{ pickUp: "ROUTE3", dropOff: "ROUTE7", price: 1500},{ pickUp: "ROUTE3", dropOff: "ROUTE8", price: 1500},{ pickUp: "ROUTE3", dropOff: "ROUTE9", price: 2000},{ pickUp: "ROUTE3", dropOff: "ROUTE10", price: 2000},{ pickUp: "ROUTE4", dropOff: "ROUTE1", price: 2000},{ pickUp: "ROUTE4", dropOff: "ROUTE2", price: 1500},{ pickUp: "ROUTE4", dropOff: "ROUTE3", price: 2000},{ pickUp: "ROUTE4", dropOff: "ROUTE4", price: 1500},{ pickUp: "ROUTE4", dropOff: "ROUTE5", price: 2000},{ pickUp: "ROUTE4", dropOff: "ROUTE6", price: 2000},{ pickUp: "ROUTE4", dropOff: "ROUTE7", price: 2000},{ pickUp: "ROUTE4", dropOff: "ROUTE8", price: 2000},{ pickUp: "ROUTE4", dropOff: "ROUTE9", price: 2500},{ pickUp: "ROUTE4", dropOff: "ROUTE10", price: 2500},{ pickUp: "ROUTE5", dropOff: "ROUTE1", price: 1000},{ pickUp: "ROUTE5", dropOff: "ROUTE2", price: 1000},{ pickUp: "ROUTE5", dropOff: "ROUTE3", price: 1500},{ pickUp: "ROUTE5", dropOff: "ROUTE4", price: 2000},{ pickUp: "ROUTE5", dropOff: "ROUTE5", price: 1000},{ pickUp: "ROUTE5", dropOff: "ROUTE6", price: 1500},{ pickUp: "ROUTE5", dropOff: "ROUTE7", price: 1500},{ pickUp: "ROUTE5", dropOff: "ROUTE8", price: 1500},{ pickUp: "ROUTE5", dropOff: "ROUTE9", price: 2000},{ pickUp: "ROUTE5", dropOff: "ROUTE10", price: 2000},{ pickUp: "ROUTE6", dropOff: "ROUTE1", price: 1500},{ pickUp: "ROUTE6", dropOff: "ROUTE2", price: 1500},{ pickUp: "ROUTE6", dropOff: "ROUTE3", price: 1500},{ pickUp: "ROUTE6", dropOff: "ROUTE4", price: 2000},{ pickUp: "ROUTE6", dropOff: "ROUTE5", price: 1500},{ pickUp: "ROUTE6", dropOff: "ROUTE6", price: 1000},{ pickUp: "ROUTE6", dropOff: "ROUTE7", price: 2000},{ pickUp: "ROUTE6", dropOff: "ROUTE8", price: 1500},{ pickUp: "ROUTE6", dropOff: "ROUTE9", price: 2000},{ pickUp: "ROUTE6", dropOff: "ROUTE10", price: 2500},{ pickUp: "ROUTE7", dropOff: "ROUTE1", price: 1500},{ pickUp: "ROUTE7", dropOff: "ROUTE2", price: 1500},{ pickUp: "ROUTE7", dropOff: "ROUTE3", price: 1500},{ pickUp: "ROUTE7", dropOff: "ROUTE4", price: 2000},{ pickUp: "ROUTE7", dropOff: "ROUTE5", price: 1500},{ pickUp: "ROUTE7", dropOff: "ROUTE6", price: 1500},{ pickUp: "ROUTE7", dropOff: "ROUTE7", price: 1000},{ pickUp: "ROUTE7", dropOff: "ROUTE8", price: 1000},{ pickUp: "ROUTE7", dropOff: "ROUTE9", price: 1500},{ pickUp: "ROUTE7", dropOff: "ROUTE10", price: 2500},{ pickUp: "ROUTE8", dropOff: "ROUTE1", price: 1500},{ pickUp: "ROUTE8", dropOff: "ROUTE2", price: 1500},{ pickUp: "ROUTE8", dropOff: "ROUTE3", price: 1500},{ pickUp: "ROUTE8", dropOff: "ROUTE4", price: 2000},{ pickUp: "ROUTE8", dropOff: "ROUTE5", price: 1500},{ pickUp: "ROUTE8", dropOff: "ROUTE6", price: 2000},{ pickUp: "ROUTE8", dropOff: "ROUTE7", price: 1000},{ pickUp: "ROUTE8", dropOff: "ROUTE8", price: 1000},{ pickUp: "ROUTE8", dropOff: "ROUTE9", price: 1000},{ pickUp: "ROUTE8", dropOff: "ROUTE10", price: 2500},{ pickUp: "ROUTE9", dropOff: "ROUTE1", price: 2500},{ pickUp: "ROUTE9", dropOff: "ROUTE2", price: 2000},{ pickUp: "ROUTE9", dropOff: "ROUTE3", price: 2000},{ pickUp: "ROUTE9", dropOff: "ROUTE4", price: 2000},{ pickUp: "ROUTE9", dropOff: "ROUTE5", price: 2000},{ pickUp: "ROUTE9", dropOff: "ROUTE6", price: 2000},{ pickUp: "ROUTE9", dropOff: "ROUTE7", price: 1500},{ pickUp: "ROUTE9", dropOff: "ROUTE8", price: 1000},{ pickUp: "ROUTE9", dropOff: "ROUTE9", price: 1000},{ pickUp: "ROUTE9", dropOff: "ROUTE10", price: 2500},{ pickUp: "ROUTE10", dropOff: "ROUTE1", price: 2000},{ pickUp: "ROUTE10", dropOff: "ROUTE2", price: 2000},{ pickUp: "ROUTE10", dropOff: "ROUTE3", price: 2000},{ pickUp: "ROUTE10", dropOff: "ROUTE4", price: 2500},{ pickUp: "ROUTE10", dropOff: "ROUTE5", price: 2000},{ pickUp: "ROUTE10", dropOff: "ROUTE6", price: 2500},{ pickUp: "ROUTE10", dropOff: "ROUTE7", price: 2500},{ pickUp: "ROUTE10", dropOff: "ROUTE8", price: 2500},{ pickUp: "ROUTE10", dropOff: "ROUTE9", price: 2500},{ pickUp: "ROUTE10", dropOff: "ROUTE10", price: 1000},{ pickUp: "ROUTE1", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE2", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE3", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE4", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE5", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE6", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE7", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE8", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE9", dropOff: "EXTREME", price: 3000},{ pickUp: "ROUTE10", dropOff: "EXTREME", price: 3000},{ pickUp: "EXTREME", dropOff: "EXTREME", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE1", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE2", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE3", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE4", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE4", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE5", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE6", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE7", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE8", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE9", price: 3000},{ pickUp: "EXTREME", dropOff: "ROUTE10", price: 3000},
  ];
  
  function deliveryPriceCalculator (pickUpAddress : String, dropOffAddress : String, deliveryMethod : String)  {
  
    function getRoute(address: String) {
       let routeValue : any ;
       let landMark : any; 
       Object.keys(routes).reduce((acc: any, key) => {
        const regEx = /[/,/.]/g;
        const filteredAddress = address.replace(regEx, '');
        const add = filteredAddress.split(" ").map((a) => a.toUpperCase()); 
        add.map((ad) => {
          if (routes[key].includes(ad) ) {
            if (routeValue === undefined) routeValue = key.toUpperCase();
          }
          if (routes[key].includes(ad) ) landMark = ad
        });
      }, {});
  
      return {routeValue, landMark};
    }
  
    function getPrice(pickUp: String, dropOff: String) {
      const deliveryCharge  = priceTag.find(
        (data : any) => (data.pickUp === pickUp ) && (data.dropOff === dropOff)
      ).price;

      if (deliveryMethod == 'regular') return deliveryCharge;
      if (deliveryMethod == 'express') return deliveryCharge + deliveryCharge;
    } 
  

    const pickUpRoute = getRoute(pickUpAddress);
    const dropOffRoute = getRoute(dropOffAddress); 

    if(pickUpRoute.landMark == undefined) {
      return  {
        error: `Sorry, your pick up address doesn't contain any of our land-marks`
      }
    }

    else if(dropOffRoute.landMark == undefined) {
      return {
        error: `Sorry, your drop off address doesn't contain any of our land-marks`
      }
    }
    else {
       const amountToPay = getPrice(pickUpRoute.routeValue, dropOffRoute.routeValue);
       
       return { pickUp: pickUpRoute.landMark, dropOff: dropOffRoute.landMark, deliveryMethod,  amountToPay };
    }

  };

  export default deliveryPriceCalculator; 