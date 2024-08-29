type SponsorCardProps = {
  name: string;
  logoPath: string;
  donationAmount?: number;
  cardHeight: string;
  cardWidth: string;
  logoHeight: number;
  logoWidth: number;
};

const SponsorCard: React.FC<SponsorCardProps> = ({
  cardHeight,
  logoPath,
  name,
  cardWidth,
  logoHeight,
  logoWidth,
}: SponsorCardProps) => {
  return (
    <div
      className={`flex items-center justify-center ${cardHeight} ${cardWidth} rounded-lg shadow-md border border-cardBorder
			`}
    >
      <img src={logoPath} alt={name} height={logoHeight} width={logoWidth} />
    </div>
  );
};

export default SponsorCard;
