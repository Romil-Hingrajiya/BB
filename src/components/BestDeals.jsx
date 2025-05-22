import React from "react";

const deals = [
  {
    delivery: "Kanhba, Ahmedabad, Gujarat",
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/04/Tata-Steel-logo.png",
    title: "H.R.SHEET",
    size: "3 MM",
    measurement: "1250 X 2500",
    grade: "IS:2062 E 250 BR",
    price: "₹53,500.00",
    brand: "TATA STEEL",
    image: "https://www.jindalsteelpower.com/img/products/hot-rolled-plates.jpg",
  },
  {
    delivery: "Kanhba, Ahmedabad, Gujarat",
    brandLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Jindal_Steel_%26_Power_logo.svg/2560px-Jindal_Steel_%26_Power_logo.svg.png",
    title: "H.R.SHEET",
    size: "3 MM",
    measurement: "1500 X 2500",
    grade: "IS:2062 E 250 BR",
    price: "₹53,250.00",
    brand: "JINDAL - ODISHA",
    image: "https://www.jindalsteelpower.com/img/products/hot-rolled-plates.jpg",
  },
  {
    delivery: "Kanhba, Ahmedabad, Gujarat",
    brandLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Jindal_Steel_%26_Power_logo.svg/2560px-Jindal_Steel_%26_Power_logo.svg.png",
    title: "H.R.SHEET",
    size: "4 MM",
    measurement: "1500 X 2500",
    grade: "IS:2062 E 250 BR",
    price: "₹53,250.00",
    brand: "JINDAL - ODISHA",
    image: "https://www.jindalsteelpower.com/img/products/hot-rolled-plates.jpg",
  },
];

const BestDeals = () => {
  return (
    <section className="bg-orange-500 px-4 md:px-10 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl md:text-2xl font-bold">
          Today's Best Deals
        </h2>
        <a href="#" className="text-white text-sm font-semibold hover:underline">
          View More
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {deals.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4">
            <div className="bg-gray-800 text-white text-sm font-bold px-3 py-2 rounded-t-md">
              Ex Delivery from: <br />
              <span className="font-extrabold">{item.delivery}</span>
            </div>
            <div className="flex items-start justify-between py-4 px-2">
              <div className="flex-1">
                <img src={item.brandLogo} alt="Brand Logo" className="h-5 mb-1" />
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><span className="font-bold text-orange-600">Size [M.M.]</span> {item.size}</p>
                  <p><span className="font-bold text-orange-600">Measurement</span> {item.measurement}</p>
                  <p><span className="font-bold text-orange-600">Grade</span> {item.grade}</p>
                  <p><span className="font-bold text-orange-600">Price [M.T.]</span> {item.price}</p>
                  <p><span className="font-bold text-orange-600">Brand</span> {item.brand}</p>
                </div>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-20 object-contain ml-4 mt-2"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
