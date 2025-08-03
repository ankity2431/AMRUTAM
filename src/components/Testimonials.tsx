import React from "react";
import testimonial1 from "../assets/testimonial.jpg";

const testimonials = [
  {
    name: "Dr. Pooja Deshmukh",
    title: "BAMS",
    rating: 5,
    feedback:
      "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
    image: testimonial1,
    highlighted: false,
  },
  {
    name: "Dr. Rajesh Iyer",
    title: "Ayurvedic Practitioner",
    rating: 4,
    feedback:
      "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
    image: testimonial1,
    highlighted: true,
  },
  {
    name: "Dr. Ananya Sharma",
    title: "BAMS",
    rating: 5,
    feedback:
      "As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products.",
    image: testimonial1,
    highlighted: false,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fef7e7] py-12 px-4">
      <div className="mx-auto text-center">
        <h2 className="text-[28px] text-[#245c38] font-bold mb-2">
          What other Ayurvedic Doctors are Saying
        </h2>
        <p className="text-[16px] text-[#555] mb-10">
          Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`w-[26rem] bg-[#fff5d8] p-6 shadow-md text-left transition-transform duration-300 hover:-translate-y-1 ${
                t.highlighted ? "bg-[#ffeeaa]" : "" }
                ${idx === 1 ? "h-[14rem]" : "h-[11rem]"}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h3 className="text-sm text-[#111] font-semibold">
                    {t.name}
                    <span className="block text-xs text-[#555] font-normal">
                      , {t.title}
                    </span>
                  </h3>
                  <div className="text-[#f5b31b] text-[16px] tracking-wider">
                    {"★".repeat(t.rating) + "☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-[#444] font-thin leading-relaxed">
                "{t.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
