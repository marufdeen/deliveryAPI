const priceTags = [
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE1",
    price: 1000,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE2",
    price: 1000,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE3",
    price: 1500,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE4",
    price: 2000,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE5",
    price: 1000,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE6",
    price: 1500,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE7",
    price: 1500,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE8",
    price: 1500,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE9",
    price: 2000,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "ROUTE10",
    price: 2000,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE1",
    price: 1000,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE2",
    price: 1000,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE3",
    price: 1000,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE4",
    price: 1500,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE5",
    price: 1000,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE6",
    price: 1500,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE7",
    price: 1500,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE8",
    price: 1500,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE9",
    price: 2000,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "ROUTE10",
    price: 2000,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE1",
    price: 1500,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE2",
    price: 1000,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE3",
    price: 1000,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE4",
    price: 1500,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE5",
    price: 1500,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE6",
    price: 1500,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE7",
    price: 1500,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE8",
    price: 1500,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE9",
    price: 2000,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "ROUTE10",
    price: 2000,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE1",
    price: 2000,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE2",
    price: 1500,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE3",
    price: 2000,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE4",
    price: 1500,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE5",
    price: 2000,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE6",
    price: 2000,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE7",
    price: 2000,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE8",
    price: 2000,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE9",
    price: 2500,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "ROUTE10",
    price: 2500,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE1",
    price: 1000,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE2",
    price: 1000,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE3",
    price: 1500,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE4",
    price: 2000,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE5",
    price: 1000,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE6",
    price: 1500,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE7",
    price: 1500,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE8",
    price: 1500,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE9",
    price: 2000,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "ROUTE10",
    price: 2000,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE1",
    price: 1500,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE2",
    price: 1500,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE3",
    price: 1500,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE4",
    price: 2000,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE5",
    price: 1500,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE6",
    price: 1000,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE7",
    price: 2000,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE8",
    price: 1500,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE9",
    price: 2000,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "ROUTE10",
    price: 2500,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE1",
    price: 1500,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE2",
    price: 1500,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE3",
    price: 1500,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE4",
    price: 2000,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE5",
    price: 1500,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE6",
    price: 1500,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE7",
    price: 1000,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE8",
    price: 1000,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE9",
    price: 1500,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "ROUTE10",
    price: 2500,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE1",
    price: 1500,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE2",
    price: 1500,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE3",
    price: 1500,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE4",
    price: 2000,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE5",
    price: 1500,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE6",
    price: 2000,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE7",
    price: 1000,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE8",
    price: 1000,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE9",
    price: 1000,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "ROUTE10",
    price: 2500,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE1",
    price: 2500,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE2",
    price: 2000,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE3",
    price: 2000,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE4",
    price: 2000,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE5",
    price: 2000,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE6",
    price: 2000,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE7",
    price: 1500,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE8",
    price: 1000,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE9",
    price: 1000,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "ROUTE10",
    price: 2500,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE1",
    price: 2000,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE2",
    price: 2000,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE3",
    price: 2000,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE4",
    price: 2500,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE5",
    price: 2000,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE6",
    price: 2500,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE7",
    price: 2500,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE8",
    price: 2500,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE9",
    price: 2500,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "ROUTE10",
    price: 1000,
  },
  {
    pickUp: "ROUTE1",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE2",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE3",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE4",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE5",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE6",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE7",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE8",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE9",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "ROUTE10",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "EXTREME",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE1",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE2",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE3",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE4",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE4",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE5",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE6",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE7",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE8",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE9",
    price: 3000,
  },
  {
    pickUp: "EXTREME",
    dropOff: "ROUTE10",
    price: 3000,
  },
];
export default priceTags;