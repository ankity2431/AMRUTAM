import React from 'react'

const StepCard = ({ title, description }) => {
  return (
    <div className="bg-[#fef7e7] border border-gray-300 p-4 rounded-md shadow-sm text-[#3A643C]">
    <strong className="block text-[15px] mb-1">{title}</strong>
    <p className="font-thin text-xs">{description}</p>
  </div>
  )
}

export default StepCard
