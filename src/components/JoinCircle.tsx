import React,{ useContext } from 'react'
import StepCard from './StepCard'
import Visual from './JoinCircleVisual'
import { ConsultationSteps } from '../../src/utils/constant';
import { SelectedIndexContext } from '../../src/utils/SelectedIndexContext';

const JoinCircle = () => {
  
  const { selectedIndex } = useContext(SelectedIndexContext);

      return (
        <section className="bg-[#fef7e7] px-6 py-12 mt-[-4rem]">
          <div className="text-center mb-12">
            <h2 className="text-[28px] text-[#245c38] mb-2">Join Our Circle of Care</h2>
            <p className="text-[15px] text-[#555]">Becoming a part of Amrutam is simple</p>
          </div>
    
          <div className="flex flex-wrap lg:flex-nowrap gap-10 items-center justify-center lg:justify-between">
            {/* Left Steps */}
            <div className="flex-1 flex flex-col gap-4 md:pl-[5rem] md:pr-[7rem]">
              {ConsultationSteps[selectedIndex === 0 ? 'Consultations' : selectedIndex === 1 ? 'Payment withdrawal' : 'Schedule'].map((step, index) => (
                <StepCard
                  key={index}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
    
            {/* Right Visual */}
            <div className="hidden md:flex">
              <Visual />
            </div>
    
            {/* Visual for Mobile (smaller and stacked) */}
            <div className="block md:hidden max-w-sm mx-auto scale-90 mt-6">
              <Visual />
            </div>
          </div>
        </section>
  )
}

export default JoinCircle
