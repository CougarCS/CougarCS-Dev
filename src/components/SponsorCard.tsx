type SponsorCardProps = {
  name: string;
  logoPath: string;
  donationAmount?: number;
  logoHeight: number;
  logoWidth: number;
};

const SponsorCard: React.FC<SponsorCardProps> = ({
  logoPath,
  name,
  logoHeight,
  logoWidth,
}: SponsorCardProps) => {
  return (
    <div
      className="flex items-center justify-center h-[150px] w-full lg:h-[10.5rem] lg:w-80 xl:w-[23.2rem] 2xl:w-[25rem] rounded-xl shadow-sm border border-cardBorder hover:border-csred hover:border-2 hover:bg-[#FAE7EA] transition-colors
			"
    >
      <img src={logoPath} alt={name} height={logoHeight} width={logoWidth} />
    </div>
  );
};

export default SponsorCard;
