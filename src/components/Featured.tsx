import React from 'react';


const logoData = [
  { src: `${import.meta.env.BASE_URL}assets/feature_section/times-of-india.png`, alt: 'The Times of India' },
  { src: `${import.meta.env.BASE_URL}assets/feature_section/yourStory.png`, alt: 'YourStory' },
  { src: `${import.meta.env.BASE_URL}assets/feature_section/Traveler.png`, alt: 'Condé Nast Traveller' },
  { src: `${import.meta.env.BASE_URL}assets/feature_section/Livingetc.png`, alt: 'Livingetc' },
  { src: `${import.meta.env.BASE_URL}assets/feature_section/choiceOfFashion.png`, alt: 'The Voice of Fashion' },
  { src: `${import.meta.env.BASE_URL}assets/feature_section/GQ.png`, alt: 'GQ' },
  { src: `${import.meta.env.BASE_URL}assets/feature_section/lifeStyleAsia.png`, alt: 'Lifestyle Asia' },
  { src: `${import.meta.env.BASE_URL}assets/feature_section/vogue.png`, alt: 'VOGUE' },
  { src: `${import.meta.env.BASE_URL}assets/feature_section/forbes.png`, alt: 'Forbes 30 under 30' },
];

export const Featured = () => {
  return (
    <section className="bg-[#fef7e7] py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#245c38]">Featured</h2>
        <p className="text-sm md:text-base text-gray-600 mt-1">
          Recognized and celebrated by leading publications – Amrutam in the spotlight!
        </p>
      </div>

      <div className="overflow-x-auto md:overflow-visible">
        <div className="flex gap-4 md:justify-between items-center w-max md:w-auto ml-2 mr-2">
          {logoData.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-[40px] md:h-[50px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};


