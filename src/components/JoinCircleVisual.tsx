import React from 'react'


const JoinCircleVisual = () => {
  return (
    <div className="flex-1 min-w-[320px] border border-green-600 rounded-xl relative flex justify-center items-center">
    <div className="absolute w-[400px] md:w-[500px] h-[280px] bg-[#fff2b3] rounded-[50%_40%_60%_50%/60%_40%_50%_50%] top-11 mx-auto z-[1]" />
    <img
      src="../src/assets/JoinUsImg/fullphoto.png"
      alt="Form"
      className="w-[480px] relative z-[2] rounded-xl shadow-lg h-[207px] sm:h-[250px] object-cover"
    />
    <img
      src="../src/assets/JoinUsImg/joinUsform.png"
      
      alt="Overlay"
      className="absolute top-[23px] left-1/2 -translate-x-1/2  w-[27rem] z-[3] rounded-md shadow-md -translate-y-18p bg-[#ddd6ff]"
    />
  </div>
  )
}

export default JoinCircleVisual
