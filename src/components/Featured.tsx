import React from 'react';

// Import images from assets
import TOI from '../assets/feature_section/times-of-india.png';
import YourStory from '../assets/feature_section/yourStory.png';
import CNTraveller from '../assets/feature_section/Traveler.png';
import LivingEtc from '../assets/feature_section/Livingetc.png';
import VoiceOfFashion from '../assets/feature_section/choiceOfFashion.png';
import GQ from '../assets/feature_section/GQ.png';
import LifestyleAsia from '../assets/feature_section/lifeStyleAsia.png';
import Vogue from '../assets/feature_section/vogue.png';
import Forbes from '../assets/feature_section/forbes.png';

const logoData = [
  { src: TOI, alt: 'The Times of India' },
  { src: YourStory, alt: 'YourStory' },
  { src: CNTraveller, alt: 'Condé Nast Traveller' },
  { src: LivingEtc, alt: 'Livingetc' },
  { src: VoiceOfFashion, alt: 'The Voice of Fashion' },
  { src: GQ, alt: 'GQ' },
  { src: LifestyleAsia, alt: 'Lifestyle Asia' },
  { src: Vogue, alt: 'VOGUE' },
  { src: Forbes, alt: 'Forbes 30 under 30' },
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


