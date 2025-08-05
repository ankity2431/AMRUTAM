import Dpromotion from "./Dpromotion";
import React from 'react';

const data = [
  {
    title: "Instant FREE 5–Mins Call",
    description:
      "We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.",
      image: `${import.meta.env.BASE_URL}assets/doctorImg/doctor1.png`,
  },
  {
    title: "Forum for Meaningful Connections",
    description:
      "We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the 'Thoughts' section allows you to share deeper Ayurvedic wisdom.",
      image: `${import.meta.env.BASE_URL}assets/doctorImg/doctor2.png`,
  },
  {
    title: "Real-time Consultations",
    description:
      "Get instant access to your patients and reduce waiting times by using our secure video consultation tools.",
      image:`${import.meta.env.BASE_URL}assets/doctorImg/doctor3.png`,
  },
  {
    title: "Easy Appointment Management",
    description:
      "Manage your appointments, availability, and consultations with our intuitive and hassle-free scheduling system.",
      image: `${import.meta.env.BASE_URL}assets/doctorImg/doctor4.png`,
  },
  {
    title: "Patient Record History",
    description:
      "Keep complete track of patient history, prescriptions, and notes in a single organized dashboard built for doctors.",
      image: `${import.meta.env.BASE_URL}assets/doctorImg/doctor5.png`,
  },
];

const DoctorPromotion = () => {
  return (
    <section className="bg-[#fef7e7] px-5 md:px-16 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-3xl font-semibold text-[#245c38] mb-2">
          Why Doctors Choose Us?
        </h2>
        <p className="text-xs md:text-sm font-thin text-gray-600">
          Unlock the Benefits of Smarter Healthcare Management and Patient Care
        </p>
      </div>

      {/* Items */}
      {data.map((item, index) => (
        <Dpromotion
          key={index}
          title={item.title}
          description={item.description}
          reverse={index % 2 !== 0}
          image={item.image}
        />
      ))}
    </section>
  );
};

export default DoctorPromotion;
