import React from "react";

const ClubStats = () => {
  return (
    // TODO:  Use fonts: Chakra Petch, Inter; Check figma design.
    <div className="min-w-screen bg-[#1E1F22] h-24 flex justify-center">
      <div className="flex justify-center items-center gap-x-2">
        <p className="text-white font-sans text-[52.5px] font-bold leading-[68.25px] tracking-[-0.02em] text-right">
          2500
        </p>
        <p className="text-[#C80F2E] font-sans text-[52.5px] font-bold leading-[63.54px] tracking-[-0.02em] text-center">
          +
        </p>
        <div className="flex flex-col text-white">
          <p className="font-sans text-[13.13px] font-medium leading-[17.06px] tracking-[-0.02em] text-left">
            Total members on
          </p>
          <p className="font-sans text-[13.13px] font-medium leading-[17.06px] tracking-[-0.02em] text-left">
            all Social Platforms
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubStats;
