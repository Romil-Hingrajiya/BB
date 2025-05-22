import React from "react";
import ser1 from "../assets/images/services-1.png";
import ser2 from "../assets/images/services-2.png";
import ser3 from "../assets/images/services-3.png";
import ser4 from "../assets/images/services-4.png";

const services = [
  {
    title: "Smart Logistics",
    subtitle: "Seamless Delivery",
    description:
      "Our expert logistics team ensures smooth, reliable deliveries every time — with full support, tracking, and industry-best turnaround times.",
    image: ser1,
    link: "#",
  },
  {
    title: "Talk Trade",
    subtitle: "With Our Experts",
    description: "Get direct access to trade professionals who understand your needs. Reach out now and get better deals, faster.",
    image: ser2,
    link: "#",
  },
  {
    title: "Buy Now",
    subtitle: "Pay Smarter",
    description:
      "Enjoy easy paperless credit, secure payments, and low interest to help your business scale without the stress.",
    image: ser3,
    link: "#",
  },
  {
    title: "Quick Trades via",
    subtitle: "WhatsApp",
    description:
      "Send your inquiry via WhatsApp and get quotes, updates, and confirmations instantly.",
    image: ser4,
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-12 my-10">
      <h2 className="text-2xl text-left font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-3">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-t from-orange-100 to-white rounded shadow-md p-5 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div>
              <h4 className="text-orange-700 font-semibold text-sm uppercase">
                {service.title}
              </h4>
              <h3 className="text-xl font-bold text-gray-800">
                {service.subtitle}
              </h3>
              <p className="text-gray-700 text-sm text-justify mt-2">
                {service.description}
              </p>
            </div>
            <div className="mt-4">
              <img
                src={service.image}
                className="w-44 h-44 object-contain mx-auto"
              />
            </div>
            {service.link && (
              <a
                href={service.link}
                className="opacity-0 group-hover:opacity-100 text-orange-600 text-sm mt-3 font-semibold hover:underline text-center transition-opacity duration-300"
              >
                Explore More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
