import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import WhyPartner from "../assets/images/why-partner-bg.png";
import WhyChoose from "../assets/images/why-choose-bg.jpg";

const accordionData = [
  {
    title: "Lightning-fast Transactions",
    content:
      "Witness real-time pricing updates and trade within minutes! Our platform ensures you can verify live rates and execute trades in record time - it's the fastest in the market!",
  },
  {
    title: "Precision Guaranteed",
    content:
      "Witness real-time pricing updates and trade within minutes! Our platform ensures you can verify live rates and execute trades in record time - it's the fastest in the market!",
  },
  {
    title: "Hassle-free Credit Facility",
    content:
      "Witness real-time pricing updates and trade within minutes! Our platform ensures you can verify live rates and execute trades in record time - it's the fastest in the market!",
  },
  {
    title: "Lowest Freight Rates",
    content:
      "Witness real-time pricing updates and trade within minutes! Our platform ensures you can verify live rates and execute trades in record time - it's the fastest in the market!",
  },
  {
    title: "Expert Trade Managers",
    content:
      "Witness real-time pricing updates and trade within minutes! Our platform ensures you can verify live rates and execute trades in record time - it's the fastest in the market!",
  },
  {
    title: "World-Class Service",
    content:
      "Witness real-time pricing updates and trade within minutes! Our platform ensures you can verify live rates and execute trades in record time - it's the fastest in the market!",
  },
];

export default function PartnerBenefit() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-fixed bg-cover bg-center w-full py-10 px-4 md:px-10"
    style={{
      backgroundImage: `url(${WhyChoose})`
    }}>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center border-l-4 border-orange-500 pl-3">
          Why Partner With Us
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Accordion Section */}
          <div className="flex-1 space-y-4">
            {accordionData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded shadow overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-orange-500 font-semibold text-left"
                >
                  {item.title}
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openIndex === index && item.content && (
                  <div className="px-4 py-3 text-sm bg-white text-gray-800">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="flex-1 max-w-sm sm:max-w-md md:max-w-lg">
            <img src={WhyPartner} alt="" />
          </div>

          {/* Right Accordion Section */}
          <div className="flex-1 space-y-4">
            {accordionData.slice(3).map((item, index) => (
              <div
                key={index + 3}
                className="bg-gray-800 text-white rounded shadow overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index + 3)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-700 font-semibold text-left"
                >
                  {item.title}
                  {openIndex === index + 3 ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openIndex === index + 3 && item.content && (
                  <div className="px-4 py-3 text-sm bg-white text-gray-800">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
