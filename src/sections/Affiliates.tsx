import SponsorCard from "@/components/SponsorCard";
import { sponsorData } from "@/displayData/sponsors";
import { partnersData } from "@/displayData/partners";
import PartnerCard from "@/components/PartnerCard";

const Affiliates = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 pt-12 pb-11 lg:mb-12">
      <div className="lg:max-w-6xl 2xl:max-w-[77rem]">
        <div className="flex flex-col items-center px-8 mb-9 lg:mb-11">
          <img
            src="icons/sponsors.svg"
            alt="sponsors"
            height={63}
            width={220}
            className="mb-6 h-9 lg:h-14 w-72"
          />
          <div className="max-w-[24rem] lg:max-w-none">
            <h1 className="text-csred text-center font-bold text-2xl mb-2 px-4 lg:px-0 lg:text-3xl">
              Thank you to all of our amazing sponsors!
            </h1>
            <p className="text-cardPrimary text-center font-semibold lg:text-lg lg:font-semibold">
              Explore the companies that believe in what we do.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mb-7 lg:hidden">
          <img src="tiers.svg" alt="tiers" />
        </div>

        <div className="flex flex-col items-center justify-center relative w-full gap-4 mb-10 lg:mb-14 lg:flex-wrap lg:flex-row lg:gap-x-4 lg:gap-y-8">
          <div className="hidden xl:absolute xl:flex xl:justify-center xl:items-center xl:-left-[4.5rem] 2xl:-left-[4.8rem] rounded-l-2xl bg-csred h-[368px] w-[60px]">
            <h1 className="-rotate-90 uppercase text-white text-3xl font-semibold">
              Platinum
            </h1>
          </div>

          {sponsorData.map(({ name, logoPath, logoHeight, logoWidth }) => (
            <SponsorCard
              key={name}
              name={name}
              logoHeight={logoHeight}
              logoWidth={logoWidth}
              logoPath={logoPath}
            />
          ))}
        </div>

        <div className="flex flex-col items-center h-fit">
          <div className="text-center mb-3 max-w-80 lg:max-w-none lg:mb-11">
            <h1 className="text-csred text-center font-bold text-2xl mb-2 lg:text-3xl">
              Meet our Partners
            </h1>
            <p className="text-cardPrimary text-center font-semibold lg:text-lg lg:font-semibold">
              Take a look at the student organizations we partner up with for
              some of our events
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 justify-items-center items-center self-center w-full lg:hidden">
            {partnersData.map(({ name, logoPath }) => (
              <div
                key={name}
                className="flex items-center justify-center w-full h-40"
              >
                <img
                  src={logoPath}
                  alt={`${name} logo`}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:justify-items-center lg:items-center lg:self-center lg:w-full">
            {partnersData.map(({ name, logoPath, websiteLink }) => (
              <PartnerCard
                key={name}
                name={name}
                websiteLink={websiteLink}
                logoPath={logoPath}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;
