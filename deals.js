/*
  ===========================================================
  DEALS.JS — this is the only file you need to edit.
  ===========================================================

  To add a new deal, copy one of the blocks below between { and },
  fill in your own info, and add a comma after it.

  FIELDS EXPLAINED:
  - brand:       store or brand name, e.g. "Nike"
  - title:       short product name, e.g. "Air Max 90 — Black/White"
  - category:    must be exactly "shoes" or "clothes"
  - audience:    must be exactly one of: "men", "women", "kids", "unisex"
  - priceWas:    original price as a number, no euro sign, e.g. 120.00
  - priceNow:    discounted price as a number, e.g. 72.00
  - discount:    the % off as a whole number, e.g. 40
                 (tip: discount = Math.round((1 - priceNow/priceWas) * 100))
  - size:        optional, e.g. "Sizes 38-45" or leave as ""
  - url:         the link to the real product page
  - image:       optional — paste a path or link to a real photo here.
                 Leave as "" and the site will show a clean icon instead.
                 Example once you have a photo: "images/nike-air-max.jpg"
                 (put the photo file in an "images" folder next to this file)
  - dateFound:   when you found this deal, format "YYYY-MM-DD"
  - stockLevel:  "normal" or "low"  (controls the "Low stock" tag)

  Once you save this file, just refresh index.html in your browser
  to see the changes — no other steps needed.

  IMPORTANT ABOUT PHOTOS:
  Only use photos you have the right to use — e.g. your own photos,
  or images a store explicitly allows you to use (some affiliate
  programs provide official images). Don't copy photos straight off
  another website without checking — most product photography is
  copyrighted to the store or photographer.
*/

const SITE_META = {
  lastUpdated: "2026-06-28"
};

const DEALS = [
  {
    brand: "Nike",
    title: "Air Max 90 — Black / White",
    category: "shoes",
    audience: "men",
    priceWas: 139.99,
    priceNow: 83.99,
    discount: 40,
    size: "Sizes 36–45",
    url: "https://www.nike.com",
    image: "",
    dateFound: "2026-06-26",
    stockLevel: "low"
  },
  {
    brand: "The North Face",
    title: "The North Face Liquid Box Men's T-shirt",
    category: "clothes",
    audience: "men",
    priceWas: 37,
    priceNow: 30,
    discount: 19,
    size: "XS–XL",
    url: "https://www.jdsports.cy/en/500459-the-north-face-m-lqd-box-nse-os-ss-tee.html#/505823-color-tnf_white",
    image: "the-north-face-m-lqd-box-nse-os-ss-tee.jpg",
    dateFound: "2026-06-25",
    stockLevel: "normal"
  },
  {
    brand: "Adidas",
    title: "adidas National team of Italy 26 Away Men's Football Jersey",
    category: "Clothes",
    audience: "Men",
    priceWas: 100.00,
    priceNow: 80.00,
    discount: 20,
    size: "Sizes S,M,L,XL",
    url: "https://www.jdsports.cy/en/500933-adidas-m-italy-26-away-jersey.html#/506298-color-aerblu",
    image: "adidas-m-italy-26-away-jersey.jpg",
    dateFound: "2026-06-24",
    stockLevel: "normal"
  },
  {
    brand: "H&M",
    title: "Relaxed Fit Hoodie",
    category: "clothes",
    audience: "men",
    priceWas: 29.99,
    priceNow: 12.99,
    discount: 57,
    size: "S–XXL",
    url: "https://www.hm.com",
    image: "",
    dateFound: "2026-06-27",
    stockLevel: "low"
  },
  {
    brand: "New Balance",
    title: "550 — Grey / Cream",
    category: "shoes",
    audience: "unisex",
    priceWas: 130.00,
    priceNow: 91.00,
    discount: 30,
    size: "Sizes 37–44",
    url: "https://www.newbalance.com",
    image: "",
    dateFound: "2026-06-20",
    stockLevel: "normal"
  },
  {
    brand: "Bershka",
    title: "Cargo Pants — Khaki",
    category: "clothes",
    audience: "women",
    priceWas: 35.99,
    priceNow: 17.99,
    discount: 50,
    size: "34–44",
    url: "https://www.bershka.com",
    image: "",
    dateFound: "2026-06-23",
    stockLevel: "normal"
  },
  {
    brand: "Puma",
    title: "Suede Classic XXI",
    category: "shoes",
    audience: "men",
    priceWas: 85.00,
    priceNow: 42.50,
    discount: 50,
    size: "Sizes 36–45",
    url: "https://www.puma.com",
    image: "",
    dateFound: "2026-06-22",
    stockLevel: "low"
  },
  {
    brand: "Pull&Bear",
    title: "Ribbed Knit Jumper",
    category: "clothes",
    audience: "women",
    priceWas: 25.99,
    priceNow: 15.99,
    discount: 38,
    size: "XS–XL",
    url: "https://www.pullandbear.com",
    image: "",
    dateFound: "2026-06-21",
    stockLevel: "normal"
  },
  {
    brand: "Converse",
    title: "Chuck 70 Kids — Vintage Black",
    category: "shoes",
    audience: "kids",
    priceWas: 65.00,
    priceNow: 39.00,
    discount: 40,
    size: "Kids sizes 28–35",
    url: "https://www.converse.com",
    image: "",
    dateFound: "2026-06-19",
    stockLevel: "normal"
  },
  {
    brand: "Mango",
    title: "Linen-Blend Shirt",
    category: "clothes",
    audience: "men",
    priceWas: 45.99,
    priceNow: 22.99,
    discount: 50,
    size: "S–XXL",
    url: "https://www.mango.com",
    image: "",
    dateFound: "2026-06-18",
    stockLevel: "normal"
  },
  {
    brand: "Vans",
    title: "Old Skool — Black/White",
    category: "shoes",
    audience: "unisex",
    priceWas: 75.00,
    priceNow: 52.50,
    discount: 30,
    size: "Sizes 35–45",
    url: "https://www.vans.com",
    image: "",
    dateFound: "2026-06-17",
    stockLevel: "normal"
  },
  {
    brand: "Zara Kids",
    title: "Printed Cotton Dress",
    category: "clothes",
    audience: "kids",
    priceWas: 25.95,
    priceNow: 12.95,
    discount: 50,
    size: "Ages 3–10",
    url: "https://www.zara.com",
    image: "",
    dateFound: "2026-06-15",
    stockLevel: "low"
  }
];
