const SHOP_DATA = [
  {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl:
          "https://images.unsplash.com/photo-1474039880361-1cd8259d95db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBicmltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl:
          "https://images.unsplash.com/photo-1519663412347-41822a105815?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMGJlYW5pZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl:
          "https://images.unsplash.com/photo-1600075108097-f64b1fc12a41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJyb3duJTIwY293Ym95JTIwaGF0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl:
          "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb3duJTIwY293Ym95JTIwaGF0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl:
          "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBiZWFuaWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl:
          "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhbG0lMjB0cmVlJTIwY2FwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl:
          "https://images.unsplash.com/photo-1574368822296-1dfd47114b1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMGJlYW5pZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 8,
        name: "Grey beanie",
        imageUrl:
          "https://images.unsplash.com/photo-1474031317822-f51f48735ddd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JleSUyMGJlYW5pZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl:
          "https://images.unsplash.com/photo-1570748092285-6203601e4bcb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25hcGJhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 1,
        name: "Adidas NMD",
        imageUrl:
          "https://images.unsplash.com/photo-1582203422366-1fdb37aa215c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFkaWRhcyUyMG5tZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 220,
      },
      {
        id: 2,
        name: "Adidas Yeezy",
        imageUrl:
          "https://images.unsplash.com/photo-1606297255627-c58c609140e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWRpZGFzJTIweWVlenl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 280,
      },
      {
        id: 3,
        name: "Black Converse",
        imageUrl:
          "https://images.unsplash.com/photo-1625622176712-7b8be24e2aee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJsYWNrJTIwY29udmVyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 110,
      },
      {
        id: 4,
        name: "Nike White AirForce",
        imageUrl:
          "https://images.unsplash.com/photo-1615028456268-02eb9815a776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBhaXJmb3JjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 160,
      },
      {
        id: 5,
        name: "Nike Red High Tops",
        imageUrl:
          "https://m.media-amazon.com/images/I/717Qkg4Zg2L._AC_UL320_.jpg",
        price: 160,
      },
      {
        id: 6,
        name: "Nike Brown High Tops",
        imageUrl:
          "https://images.unsplash.com/photo-1594450207322-35aa77abde8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMGhpZ2h0b3BzJTIwYnJvd258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 160,
      },
      {
        id: 7,
        name: "Air Jordan Limited",
        imageUrl:
          "https://images.unsplash.com/photo-1601903076343-ee0c1be34911?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWlyJTIwam9yZGFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 190,
      },
      {
        id: 8,
        name: "Timberlands",
        imageUrl:
          "https://images.unsplash.com/photo-1520518225010-711b4f0b1d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRpbWJlcmxhbmRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 1,
        name: "Black Jean Shearling",
        imageUrl:
          "https://m.media-amazon.com/images/I/91uxUnw4TgL._AC_UL320_.jpg",
        price: 125,
      },
      {
        id: 2,
        name: "Blue Jean Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGdyZXklMjBqZWFuJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 90,
      },
      {
        id: 3,
        name: "Grey Jean Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1524087689795-d449b477c4dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdyZXklMjBqZWFuJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 90,
      },
      {
        id: 4,
        name: "Brown Shearling",
        imageUrl:
          "https://m.media-amazon.com/images/I/817rGa-ngYL._AC_UL320_.jpg",
        price: 165,
      },
      {
        id: 5,
        name: "Tan Trench",
        imageUrl:
          "https://m.media-amazon.com/images/I/714wzW80gFL._AC_UL320_.jpg",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 1,
        name: "Blue Tanktop",
        imageUrl:
          "https://m.media-amazon.com/images/I/61cu7pmfkZL._AC_UL320_.jpg",
        price: 25,
      },
      {
        id: 2,
        name: "Floral Blouse",
        imageUrl:
          "https://images.unsplash.com/photo-1610831797444-162a3e8dba30?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjB8MTg3MzgxN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 20,
      },
      {
        id: 3,
        name: "Floral Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmxvcmFsJTIwZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 80,
      },
      {
        id: 4,
        name: "Red Dots Dress",
        imageUrl:
          "https://m.media-amazon.com/images/I/71avYWA6w1L._MCnd_AC_UL320_.jpg",
        price: 80,
      },
      {
        id: 5,
        name: "Striped Sweater",
        imageUrl:
          "https://m.media-amazon.com/images/I/71+9yTyUS2L._AC_UL320_.jpg",
        price: 45,
      },
      {
        id: 6,
        name: "Yellow Track Suit",
        imageUrl:
          "https://m.media-amazon.com/images/I/61arAdZKq-L._AC_UL320_.jpg",
        price: 135,
      },
      {
        id: 7,
        name: "White Blouse",
        imageUrl:
          "https://m.media-amazon.com/images/I/71T+WYQPFFS._AC_UL320_.jpg",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 1,
        name: "Camo Down Vest",
        imageUrl:
          "https://m.media-amazon.com/images/I/91cBwmg3oGL._MCnd_AC_UL320_.jpg",
        price: 325,
      },
      {
        id: 2,
        name: "Floral T-shirt",
        imageUrl:
          "https://m.media-amazon.com/images/I/81DPj7SeemS._AC_UL320_.jpg",
        price: 20,
      },
      {
        id: 3,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://m.media-amazon.com/images/I/71ogI2dPB6L._AC_UL320_.jpg",
        price: 25,
      },
      {
        id: 4,
        name: "Pink T-shirt",
        imageUrl:
          "https://m.media-amazon.com/images/I/71+XtcEA64L._AC_UL320_.jpg",
        price: 25,
      },
      {
        id: 5,
        name: "Jean Long Sleeve",
        imageUrl:
          "https://m.media-amazon.com/images/I/81pwwmrydVL._AC_UL320_.jpg",
        price: 40,
      },
      {
        id: 6,
        name: "Burgundy T-shirt",
        imageUrl:
          "https://m.media-amazon.com/images/I/81hcwDYSwzL._AC_UL320_.jpg",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
