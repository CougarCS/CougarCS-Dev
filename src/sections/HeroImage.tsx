import { Button } from "@/components/ui/button";
import ArrowRight from "@/assets/icons/ArrowRight";
import Discord from "@/assets/icons/DiscordFill";
import React from "react";

const HeroImage = () => {
  const handleDiscordRedirect = () => {
    window.location.href = "https://discord.com/invite/wEagwaXS7F";
  };

  const handleJoinRedirect = () => {
    window.location.href = "https://cougarcs.com/join";
  };

  return (
    <div className="flex flex-col lg:flex-row place-end lg:place-start h-full w-full bg-[url('/background/herobackgroundmobile.png')] lg:bg-[url('/background/herobackground.png')] bg-cover py-40 bg-no-repeat bg-[#C80F2E] bg-[center_top_-12rem] sm:bg-[center_bottom_2rem] lg:bg-right">
      <div className="relative top-40 px-8 lg:static bg-gradient-to-t lg:bg-none from-[#C80F2E] from-60% lg:px-16 xl:px-32 py-16 flex flex-col justify-center gap-y-4">
        {/* TODO: FIX TITLE */}
        <img src="/cougarCSText.svg" alt="CougarCS" className="w-80 mx-auto" />

        <div
          className="
    font-chakra font-medium text-xl leading-[22px] text-center text-white"
        >
          WE COMPUTE STUDENT SUCCESS.
        </div>

        {/* TODO: Add icons check shadCN icons, correct size and boxiness*/}
        <Button
          variant="outline"
          className="font-manrope bg-white text-red-700 text-[16px] font-semibold leading-[21.86px] tracking-[-0.01em] text-left"
          onClick={handleJoinRedirect}
        >
          <ArrowRight /> Become a Member
        </Button>
        <Button
          variant="outline"
          className="hover-button font-manrope bg-transparent text-white text-[16px] font-semibold leading-[21.86px] tracking-[-0.01em] text-left"
          onClick={handleDiscordRedirect}
        >
          <Discord />
          Join our Discord
        </Button>
      </div>
    </div>
  );
};

export default HeroImage;
