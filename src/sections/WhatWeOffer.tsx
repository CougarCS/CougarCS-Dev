import CougarCSIcon from "@/assets/icons/CougarCS";
import OfferCard from "@/components/OfferCard";
import SectionAnnouncement from "@/components/SectionAnnoucement";
import { Star } from "lucide-react";
import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="bg-gradient-to-b from-[#1E1F22] to-[#151617] flex flex-col px-8 py-8 gap-8">
      <SectionAnnouncement color="red" text="What We Offer" Icon={Star} />
      <div>
        <p className="font-manrope font-bold text-2xl leading-9 text-center tracking-tight text-white">
          We offer many types of events & support for our community
        </p>
        <p className="font-manrope font-medium text-sm leading-6 text-center tracking-tight text-white/55">
          From socials & reviews to workshops and beyond
        </p>
      </div>
      {/* <OfferCard /> */}
    </div>
  );
};

export default WhatWeOffer;
